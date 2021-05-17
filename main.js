const button = document.querySelector('.expand')
const navbar = document.querySelector('nav')
const nav__open = document.querySelector('.nav__open')


// const tween = TweenLite.to('.cover',1, {
//           width:'50%'
// })

const t1 = new TimelineLite({paused:true, reversed: true})

t1.fromTo('.cover',2,{width:'0%'},{width:'100%'})
.to('nav',1,{height:'100%'},'-=1')
// .to('.nav__open',1, {opacity:1})
// .from('.img__one',1, {x:'-100px'},'-=1')
// .to('.img__two',1, {x:'100px'},'-=1')
.fromTo('.nav__open',1, {
          opacity:0,
          x:150,
          ease:Power2.easeOut
},{
          opacity:1,
          x:0,
          ease:Power2.easeOut,
          onComplete: ()=>{
                    nav__open.style.pointerEvents = 'auto'
          }
},'-=0.2')


// button.addEventListener('click',()=>{
//           t1.play()
// })

button.addEventListener('click',(e)=>{

          if(t1.isActive()){
                e.preventDefault()
                e.stopImmediatePropagation()
                return false
          }

          reverseIt(t1)
})

function reverseIt(reverse){
          reverse.reversed() ? reverse.play() : reverse.reverse()
}