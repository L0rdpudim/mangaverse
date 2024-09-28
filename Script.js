function filterMangas() {
     // Pega o valor digitado no campo de pesquisa e converte para minúsculas
    const input = document.getElementById('search-input').value.toLowerCase();

    // Seleciona todos os elementos com a classe 'MangaCard', que representam os cartões de mangás
    const mangaCards = document.getElementsByClassName('MangaCard'); 

    for (let i = 0; i < mangaCards.length; i++) {
        // Obtém o texto do título do mangá atual e converte para minúsculas
        const title = mangaCards[i].getElementsByClassName('title')[0].innerText.toLowerCase();
        
        // Verifica se o título do mangá inclui o texto digitado no campo de pesquisa
        if (title.includes(input)) {
            // Exibe o cartão do mangá
            mangaCards[i].style.display = "";
        } else {
            // Oculta o cartão do mangá
            mangaCards[i].style.display = "none";
        }
    }
}


function filterByGenre(genre) {
    // Converte o gênero selecionado para minúsculas
    const selectedGenre = genre.toLowerCase();
    
    // Seleciona todos os cartões de mangás
    const mangaCards = document.getElementsByClassName('MangaCard');

    for (let i = 0; i < mangaCards.length; i++) {
        // Obtém o texto dos gêneros do mangá atual e converte para minúsculas
        const genres = mangaCards[i].getElementsByClassName('secondText')[0].innerText.toLowerCase();
        
        // Verifica se o gênero do mangá inclui o gênero selecionado
        if (genres.includes(selectedGenre)) {
            // Exibe o cartão do mangá
            mangaCards[i].style.display = "";
        } else {
            // Oculta o cartão do mangá
            mangaCards[i].style.display = "none";
        }
    }
}
