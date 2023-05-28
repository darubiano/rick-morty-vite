
/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    // console.log(data['results'][0]);
    const random = Math.floor(Math.random() * data['results'].length);
    const result = data['results'][random];
    return result
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMorty = async (element) => {
    console.log('RickAndMorty');
    document.querySelector('#app-title').innerHTML = 'Rick And Morty';
    element.innerHTML = `<h3> Loading... </h3>`;
    //
    // const quote = await fetchQuote();
    const quoteLabel = document.createElement('blockquote');
    const imageLabel = document.createElement('img');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Otro personaje';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.name;
        imageLabel.src = data.image;
        imageLabel.style.width = '80%';
        authoLabel.innerHTML = data.species;
        element.replaceChildren(quoteLabel, imageLabel, authoLabel, nextQuoteButton);
    }
    // Listener 
    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = `<h3> Loading... </h3>`;
        await new Promise(r => setTimeout(r, 250));
        const data = await fetchQuote();
        renderQuote(data);
    });
    //
    fetchQuote().then((data) => renderQuote(data));
}