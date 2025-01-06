async function fetchMarvelCharacterData(characterID) {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${characterID}?ts=1&apikey=53f4d0fbe6779588ea6e0edeed364129&hash=dd5ba29bd5eb09ea1d85be635bec4b62`);
    const characterData = await response.json();
    return characterData;
}

async function fetchMarvelCharactersData() {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=53f4d0fbe6779588ea6e0edeed364129&hash=dd5ba29bd5eb09ea1d85be635bec4b62`);
    const data = await response.json();
    return data.data.results
}

document.addEventListener(`DOMContentLoaded`, async () => {
    const charactersData = await fetchMarvelCharactersData();
    console.log(charactersData)
    const charactersInfoElement = document.getElementById('characters-list')
    charactersData.forEach(character => {
        charactersInfoElement.innerHTML += `<p>Name: ${character.name}</p>`
        charactersInfoElement.innerHTML += `<img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" width="30%">`
    });

});