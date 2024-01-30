const 
    banner = document.getElementById('img_sigle'),
    title = document.getElementById('title_sigle'),
    textPhar1 = document.getElementById('txt_sigle');




const noticyStorage = localStorage;

const obj = JSON.parse(noticyStorage.getItem('blog'))
banner.setAttribute('src',obj.pathIcon)
title.textContent = obj.title
textPhar1.textContent = obj.comentario