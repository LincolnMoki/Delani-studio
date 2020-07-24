const signUpbutton = document.getElementById('singUp');
const signIn = document.getElementById('singIn');
const container = document.getElementById('container');

signUpbutton.addEventListener('click',() =>{
    container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
