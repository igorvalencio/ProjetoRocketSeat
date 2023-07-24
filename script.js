function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#perfil img")
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/perfil.jpg")
    }else{
        img.setAttribute("src", "./assets/3x4.jpg")
    }
    
        
 }