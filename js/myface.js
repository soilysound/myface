(function(){

    var content = document.getElementById('site-content');
    var contents = '';

    // create the people elements
    skyFaceData.people.forEach(function(person, i){
        //console.log(i, person);

        var str = '<a class="tile"';

        str += ' data-name="'+person.name+'"';
        str += ' data-discipline="'+person.discipline+'"';
        str += ' data-squad="'+person.squad.name+'"';
        str += ' data-tribe="'+person.squad.tribe.name+'"';

        str += '>'+person.name+'</a>';

        contents += str;
    });

    content.innerHTML = contents;

})();
