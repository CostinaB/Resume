window.onload = function(){
    var url = "https://github.com/CostinaB/Resume/blob/master/profile.json";
    /*fetch('profile.json', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(response => showContent(response.json()))
    .catch(function(err){
        alert("eroare " + err);
    });*/
    fetch('profile.json')
    .then(response => showContent(response.json()))
    .catch(function(err){
        alert("eroare " + err);
    });
};

function showContent(data){
    showAbout(data['about_me']);
};

function showAbout(data){
    var title = document.createElement('h1');
    document.body.appendChild(title);
    var birth = document.createElement('p');
    var description = document.createElement('p');
    title.textContent = data['first_name'] + " " + data['last_name'];
    birth.textContent = data['age'] + " (" + data['birthdate'] + ")";
    description.textContent = data['description'];
    var section = document.querySelector('div.about_me');
    section.appendChild(title);
    section.appendChild(birth);
    section.appendChild(description);
};
var sectiontest = document.querySelector('div.about_me');
//sectiontest.style.backgroundColor = "blue";
document.body.style.backgroundColor = "blue";