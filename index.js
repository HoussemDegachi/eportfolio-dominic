/*
  Shapes move
*/

const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

/*
      contrast page
*/

let contrastToggle = false

function toggleContrast(){
  contrastToggle = !contrastToggle
  if(contrastToggle){
  document.body.classList += " dark-theme"
  }else{
    document.body.classList.remove ("dark-theme")
  }
}

/* 
      email service
*/

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      "service_q1z2jtf",
      "template_bd0mi68",
      this
    )
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += (" modal__overlay--visible");
 }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarly unavailable please contact me directly on xx@xx.com"
        )
    });
}

/*
      Open Modal
*/

let isModalOpen = false;
function toggleModal(){
    //toggle Modal
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove ("modal__open");
    }else{
        isModalOpen = true;
       return document.body.classList += " modal__open";
    }
}

 /*
  Intersection Observer
 */

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if(entery.isIntersecting){
      entery.target.classList.add('show')
    }else{
      entery.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))