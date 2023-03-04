document.addEventListener('DOMContentLoaded', (event) => {
    
    const menu = document.querySelector("#menu")
    const scrollChange = 400     // correggere

    window.addEventListener('scroll', function() { 
        window.scrollY >= scrollChange 
                    ?  menu.classList.add("bg-white")
                    :  menu.classList.remove("bg-white")
    })

    let mList = document.querySelectorAll("svg  path")
    let anim = setInterval(() => {
        let rand = Math.floor(Math.random() * mList.length)
        let m = mList[rand]
//        console.log(m.style.opacity);
        m.style.opacity || m.style.opacity === "0" ? m.style.opacity = 1 : m.style.opacity = 0
    }, 50);
})