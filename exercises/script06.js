let info = {
    personagem: 'Tio Patinhas',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda', info.personagem);

info['recorrente'] = 'Sim'

console.log(info);


for (let i in info) {
  console.log(i);
}

for (let i in info) {
  console.log(info[i]);
}


let info2 = {
  personagem: 'Margarida',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorremte: 'Sim'
};

const person = `${info2.personagem} e ${info.personagem}`
const origem = `${info.origem} e ${info2.origem}`
const nota = `${info.nota} e ${info2.nota}`
const recorrente = info2.recorremte

console.log(person, origem, nota, recorrente);


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

const nome = leitor.nome
const sobreNome = leitor.sobrenome
const titulo = leitor.livrosFavoritos[0].titulo
console.log('O livro favorito de', nome, sobreNome, 'se chama', titulo);
