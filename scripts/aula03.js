// ============== Promise ==============
// A classe Promise representa um objeto retornado de uma eventual conclusão
// ou falha de uma operação assíncrona.

// Exemplo 1
function pegarUsuario() {
  //Uma função ao retornar uma promise, passa a poder ser resolvida ou rejeitada
  // com a tratativa then ou catch.
  new Promise((resolve, reject) => {
    //Descomente o setTimeout para simular uma requisição assíncrona.
    // setTimeout(() => {
    let usuario = {
      idade: 25,
    };
    if (usuario.idade) {
      // O método resolve() é chamado quando a promise é resolvida com sucesso.
      resolve(usuario.idade); // Você pode passar um valor para o método resolve().
    } else {
      // O método reject() é chamado quando a promise é rejeitada.
      reject("idade não é defenida");
    }
    // }, 5000);
  });
}
pegarUsuario()
  .then((data) => {
    //O método then() é chamado para tratar o sucesso da promise.
    calculaIdade(data);
  })
  .catch((error) => {
    //O método catch() é chamado para tratar a falha da promise.
    console.log(error);
  })
  .finally(() => {
    //O método finally() é chamado após a promise ser resolvida ou rejeitada.
    console.log("Promise finalizada");
  });

console.log(pegarUsuario()); // Observe que a promise é retornada, mas não é tratada.

function calculaIdade(idade) {
  console.log("Idade do usuário:", idade);
}

// Exemplo 2
// Nesse exemplo eu capturo o retorno da promise e jogo em uma variável.
const prom = new Promise((resolve, reject) => {
  let status = 400;

  if (status == 200) {
    //Simulando uma requisição HTTP.
    resolve("Status = " + status); //O método resolve() é chamado quando a promise é resolvida com sucesso.
  } else {
    reject("Opa deu erro!"); //O método reject() é chamado quando a promise é rejeitada.
  }
});

// Com isso também posso tratar o retorno da promise a partir dessa variável.
prom
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });



//============== Exercício slide 03 - pag 16 ==============
let produtos = [
  "Playstation 5",
  "Nintendo Swicth",
  "Echo dot 4",
  "Copo Stanley",
];

function verificarDisponibilidade(produto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Simulando uma requisição assíncrona de 2s.
      if (produtos.includes(produto)) {
        //Verifica se o produto está disponível.
        resolve(`O produto ${produto} está disponível :) `);
      } else {
        reject(`O produto ${produto} não está disponível :( `);
      }
    }, 2000);
  });
}

verificarDisponibilidade("Playstation 5")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

verificarDisponibilidade("Xbox Series X")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
