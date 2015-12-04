(function(){

    var grid = document.getElementById('site-grid');
    var contents = '';

    // create the people elements
    skyFaceData.people.forEach(function(person, i){
        //console.log(i, person);

        var str = '<div class="grid__item"';

        str += ' data-name="'+person.name+'"';
        str += ' data-discipline="'+person.discipline+'"';
        str += ' data-squad="'+person.squad.name+'"';
        str += ' data-tribe="'+person.squad.tribe.name+'"';

        str += '><a class="tile">'+person.name+'</a></div>';

        contents += str;
    });

    grid.innerHTML = contents;

})();
