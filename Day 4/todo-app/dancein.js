//1 on enter check if Or
// if or directs to other page

const check = document.getElementById('check');

check.addEventListener('keydown', (e)=>{
  if(e.code === 'Enter' ){
    if(check.value == 'or'){
      location.replace("./main.html");
    }
    else{
      
      alert('Please enter write answer');
    }
  } 
});