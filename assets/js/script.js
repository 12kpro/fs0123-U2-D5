



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



    let trendingCnt = document.querySelector('.trends-content')
    let postsCnt = document.querySelector('.posts-content')
    let discoverCnt = document.querySelector('.discover-content')
    let politicsCnt = document.querySelector('.tags')

    for (let el of discover) {
        discoverCnt.insertAdjacentHTML('beforeend', linkTpl(el));
    }

    for (let el of politics) {
        politicsCnt.insertAdjacentHTML('beforeend', linkTpl(el));
    }
    for (let [i, t] of trendingArticles.entries()) {
        trendingCnt.insertAdjacentHTML('beforeend', trendingTpl(i + 1, t.author, t.icon, t.title, t.date, t.timeRead, t.category));
    }
    for (let p of posts) {
        postsCnt.insertAdjacentHTML('beforeend', postTpl(p.title, p.icon, p.author, p.content, p.date, p.timeRead, p.tag, p.img));
    }
})