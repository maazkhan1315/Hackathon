const button = document.getElementById('button-for-skills') as HTMLButtonElement
const skills = document.getElementById('for-skills') as HTMLElement

button.addEventListener('click',()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'

    }else{
        skills.style.display = 'none'
    }
});