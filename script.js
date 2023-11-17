const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });
    return result;
}

fetchApi(1);

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    content.textContent = `${JSON.stringify(result, (key, value) => {
        if (key == 'episode'){
            return undefined;
        }
        return value;
    }, 2)}`;
    image.src = result.image;
})


/* 
JSON.stringify =  converter objeto para json que é exibido em formato de string 
JSON.parse = converter o json para objeto
*/