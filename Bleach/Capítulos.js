/*Função de pesquisa de capítulos*/
function searchChapter() {
    var inputVal = document.getElementById("chapter-search").value.trim().toLowerCase();

    // Verifica se o input contém apenas números
    if (!/^\d+$/.test(inputVal)) {
        alert("Por favor, insira apenas números no campo de pesquisa.");
        return;
    }

    var chapters = document.querySelectorAll('.chapter-list a');

    if (inputVal === "") {
        // Se o campo de pesquisa estiver vazio, exibe todos os capítulos
        chapters.forEach(function (chapter) {
            chapter.style.display = 'block';
        });
    } else {
        // Se o campo de pesquisa não estiver vazio, filtra os capítulos
        chapters.forEach(function (chapter) {
            var chapterNumber = getChapterNumber(chapter.innerText.toLowerCase());
            if (chapterNumber === inputVal) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    }
}

function getChapterNumber(chapterText) {
    var match = chapterText.match(/-?\d+/);
    return match ? match[0] : '';
}
