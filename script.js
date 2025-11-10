//===== Dark Mode Toggle =====
const toggleBtn=document.getElementById('theme-toggle');
const body= document.body;

//Check if user had enabled dark mode previously

if(localStorage.getItem('theme')==='dark'){
    body.classList.add('dark-mode');
    toggleBtn.textContent='☀️';
} else {
    toggleBtn.textContent='🌙';
}

//Toggle dark mode on button click
toggleBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme','dark');
        toggleBtn.textContent = '☀️';

    }
    else{
        localStorage.setItem('theme','light');
        toggleBtn.textContent= '🌙';
    }
})