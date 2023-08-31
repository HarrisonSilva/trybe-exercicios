/*
Crie uma função que retorne um objeto com duas chaves e 
dois valores contendo o dano e a mana gasta pelo mago em um turno.

O dano será um número aleatório entre o valor do atributo
 intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

A mana consumida por turno é 15. Além disso, a função deve
 ter uma condicional: caso o mago tenha menos de 15 de mana, 
 o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”),
  e a mana gasta é 0.

Parte II
Agora que você já possui a implementação das funções relativas aos três
 exercícios anteriores, passe-as como parâmetro para outras funções que 
 irão compor um objeto gameActions. O objeto será composto por ações 
 do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são 
 funções que recebem como parâmetro outra função.

Copie o código abaixo e inicie sua implementação:

const gameActions = {
  // Crie as HOFs neste objeto.
};

Crie a primeira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem warrior. Essa HOF
 receberá como parâmetro a função que calcula o dano deferido pelo 
 personagem warrior e atualizará os healthPoints do monstro dragon.
  Além disso, ela também deve atualizar o valor da chave damage do warrior.

Crie a segunda HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem mage. Essa HOF 
receberá como parâmetro a função que calcula o dano deferido pelo
 personagem mage e atualizará os healthPoints do monstro dragon. 
 Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.

Crie a terceira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do monstro dragon. Essa HOF 
receberá como parâmetro a função que calcula o dano deferido pelo 
monstro dragon e atualizará os healthPoints dos personagens mage e
 warrior. Além disso, ela também deve atualizar o valor da chave 
 damage do monstro.

Adicione ao objeto gameActions uma função de primeira classe que 
retorna o objeto battleMembers atualizado e faça um console.log 
para visualizar o resultado final do turno.
 */