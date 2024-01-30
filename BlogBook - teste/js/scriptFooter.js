document.addEventListener("DOMContentLoaded", function(){
    let btnVoltarAoTopo = document.getElementById("arrow_footer")
    if(btnVoltarAoTopo) {
        btnVoltarAoTopo.addEventListener("click", function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    }
})