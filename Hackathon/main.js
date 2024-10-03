var button = document.getElementById('button-for-skills');
var skills = document.getElementById('for-skills');
button.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
