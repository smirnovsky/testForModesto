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



document.querySelectorAll('a[href*="#start"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const blockID = anchor.getAttribute('href').substr(1);
      if(document.getElementById(blockID)) {
        e.preventDefault();
  
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });