// PARTE DO GREETING //
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
    greetingElement.textContent = "Bom Dia!";
} else if (currentHour >= 12 && currentHour < 18) {
    greetingElement.textContent = "Boa Tarde!";
} else {
    greetingElement.textContent = "Boa noite!"
}


// PARTE DO SEARCH //
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})