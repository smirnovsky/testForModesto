document.getElementById("btn").addEventListener("click", function(){
    document.querySelector('.captcha').classList.remove('hide')
    document.querySelector('.form').classList.add('hide')
    document.querySelector('.form-button__forward').classList.add('hide')
    document.querySelector('.form-button__back').classList.remove('hide')
});

document.getElementById("btn-back").addEventListener("click", function(){
    document.querySelector('.captcha').classList.add('hide')
    document.querySelector('.form').classList.remove('hide')
    document.querySelector('.form-button__back').classList.add('hide')
    document.querySelector('.form-button__forward').classList.remove('hide')
});