//window.onload = function(){
    //var url = "https://github.com/CostinaB/Resume/blob/master/scripts/profile.json";
    fetch('scripts/profile.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        showContent(data);
    })
    .catch(function(err){
        alert(err);
    }); 

function showContent(data){
    showAbout(data['about_me']);
    showContact(data['contact']);
    showEducation(data['education']);
    showProjects(data['projects']);
    showInterests(data['interests']);
    showSkills(data['skills']);
};

function showAbout(data){
    var section = document.querySelector('.about_me');
    var title = document.createElement('div');
    title.classList.add('title');
    section.appendChild(title);
    var name = document.createElement('h1');
    name.id = 'name';
    name.textContent = data['last_name'].toUpperCase() + " " + data['first_name'].toUpperCase();
    title.appendChild(name);
    var quote = document.createElement('i');
    quote.classList.add('fa');
    quote.classList.add('fa-quote-left');
    section.appendChild(quote);
    quote = document.createElement('i');
    quote.classList.add('fa');
    quote.classList.add('fa-quote-right');
    var description = document.createElement('p');
    description.textContent = data['description'];
    section.appendChild(description);
    section.appendChild(quote);
};
function showContact(data){
    var section = document.querySelector('.contact');
    var name = document.createElement('h2');
    name.textContent = "CONTACT";
    section.appendChild(name);
    var p = document.createElement('p');
    var icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-envelope-o');
    section.appendChild(icon);
    p.textContent = data['email'];
    section.appendChild(p);
    p = document.createElement('p');
    p.textContent = data['phone'];
    icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-mobile');
    section.appendChild(icon);
    section.appendChild(p);
    p = document.createElement('p');
    p.textContent = data['website'];
    icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-laptop');
    section.appendChild(icon);
    section.appendChild(p);
};
function showEducation(data){
    var section = document.querySelector('.education');
    var name = document.createElement('h2');
    name.textContent = "EDUCATION";
    section.appendChild(name);
    for(let i = 0; i < data.length; i++){
        var title = document.createElement('h4');
        title.textContent = (data[i]['diploma'] || "") + " " + (data[i]['specialization'] || "");
        section.appendChild(title);
        var p = document.createElement('p');
        p.textContent = data[i]['college'] || "";
        section.appendChild(p);
        p = document.createElement('p');
        p.textContent = data[i]['faculty'] || "";
        section.appendChild(p);
        p = document.createElement('p');
        p.textContent = data[i]['start_date'] + " - " + data[i]['end_date'];
        section.appendChild(p);
    }
    
};
function showProjects(data){
    var section = document.querySelector('.projects');
    var name = document.createElement('h2');
    name.textContent = "PROJECTS";
    section.appendChild(name);
    for(let i = 0; i < data.length; i++){
        var title = document.createElement('h4');
        title.textContent = data[i]['title'];
        section.appendChild(title);
        var highlights = data[i]['highlights'];
        if(highlights.length !== 0){
            var list = document.createElement('ul');
            for(let j = 0; j < highlights.length; j++){
                var item = document.createElement('li');
                item.textContent = highlights[j];
                list.appendChild(item);
            }
        }
        section.appendChild(list);
    }
};
function showInterests(data){
    var section = document.querySelector('.interests');
    var name = document.createElement('h2');
    name.textContent = "INTERESTS";
    section.appendChild(name);
    if(data.length !== 0){
        for(let i = 0; i < data.length; i++){
            var image = document.createElement('img');
            image.setAttribute('src', "img/" + data[i] + ".png");
            section.appendChild(image);
        }
    }
};
function showSkills(data){
    var section = document.querySelector('.skills');
    var name = document.createElement('h2');
    name.textContent = "SKILLS";
    section.appendChild(name);
    name = document.createElement('h3');
    name.textContent = "LANGUAGES";
    section.appendChild(name);
    var languages = data['languages'];
    var technologies = data['technologies'];
    if(languages.length !== 0){
        for(let i = 0; i < languages.length; i++){
            var p = document.createElement('p');
            p.textContent = languages[i]['name'] + " - " + languages[i]['proficiency'];
            p.classList.add('bold');
            section.appendChild(p);
            if(languages[i]['certificate'] != undefined){
                p = document.createElement('p');
                p.textContent = languages[i]['certificate'];
                section.appendChild(p);
            }
        }
    }
    name = document.createElement('h3');
    name.textContent = "TECHNOLOGIES";
    section.appendChild(name);
    if(technologies.length !== 0){
        for(let i = 0; i < technologies.length; i++){
            var category = document.createElement('h4');
            category.textContent = technologies[i][0]['name'];
            category.classList.add('float-left');
            if(technologies[i][0]['class'] != undefined){
                category.classList.add(technologies[i][0]['class']);
            }
            section.appendChild(category);
            for(let j = 0; j < technologies[i][0]['level']; j++){
                var circle = document.createElement('div');
                circle.classList.add('circle');
                section.appendChild(circle);
            }
            for(let k = technologies[i][0]['level']; k < 5; k++){
                var circle = document.createElement('div');
                circle.classList.add('empty');
                circle.classList.add('circle');
                section.appendChild(circle);
            }
            var tech = document.createElement('p');
                tech.classList.add('clear');
                for(let k = 1; k < technologies[i].length; k++){
                    tech.textContent += technologies[i][k];
                    if(k != technologies[i].length - 1){
                        tech.textContent += ', ';
                    }
                }
            section.appendChild(tech);
        }
    }
};