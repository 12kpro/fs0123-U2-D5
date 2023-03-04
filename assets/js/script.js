document.addEventListener('DOMContentLoaded', (event) => {
    
    const menu = document.querySelector("#menu")
    const scrollChange = 400     // correggere

    window.addEventListener('scroll', function() { 
        window.scrollY >= scrollChange 
                    ?  menu.classList.add("bg-white")
                    :  menu.classList.remove("bg-white")
    })

    let mList = document.querySelectorAll("svg g[stroke-linecap='butt']")
    let anim = setInterval(() => {
        let rand = Math.floor(Math.random() * mList.length)
        let m = mList[rand]
        let hasPath = m.getElementsByTagName('path')
        let opacity = m.getAttribute("opacity")
            hasPath.length && opacity==='0' ? m.setAttribute("opacity", 1 ) : m.setAttribute("opacity", 0 )
    }, 50);
})