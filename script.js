//! setTimeout
//! ===>Example: 
// function helloAll() {
//     console.log("PRABHAKARAN")
// }
// setTimeout(helloAll, 3000)
// clearTimeout()

// o/p: after 3000 m/s only once print the name
// PRABHAKARAN

// o/p:clearTimeout(1)    
// undefined     becoz function is stopped

// (given the inputs are console part)

// *************************************************************************************************************************

//! setInterval
//! ===>Example: 
// function helloAll() {
//     console.log("PRABHAKARAN")
// }
// setInterval(helloAll, 3000)
// clearInterval()

// o/p: ஒவ்வொரு 3000 milliseconds க்கு ஒவ்வொரு முறையும் PRABHAKARAN என்று excute or print or count ஆகிக்கொண்டே இருக்கும்.

// o/p:clearInterval(1)    
// undefined     எத்தனை முறை name, print ஆகி உள்ளதோ அதனுடன் நின்றுவிடும் becoz function is stopped

// (given the inputs are console part)

// *************************************************************************************************************************

//! setTimeout & setInterval

//! ===>Real Time Example: 

//! HTML Part: 
{/* <div class="h-text">
<div class="h-animate">
    <span class="text first-text">I'm a&nbsp;</span>
    <span class="text sec-text" id="text1">Web Developer</span>
</div>
</div>  */}


// ! script.js Part: 
const text = document.querySelector(".sec-text")
const textload =() =>{
    setTimeout(()=>{
   text.textContent = "Developer"
    },0)
    setTimeout(()=>{
        text.textContent = "Front-End Developer"
         },6000)
         setTimeout(()=>{
            text.textContent = "Back-End Developer"
             },12000)
}
textload();
setInterval(textload,18000);

// *************************************************************************************************************************