document.addEventListener('DOMContentLoaded', (event) => {
    let scrollpos = window.scrollY

    const menu = document.querySelector("#menu-wrapper")
    const scrollChange = 50     // correggere

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        scrollpos >= scrollChange 
                    ?  menu.classList.add("bg-white")
                    :  menu.classList.remove("bg-white")
    })

    let mList = document.querySelectorAll("svg  path")
    let anim = setInterval(() => {
        let rand = Math.floor(Math.random() * mList.length)
        let m = mList[rand]
        m.style.opacity ? m.style.opacity = 1 : m.style.opacity = 0
    }, 200);
})