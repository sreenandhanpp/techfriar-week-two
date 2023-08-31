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

