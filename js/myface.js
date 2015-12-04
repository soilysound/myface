(function(){

    var grid = document.getElementById('site-grid'),
        background = document.getElementById('site-background'),
        siteLinks = document.getElementsByClassName('site-nav__link');

    function loadPeople(){
        var contents = '';
        background.className = '';

        // create the people elements
        grid.innerHTML = '';
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
    }

    function loadTribes(){
        var contents = '';
        background.className = 'active';

        console.log("Load the tribes =)");

        // create the tribes elements
        grid.innerHTML = '';
        skyFaceData.tribes.forEach(function(tribe, i){

            var str = '<div class="grid__item"';

            str += ' data-name="' + tribe.name + '">';

            str += '<a class="tile">';
            str += '<div class="tile__inner">';

            str += '<div class="tile__image-wrap">';
            str += '<img class="tile__image" src="' + tribe.image +'">';
            //
            str += '</div>';

            str += '<div class="tile__body">';
            str += '<h2 class="tile__heading">' + tribe.name + '</h2>';
            str += '<h3 class="tile__sub-heading">Associate Software Developer</h3>';
            str += '</div>';

            str += '</div>';
            str += '</a>';
            str += '</div>';

            contents += str;
        });

        grid.innerHTML = contents;

    }

    function loadSquads(){
        var contents = '';
        background.className = 'active';
        console.log("Load the squads =)");

        // create the tribes elements
        grid.innerHTML = '';
        skyFaceData.squads.forEach(function(squad, i){

            var str = '<div class="grid__item"';

            str += ' data-name="' + squad.name + '">';

            str += '<a class="tile">';
            str += '<div class="tile__inner">';

            str += '<div class="tile__image-wrap">';
            str += '<img class="tile__image" src="' + squad.image +'">';
            //
            str += '</div>';

            str += '<div class="tile__body">';
            str += '<h2 class="tile__heading">' + squad.name + '</h2>';
            str += '<h3 class="tile__sub-heading">Associate Software Developer</h3>';
            str += '</div>';

            str += '</div>';
            str += '</a>';
            str += '</div>';

            contents += str;
        });

        grid.innerHTML = contents;
    }

    function loadData(e){
        var loadTarget = e.target.getAttribute('data-load');

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
        siteLinks[i].onclick = loadData;
    }

    loadPeople();

})();
