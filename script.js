function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();


function MouseMover(){
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
MouseMover();

function firstAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: .2
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
firstAnim();

var strbtn =document.querySelector(".startbtn");
strbtn.addEventListener("click", function(){
  function js1(){
  
    function difnum(){
      var cluter = "";
    for(let i=1; i<=152; i++){
      var rn = Math.floor(Math.random()*10);
      cluter += `<div class="bubble">${rn}</div>`;   
    }
    document.querySelector(".pbtm").innerHTML = cluter;
    };
    
    
    let timer = 60 ;
    let timerbox = document.querySelector("#timerval");
    
    function runtimer(){
      var timerstop = setInterval(function(){
          if(timer>0){
              timer--;
              timerbox.textContent = timer;
          }else{
              clearInterval(timerstop);
              document.querySelector(".pbtm").innerHTML = `<h1>Game over</h1>`
          }
          
      },1000)
    };
    
    var hitrn = 0;
    function get(){
      var hitbox = document.querySelector("#hitval");
      hitrn = Math.floor(Math.random()*10);
      hitbox.textContent = hitrn;
    };
    
    var score = 0;
    function increasetime(){
      score += 10;
      var increase = document.querySelector("#scoreval");
      increase.textContent = score;
      
    }
    
    
    
    document.querySelector(".pbtm").addEventListener("click", function(dets){
     var clickenum = Number(dets.target.textContent);
     if(clickenum === hitrn){
      increasetime()
      difnum()
    get()
     }
    
    
    })
    
    difnum(); 
    get();
    runtimer();
    // increasetime();
    
    
    }
    js1();

})


// project 2

var rect = document.querySelector(".center");
rect.addEventListener("mousemove", function(dets){
  var rectlocation = rect.getBoundingClientRect();
  var rectx = dets.clientX - rectlocation.left;

  if (rectx < rectlocation.width / 2) {
    var redcolor = gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0, rectx);
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      ease: "none" 
    });
  } else {
    var bluecolor = gsap.utils.mapRange( rectlocation.width / 2, rectlocation.width, 0, 255, rectx);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${bluecolor})`,
      ease: "none" 
    });
  }
});

rect.addEventListener("mouseleave", function(){
  gsap.to(rect, {
    backgroundColor: "white",
    ease: "none" 
  });
});


var js3 = document.querySelector(".h22");
js3.addEventListener("mousemove", function(dets){
  var rect = document.querySelector(".rect");
  var xval= gsap.utils.mapRange( 
    0, 
    window.innerWidth, 
    100+rect.getBoundingClientRect().width/2, 
    window.innerWidth -200 - rect.getBoundingClientRect().width/2, 
    dets.clientX);
  gsap.to(".rect", {
    x: xval+ "px",
  });
});


var js4 = document.querySelector(".centr");
// js4.addEventListener('mousemove', function(dets){
//   var div =(document.createElement("div"));
//   div.classList('imgdiv')


// })

var js4 = document.querySelector(".centr");
const throttleFunction=(func, delay)=>{
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
    console.log(now-prev, delay); 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }
}

js4.addEventListener("mousemove", throttleFunction((dets)=>{
  var div = document.createElement('div');
  div.classList.add('imgdiv');
  document.body.appendChild(div);
  div.style.left = dets.clientX + 'px';
  div.style.top = dets.clientY + 'px';

  var img = document.createElement('img')
  img.setAttribute("src" , "https://images.unsplash.com/photo-1698635363145-ec65069f6cdd?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8");
  div.appendChild(img)

  gsap.to(img,{
    y: "0",
    ease: Power1,
    delay: 0.2,
    duration: 0.6
  })

  gsap.to(img,{
    y: "100",
    ease: Power1,
    duration: 0.2
  })

  setTimeout(function(){
    div.remove()
  },1000)
    
}, 400));

