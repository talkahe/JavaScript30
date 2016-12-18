const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data)); //spread operator

function findMathes(wordToMatch, cities) {
    const regex = new RegExp(wordToMatch, "gi");
    return cities.filter(place => {
        //here we need to figure out if the city or state matches what was searched
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchPlaces = findMathes(this.value, cities);
    const liList = matchPlaces.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //highlight what was searched
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); //highlight what was searched
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
    }).join('');
    suggestions.innerHTML = liList;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);