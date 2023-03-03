document.addEventListener('DOMContentLoaded', (event) => {
    let scrollpos = window.scrollY

    const menu = document.querySelector("#menu-wrapper")
    const scrollChange = 50     // correggere

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        console.log(scrollpos);
        scrollpos >= scrollChange 
                    ?  menu.classList.add("bg-white")
                    :  menu.classList.remove("bg-white")
    })
    })