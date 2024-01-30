import FluxRequest from "../lib/Flux/FluxyV1/FluxAPI/lib/launcher/FluxRequest.mjs";
import { Simplifier } from "../lib/Flux/FluxyV1/FluxAPI/lib/util/Simplifier.mjs";
 
const    simplifier = new Simplifier()
const    fluxBlog = new FluxRequest("http://localhost:8080/blog")
const    noticys = document.getElementsByClassName('card')
const    noticys_img = document.getElementsByClassName('imgcard')
const    noticys_title = document.getElementsByClassName('title_card')
const    noticys_pg = document.getElementsByClassName('pg_card')
const    banner = document.getElementById('bannerMain');
const 
    size = noticys.length,
    storage = localStorage,
    response = await fluxBlog.fluxStart()
    console.log(response);

    banner.src = response[simplifier.random(response.length)].pathIcon
    
    for (let index = 0; index < size; index++) {
        const element = noticys[index];
        element.addEventListener('click',
        async (event) => {
            const 
                post = event.currentTarget,
                request = new FluxRequest(`http://localhost:8080/blog/${post.dataset.id}`),
                promise =  await request.fluxStart();
    
            storage.setItem('blog',JSON.stringify(promise[0]))
            open('http://127.0.0.1:5500/sigle%20de%20not%C3%ADcias/index.html')
        })
    }
    for (let id = 0; id <= size; id++){ 
        noticys_img[id].src = await response[id].pathIcon;
        noticys_title[id].textContent = await response[id].title;
        noticys_pg[id].textContent = await response[id].comentario;
        noticys[id].dataset.id = response[id].title  }