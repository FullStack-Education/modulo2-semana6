// Extra: Para dar o redirecionamento para outra rota da aplicação,
// você pode usar o window.location.href = "";
// window.location.href = "https://www.google.com.br";

// ============== JSON.stringify e JSON.parse ==============
let user = {
  nome: "João",
  idade: 31,
  email: "joao123@gmail.com",
};
console.log(user);
// JSON.stringify() - Converte um objeto JavaScript em uma string JSON
let json = JSON.stringify(user);
console.log(json);

// JSON.parse() - Converte uma string JSON em um objeto JavaScript
let objJavascript = JSON.parse(json);
console.log(objJavascript);

// Exercício 1 - slide aula pag 14
let users = [
  {
    nome: "João",
    idade: 31,
  },
  {
    nome: "Maria",
    idade: 16,
  },
  {
    nome: "Pedro",
    idade: 18,
  },
  {
    nome: "Junior",
    idade: 11,
  },
];
let maioresDeIdade = users.filter((user) => {
  return user.idade >= 18;
});
console.log("maioresDeIdade: ", maioresDeIdade);

//Exercício 2 - slide aula pag 14
const produtos = [
  { nome: "Notebook", preco: 2100 },
  { nome: "Smartphone", preco: 400 },
  { nome: "Tablet", preco: 800 },
  { nome: "Monitor", preco: 3000 },
];
let menorPreco = produtos.reduce((valAnterior, valAtual) => {
  // if(valAnterior.preco < valAtual.preco){
  //     return valAnterior;
  // }else{
  //     return valAtual;
  // }
  return valAnterior.preco < valAtual.preco ? valAnterior : valAtual;
});
console.log("menorPreco: ", menorPreco);
