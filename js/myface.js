(function(){

    var grid = document.getElementById('site-grid');
    var contents = '';

    // create the people elements
    skyFaceData.people.forEach(function(person, i){

        var str = '<div class="grid__item"';

        str += ' data-name="' + person.name + '"';
        str += ' data-discipline="' + person.discipline + '"';
        str += ' data-squad="' + person.squad.name + '"';
        str += ' data-tribe="' + person.squad.tribe.name + '">';

        str += '<a class="tile">';
        str += '<div class="tile__inner">';

        str += '<div class="tile__image-wrap">';
        str += '<img class="tile__image" src="' + person.image +'">';
        //
        str += '</div>';

        str += '<div class="tile__body">';
        str += '<h2 class="tile__heading">' + person.name + '</h2>';
        str += '<h3 class="tile__sub-heading">' + person.discipline.join(',') + '</h3>';
        str += '</div>';

        str += '</div>';
        str += '</a>';
        str += '</div>';

        contents += str;
    });

    grid.innerHTML = contents;

})();

(function(){

  function find(data,search){

    var foundAll = [];

    var people = data.people;
    
    for(var i=0; i< people.length;i++){
      var object = people[i];
      
      for (key in object){
        
        var keySearch = (object[key].toString()).toLowerCase();
        if( keySearch.indexOf(search) != -1 ){
          if(foundAll.indexOf(object) == -1){
            foundAll.push(object);
          }
        }
      }
    }

    return foundAll;
  }


  function getPersonDetail( person, what){

    var detail={};
    for(var i=0;i<what.length;i++){
      if(person.hasOwnProperty(what[i])){
        detail[what[i]] = person[what[i]];
      }
    }
    return detail;
  }


  function setCss(css){
    window.style.textContent = css;

  }

  function createResults(results){

    var html = document.createDocumentFragment();
    var css = '.grid__item {display: none}';

    results.forEach(function(item){

      var li = document.createElement('li');
      var link = document.createElement('a');
      link.setAttribute('data-name', item.name);
      css += cssTemplate.replace(/#{name}/, item.name);

      link.innerHTML = [
        "<strong>" + item.name + "</strong>",
        "<p>" + item.discipline + "</p>"
      ].join('');

      link.onclick = filter;
      li.appendChild(link);
      html.appendChild(li);

    });

    return [html, css];

  }

  var searchBox = document.querySelector('.search__input');
  var searchResults = document.querySelector('.search__results');
  var cssTemplate = '.grid__item[data-name="#{name}"] {display: block}';

  window.style = document.createElement('style');
  document.head.appendChild(window.style);

  searchBox.onkeyup = function(e){

    var result;
    searchResults.innerHTML = "";
    setCss('');

    if(searchBox.value.length > 1){
      result = createResults(find(window.skyFaceData, searchBox.value));
      searchResults.appendChild(result[0] || document.createDocumentFragment());
      setCss(result[1]);

    }


  };

})();

function filter(name){

    var css = '.grid__item:not([data-name="' + name + '"]) {display: none}';
    window.style.textContent = (css);
}
