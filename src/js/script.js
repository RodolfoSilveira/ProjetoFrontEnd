function monitoramento (){
    const url = '../../pagina/sobre.html'
    const botao = document.getElementById('monitor')
    const local = document.querySelector('[wb-moderno]')
    botao.onclick = () =>{
        navegarViaAjax(url,local)
    }
}

monitoramento()

function navegarViaAjax(url, seletor){
    if(!url || !seletor) return
    fetch(url)
        .then(resp => resp.text())
        .then(html => seletor.innerHTML = html)
}


$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('transparencia');
    }else {
        $('nav').removeClass('transparencia').css({"transition":"1s ease-out"});
    }
});