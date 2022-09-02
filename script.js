const  dino = document.querySelector('#Player')
const  city = document.querySelector('.city')
const  hidrante = document.querySelector('#Hidrante')

function jump(){
    
    if(Player.classList != 'animar'){
        Player.classList.add('animar')
    }

    setTimeout(function(){
        Player.classList.remove('animar')
    }, 500)    
}


let isAlive = setInterval(function () {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  
    let hidranteLeft = parseInt(
      window.getComputedStyle(hidrante).getPropertyValue("left")
    );
    
    if (hidranteLeft < 65 && hidranteLeft > 0 && dinoTop >= 180) {
      alert("Fim de Jogo!");
      city.style.removeProperty('animation');
    }
  }, 10);
  
  document.addEventListener("keydown", function (event) {
    jump();
  });

