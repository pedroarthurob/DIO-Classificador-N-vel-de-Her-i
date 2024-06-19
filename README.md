# DIO-Classificador-Nível-de-Herói

Realização do desafio proposto no Bootcamp Santander 2024 - Criando Jogos com Godot no módulo de "Base em Lógica de Programação para Jogos".

Como o desafio ficou meio em aberto, vago, tomei a liberdade para interpretá-lo a minha maneira e utilizar a minha experiência para completá-lo da melhor maneira possível.

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000 = Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Classificador de Nível de Herói
Este é um programa simples em JavaScript que classifica heróis com base em sua experiência (XP), utilizando funções assíncronas para interação com o usuário no terminal.

## Problema Enfrentado
Ao desenvolver este programa, deparei-me com a peculiaridade das funções assíncronas em JavaScript, onde a execução assíncrona pode causar um loop infinito se não for tratada corretamente. No meu caso, ao usar um loop while para repetir a interação com o usuário, o programa não aguardava a entrada do usuário antes de continuar, resultando em um loop infinito de prompts sem permitir que o usuário inserisse qualquer informação.

## Solução Adotada
Para resolver esse problema, optei por uma abordagem recursiva controlada por uma função que lida com cada entrada de forma sequencial. Isso garante que o programa aguarde a resposta do usuário antes de prosseguir para a próxima iteração. A função startHeroClassification é responsável por fazer perguntas ao usuário, processar as respostas e chamar a si mesma recursivamente após cada interação, até que o usuário decida encerrar o programa digitando "sair".

## Como Usar
1. Certifique-se de ter o Node.js instalado no seu ambiente.
2. Clone o repositório e navegue até o diretório do projeto.
3. Execute o programa com node index.js.
4. Siga as instruções no terminal para inserir o nome e a XP de cada herói. Digite "sair" para encerrar o programa.

Espero que esta explicação ajude a entender a estrutura e o funcionamento do programa. Se você tiver alguma dúvida ou sugestão de melhoria, sinta-se à vontade para contribuir ou entrar em contato!


