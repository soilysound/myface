
(function(){

  function find(data,search){

    search = search.toLowerCase();

    var foundAll = [];

    var people = data.people;

    for(var i=0; i< people.length;i++){
      var object = people[i];

      for (key in object){

        var keySearch = object[key].toString();
        keySearch = keySearch.toLowerCase()

        if( keySearch.indexOf(search) !== -1 ){
          if(foundAll.indexOf(object) === -1){
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

  function searchPeople(e){

    var result;
    searchResults.innerHTML = "";
    setCss('');
    console.log(searchBox.value);
    if(searchBox.value.length > 1){
      result = createResults(find(window.skyFaceData, searchBox.value));
      searchResults.appendChild(result[0] || document.createDocumentFragment());
      setCss(result[1]);
    }
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
        "<p>" + item.discipline.join(', ') + "</p>"
      ].join('');

      link.onclick = filter;
      li.appendChild(link);
      html.appendChild(li);

    });

    return [html, css];

  }

  var search = document.querySelector('.search');
  var searchBox = document.querySelector('.search__input');
  var searchResults = document.querySelector('.search__results');
  var cssTemplate = '.grid__item[data-name="#{name}"] {display: block}';

  window.style = document.createElement('style');
  document.head.appendChild(window.style);

  searchBox.onkeyup = searchPeople;

  document.body.onclick = function(e){

    if(!search.contains(e.target)){
      searchResults.innerHTML = "";
    }
  };

  var hash = location.hash;
  if(hash){
    searchBox.value = hash.replace(/#/, '');
    searchPeople()
  }

})();

function filter(name){
    var css = '.grid__item:not([data-name="' + name + '"]) {display: none}';
    window.style.textContent = (css);
}

function filterByClass(cls){
    var css = '.grid__item:not(' + cls + ') {display: none}';
    window.style.textContent = (css);
}

function filterBySquad(name){
    var css = '.grid__item:not(.grid__item--people) {display: none}';
    css += '\n .grid__item:not([data-squad="' + name + '"]) {display: none}';
    window.style.textContent = (css);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

(function(){

    var grid = document.getElementById('site-grid'),
        wrapper = document.getElementsByClassName('site-wrapper')
        background = document.getElementById('site-background'),
        siteLinks = document.getElementsByClassName('site-nav__link'),
        contents = '',
        peopleLoaded = false,
        tribesLoaded = false,
        squadsLoaded = false;

    function loadPeople(){
        background.className = '';

        if(!peopleLoaded){

            // create the people elements
            skyFaceData.people.forEach(function(person, i){

                var str = '<div class="grid__item grid__item--people"';

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
                str += '<h3 class="tile__sub-heading">' + person.discipline.join(', ') + '</h3>';
                str += '</div>';

                str += '</div>';
                str += '</a>';
                str += '</div>';

                contents += str;
            });

            grid.innerHTML = contents;
            peopleLoaded = true;
        }

        filterByClass('.grid__item--people');
    }

    function loadTribes(){
        background.className = '';

        if(!tribesLoaded){

            // create the tribes elements
            skyFaceData.tribes.forEach(function(tribe, i){

                var str = '<div class="grid__item grid__item--tribe"';

                str += ' data-name="' + tribe.name + '">';

                str += '<a class="tile grid__link--tribe" href="#">';
                str += '<div class="tile__inner">';

                str += '<div class="tile__image-wrap">';
                str += '<img class="tile__image" src="' + tribe.image +'">';
                str += '</div>';

                str += '<div class="tile__body">';
                str += '<h2 class="tile__heading">' + tribe.name + '</h2>';
                str += '</div>';

                str += '</div>';
                str += '</a>';
                str += '</div>';

                contents += str;
            });

            grid.innerHTML = contents;
            tribesLoaded = true;
        }

        filterByClass('.grid__item--tribe');
    }

    function loadSquads(){
        background.className = '';

        if(!squadsLoaded){

            // create the tribes elements
            skyFaceData.squads.forEach(function(squad, i){

                var str = '<div class="grid__item grid__item--squad"';
                str += ' data-background="' + squad.background + '"';
                str += ' data-name="' + squad.name + '">';

                str += '<a class="tile grid__link--squad" href="#">';
                str += '<div class="tile__inner">';

                str += '<div class="tile__image-wrap">';
                str += '<img class="tile__image" src="' + squad.image +'">';
                str += '</div>';

                str += '<div class="tile__body">';
                str += '<h2 class="tile__heading">' + squad.name + '</h2>';
                str += '</div>';

                str += '</div>';
                str += '</a>';
                str += '</div>';

                contents += str;
            });

            grid.innerHTML = contents;
            initSquadLinks();
            squadsLoaded = true;
        }

        filterByClass('.grid__item--squad');
    }

    function initSquadLinks(){
        var squadLinks = document.getElementsByClassName('grid__link--squad');
        // add the event to handle clicks
        for(var i = 0; i < squadLinks.length; i++){
            squadLinks[i].addEventListener("click", function(e){
                e.preventDefault();
                var loadTarget = this.parentNode.getAttribute('data-name'),
                    bg = this.parentNode.getAttribute('data-background');
                filterBySquad(loadTarget);
                background.className = 'active';
                background.style.backgroundImage = 'url(' + bg + ')';
            });
        }
    }

    function loadData(loadTarget){
        if(loadTarget === "tribes"){
            loadTribes();
        }else if(loadTarget === "squads"){
            loadSquads();
        }else{
            loadPeople();
        }
    }

    // add the event to handle clicks
    for(var i = 0; i < siteLinks.length; i++){
        siteLinks[i].addEventListener("click", function(e){
            e.preventDefault();
            var loadTarget = e.target.getAttribute('data-load');
            loadData(loadTarget);
        });
    }

    loadPeople();

})();
