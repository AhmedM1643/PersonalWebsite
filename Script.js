window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

const Scroll = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 200,
//     reset: true
});

Scroll.reveal('.Main,.section-title,.AboutMe,.Skills,.Skill,.Exp,.Services,.GridLayout,.Service,.Projects,.Project,.Contact,.ContactForm,Input,textarea',{}); 
