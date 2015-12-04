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
        str += '<h3 class="tile__sub-heading">Associate Software Developer</h3>';
        str += '</div>';

        str += '</div>';
        str += '</a>';
        str += '</div>';

        contents += str;
    });

    grid.innerHTML = contents;

})();
