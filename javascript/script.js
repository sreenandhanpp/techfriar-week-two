document.addEventListener('DOMContentLoaded', function() {

    let toggle = true;
    const img1 = document.getElementById('img1');
    const input = document.getElementById('password');
    img1.addEventListener('click',()=>{
        toggle = !toggle
        if(toggle){
            img1.setAttribute('src','/assets/icons/eye-slash.svg');
            input.setAttribute('type','text');
        }else{
            img1.setAttribute('src','./assets/icons/eye.svg')
            input.setAttribute('type','password');
        }
    })
  
});
document.addEventListener('DOMContentLoaded', function() {
    let toggle = true;
    const img1 = document.getElementById('img2');
    const input = document.getElementById('confirmpass');
    img1.addEventListener('click',()=>{
        toggle = !toggle
        if(toggle){
            img1.setAttribute('src','/assets/icons/eye-slash.svg')
            input.setAttribute('type','text');
        }else{
            img1.setAttribute('src','./assets/icons/eye.svg')
            input.setAttribute('type','password');
        }
    })
  
});



//view all action


function viewAll(){
    const a = document.getElementById('view-all');
    const display = document.getElementById('display');
    const acitvity = document.getElementById('activities');
    if(display.style.display == 'none'){
        a.innerHTML = 'Collapse';
        display.style.display = 'block'
        acitvity.style.height = '800px'
    }else{
        a.innerHTML = 'view-all';
        display.style.display = 'none'
        acitvity.style.height = '300px'
    }
}


    
    
    
  

