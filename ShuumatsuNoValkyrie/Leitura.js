// Função para mostrar ou ocultar o botão e ajustar a opacidade da navbar ao rolar a página
window.onscroll = function() {
    mostrarOcultarBotaoEOpacidade();
};

// Função para mostrar ou ocultar o botão e ajustar a opacidade com base no scroll da página
function mostrarOcultarBotaoEOpacidade() {
    var btnTopo = document.getElementById("btnTopo");
    var OpacNav = document.getElementById("OpacNav");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
        OpacNav.style.opacity = 0.5;
    } else {
        btnTopo.style.display = "none";
        OpacNav.style.opacity = 1;
    }
}

// Função para rolar suavemente ao topo da página
function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
