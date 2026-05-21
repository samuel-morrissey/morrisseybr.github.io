const main = document.querySelector('main');
const getCountriesButton = document.getElementById('getCountries');

async function chamarApi() {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital');
    const dados = await response.json();
    dados.forEach((pais) => {
        criarElemento(pais.name.common);
    });
    setTimeout(() => {
        getCountriesButton.textContent = 'Listar países';
    }, 2000);
}

getCountriesButton.addEventListener('click', () => {
    main.innerHTML = '';
    getCountriesButton.textContent = 'Carregando...';
});
getCountriesButton.addEventListener('click', chamarApi);


function criarElemento(nomeDoPais) {
    const countryCard = document.createElement('div');
    countryCard.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200', 'p-4', 'w-56', 'h-16', 'rounded', 'shadow-md', 'max-w-md', 'text-center', 'text-black', 'text-lg', 'font-bold');
    countryCard.textContent = `${nomeDoPais}`;

    main.appendChild(countryCard);  
}