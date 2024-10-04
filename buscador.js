document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtiene y normaliza la consulta de búsqueda
    let searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Función para eliminar tildes y normalizar la búsqueda
    searchQuery = searchQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let redirectUrl = '';

    // Convertir la búsqueda en una lista de palabras clave
    const keywords = searchQuery.split(/\s+/);

    // MENU
    if (keywords.includes('inicio')) {
        redirectUrl = 'inicio.html';
    } else if (keywords.includes('futbol')) {
        redirectUrl = 'futbol.html';
    } else if (keywords.includes('basquetbol')) {
        redirectUrl = 'basquetbol.html';
    } else if (keywords.includes('voleibol')) {
        redirectUrl = 'voleibol.html';
    } else if (keywords.includes('ciclismo')) {
        redirectUrl = 'ciclismo.html';
    } else if (keywords.includes('acerca')) {
        redirectUrl = 'SOBRE NOSOTROS.HTML#acerca';
    } else if (keywords.includes('mision')) {
        redirectUrl = 'SOBRE NOSOTROS.HTML#mision';
    } else if (keywords.includes('vision')) {
        redirectUrl = 'SOBRE NOSOTROS.HTML#vision';
    } else if (keywords.includes('sobre') || keywords.includes('nosotros') || searchQuery.includes('sobre nosotros')) {
        redirectUrl = 'SOBRE NOSOTROS.HTML';
    // FUTBOL
    } else if (keywords.includes('richard') || keywords.includes('rios') || searchQuery.includes('richard rios')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol8';
    } else if (keywords.includes('real') || keywords.includes('madrid') || searchQuery.includes('real madrid')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol7';
    } else if (keywords.includes('james') || keywords.includes('rodriguez') || searchQuery.includes('james rodriguez')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol6';
    } else if (keywords.includes('kylian') || keywords.includes('mbappe') || searchQuery.includes('kylian mbappe')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol2';
    } else if (keywords.includes('lucas') || keywords.includes('beraldo') || searchQuery.includes('lucas beraldo')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol1';
    } else if (keywords.includes('fff')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol5';
    } else if (keywords.includes('colombia')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol4';
    } else if (keywords.includes('messi')) {
    redirectUrl = 'NOTICIASFUTBOL.HTML#futbol3';
    // BASQUETBOL
    } else if (keywords.includes('lebron') || keywords.includes('james') || searchQuery.includes('lebron james')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol7';
    } else if (keywords.includes('estados') || keywords.includes('unidos') || searchQuery.includes('estados unidos')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol6';
    } else if (keywords.includes('cleveland') || keywords.includes('cavaliers') || searchQuery.includes('cleveland cavaliers')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol1';
    } else if (keywords.includes('lakers')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol8';
    } else if (keywords.includes('aldama')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol5';
    } else if (keywords.includes('españa')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol4';
    } else if (keywords.includes('bronny')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol3';
    } else if (keywords.includes('davis')) {
    redirectUrl = 'NOTICIASBASQUETBOL.HTML#basquetbol2';
    // CICLISMO
    } else if (keywords.includes('tom') || keywords.includes('pidcock') || searchQuery.includes('tom pidcock')) {
    redirectUrl = 'NOTICIASCICLISMO.HTML#ciclismo5';
    } else if (keywords.includes('tour') || keywords.includes('francia') || searchQuery.includes('tour de francia')) {
    redirectUrl = 'NOTICIASCICLISMO.HTML#ciclismo4';
    } else if (keywords.includes('canyon') || keywords.includes('bicycles') || searchQuery.includes('canyon bicycles')) {
    redirectUrl = 'NOTICIASCICLISMO.HTML#ciclismo3';
    } else if (keywords.includes('puy') || keywords.includes('mary') || searchQuery.includes('puy mary')) {
    redirectUrl = 'NOTICIASCICLISMO.HTML#ciclismo2';
    } else if (keywords.includes('tadej') || keywords.includes('pogacar') || searchQuery.includes('tadej pogacar')) {
    redirectUrl = 'NOTICIASCICLISMO.HTML#ciclismo1';
    // VOLEIBOL
    } else if (keywords.includes('paris')) {
    redirectUrl = 'NOTICIASVOLEIBOL.HTML#voleibol3';
    } else if (keywords.includes('cataluna')) {
    redirectUrl = 'NOTICIASVOLEIBOL.HTML#voleibol2';
    } else if (keywords.includes('jugador')) {
    redirectUrl = 'NOTICIASVOLEIBOL.HTML#voleibol1';
    // ALERTA
    } else {
        alert('No se encontró ningún resultado para la búsqueda.');
        return;
    }

    window.location.href = redirectUrl;
});
