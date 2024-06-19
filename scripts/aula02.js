// ============== LocalStorage ==============
// Para manipular informações no localStorage, você pode usar os seguintes métodos:

// - setItem(): Adiciona um item ao localStorage.
let user = {nome: "Fulano", idade: 30};
localStorage.setItem("token","sajdoisanjd9df8endrfw8ydf");
localStorage.setItem("taLogado", true);
localStorage.setItem("idade", 19);
//OBS: O localStorage armazena os dados em formato de string, então, para armazenar
//um objeto, você deve usar o JSON.stringify().
localStorage.setItem("user", JSON.stringify(user));

// - getItem(): Recupera um item do localStorage.
let idade = localStorage.getItem("idade");
console.log(idade); //19

//OBS: O localStorage armazena os dados em formato de string, então, para recuperar 
//um objeto, você deve usar o JSON.parse().
let userObj = JSON.parse(localStorage.getItem("user"));
console.log(userObj); //{nome: "Fulano", idade: 30}

// - setItem(): Também indicado para alterações e atualizações em um item do localStorage.
localStorage.setItem("taLogado", false);

// - removeItem(): Remove um item do localStorage.
localStorage.removeItem("idade");
//Plus: Para limpar todos os itens do localStorage, você pode usar o método clear().

// ============== SetTimeout ==============
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'show';
    
    //Após 5 segundos, a classe 'hide' será adicionada ao elemento toast.
    setTimeout(()=>{
        toast.className = 'hide';
    }, 5000);
}

// ============== SetInterval ==============
function startClock() {
    //A cada 1 segundo, a função abaixa será executada.
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString()); //Exibe a hora atual no formato local no console.
        document.getElementById('clock').innerText = now.toLocaleTimeString();
    }, 1000);
}
// Deixei comentado a linha abaixo para não executar toda vez que a página for carregada.
// startClock(); //Inicia o relógio.


