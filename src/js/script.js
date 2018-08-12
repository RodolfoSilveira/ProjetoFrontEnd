function monitoramento (){
    const botao1 = document.getElementById('historico')
    const botao2 = document.getElementById('conhecimento')
    const local = document.querySelector('[wb-moderno]')
    botao1.onclick = () =>{
        const url = '../../pagina/sobre.html'
        navegarViaAjax(url,local)
    }
    botao2.onclick = () => {
        const url = '../../pagina/conhecimento.html'
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

window.onhashchange = function(e){
    const oldUrl = e.oldURL.split('#')[1]  
    const newUrl = e.newURL.split('#')[1]
    console.log(oldUrl,newUrl)
    const oldMenu = document.querySelector(`.menu a[href='#${oldUrl}']`)
    const newMenu = document.querySelector(`.menu a[href='#${newUrl}']`)
    oldMenu && oldMenu.classList.remove('selecionado')
    newMenu && newMenu.classList.add('selecionado')
}

