// ============== Fetch API ==============
// A Fetch API fornece uma interface JavaScript para acessar e 
// manipular partes do pipeline HTTP, como pedidos e respostas. 
// Ela também fornece um método global fetch() que fornece uma 
// maneira fácil e lógica de buscar recursos de forma assíncrona pela rede.


// Exemplo 1
let url = "https://pokeapi.co/api/v2/"; //URL base da API
//No exemplo da URL acima eu não quis colocar o endpoint, pois a ideia 
//é que o nome do pokemon seja passado pelo input.

function buscarPokemon(e){ //Função que busca um pokemon na API
    e.preventDefault(); //Previne o comportamento padrão do formulário
    let input = document.getElementById("input-pokemon"); //Pega o input

    fetch(url+'pokemon/'+input.value) //Faz a requisição para a API
    .then((response)=>{ //Trata a resposta da API que é do tipo Response (ainda não é o JSON)
        // O metodo json() retorna uma promise com o conteúdo do corpo da resposta
        return response.json() //Retorna a resposta da API em JSON
    })
    .then((data)=>{ // Por se tratar de uma promise, eu posso tratar o retorno com o then
        let tableBody = document.querySelector("#table-info tbody"); 

        //Aqui eu pego os dados do pokemon (que estão no parametro data) e jogo na tabela
        tableBody.innerHTML = `
        <tr>
            <td>${data.id}</td> 
            <td>${data.name}</td>
            <td>${data.weight}</td>
            <td>${data.height}</td>
            <td>${data.types[0].type.name}</td>
        </tr>`;
    })
    .catch((err)=>{
        console.error(err);
    })
}

// ============== Async/Await ==============
// O async/await é uma maneira de lidar com promessas de forma mais limpa e legível.
// O exemplo abaixo é o mesmo do exemplo 1, mas utilizando async/await.
async function fetchPokemon(){ 
    //Note que a expressão async é declarada antes da função que precede o await
    try{//O bloco try é uma das formas de tratar erros no JavaScript, não só associados a promises.

        //O await faz com que a execução do código aguarde a resolução da promise.
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto",{method: "GET"});
        //Como o fetch retorna uma promise, eu posso usar o await para esperar o retorno do método json().
        const data = await request.json(); 
        return data; //Retorno o JSON da API
    } catch (err) {
        console.error(err)
    }
}
// console.log(fetchPokemon());

//Exemplo 01 - Rick and Morty
// Exercício do slide 04 - pag 19
function capturarPersonagem(){
    fetch("https://rickandmortyapi.com/api/character/145",{ method: "GET"})
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let tBody = document.querySelector("#table-character tbody");
        let img = document.getElementById("image-character");

        img.src = data.image;

        tBody.innerHTML = `
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.origin.name}</td>
            </tr>
        `;


    })
    .catch((err)=>{
        console.error(err);
    })
}
capturarPersonagem();