window.addEventListener('load', function(){  
    let n = document.getElementById("name").value;
    let p = document.getElementById("phone").value;
    let e = document.getElementById("email").value;

    if(n == " ") {
        // n.style.border = "2px solid red";
        return false;

    }
    if(p == " ") {
        document.getElementById("p").style.border = "thick solid #0000FF";
        // p.style.border = "2px solid red";
        return false;
    }
    if(e == " ") {
        // e.style.border = "2px solid red";
        return false;
    }
    
    return true;
});