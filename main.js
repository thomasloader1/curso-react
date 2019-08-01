var a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();
    var div = document.createElement("div");
    var p = document.createElement("p");
    var buttonOk = document.createElement("button");
    var buttonCancel = document.createElement("button");

    p.innerText = "Esta seguro que quiere salir de la pagina?";
    buttonOk.innerText = "Si, claro que si.";
    buttonOk.id = "ok";
    buttonCancel.innerText = "No, ni loco";
    buttonCancel.id = "cancel";


    document.body.appendChild(div);
    div.appendChild(p);
    div.appendChild(buttonOk);
    div.appendChild(buttonCancel);

    document.body.addEventListener("click", (e)=>{
        if(e.target.id == "ok"){
            window.location = "https://www.google.com";
        }else if(e.target.id == "cancel"){
            document.body.removeChild(div);
        }
    })

})