var a = document.getElementsByTagName('a');
var main = document.querySelector('#daBox');

var xhr = new XMLHttpRequest;

xhr.addEventListener('readystatechange', ()=>{
    console.log(`El estado actual de XHR es ${xhr.readyState}`);
});

xhr.addEventListener('load', ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
        main.innerHTML = xhr.response;
    }
});

for(let i = 0; i < a.length ; i++){

    a[i].addEventListener("click", (e) =>{
        e.preventDefault();

        switch(a[i]){
            case a[0]:
                xhr.open('get', 'perfil.html');
                xhr.send();
            break;
        
            case a[1]:
                xhr.open('get', 'portfolio.html');
                xhr.send();
            break;
        
            case a[2]:
                xhr.open('get', 'contacto.html');
                xhr.send();
            break;
            
        }
        
    });
    
}