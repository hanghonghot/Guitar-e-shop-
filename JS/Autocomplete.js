let Akeywords = [
    'guitar',
    'guitar classic',
    'guitar accoustic',
    'Drum',
    'Accessory',
    'guitar string',
    'string',
    'strings',
    'guitar string',
    'stands',
    'cable',
    'connector',
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result= [];
    let input = inputBox.value;
    if(input.length){
        result= Akeywords.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML= '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick= selectInput(this)>"+ list+ "</li>";
    });
    resultsBox.innerHTML = "<ul>"+ content.join(' ') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
// ---------------------Hamberger-menu-----------------
// ---------------------sticky menu-------
const navbar = document.querySelector('#NavBar');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);