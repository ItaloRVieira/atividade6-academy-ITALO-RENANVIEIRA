# language: pt
Funcionalidade: Listar usuário

Cenário: Deve ser possível consultar a lista de usuários
    Dado que foi acessada a lista de usuários
    Quando visualizar usuários cadastrados
    Então é possível localizar o usuário


Cenário: Caso tenha mais >=7 usuários cadastrados, o botão "próxima" deve estar habilitado
    Dado foi acessada a lista de usuários
    Quando tem mais de seis usuários cadastrados
    Então o botão "próxima" deve estar habilitado

Cenário: Deve ser possível avançar até a ultima página
    Dado foi acessada a lista de usuários
    Quando vai para a última página
    Então o botão próxima deve estar desabilitado

Cenário: Quando um usuário avança de página, deve ser possível voltar para a página anterior
    Dado foi acessada a lista de usuários
    Quando o botão "próxima" é selecionado
    E o botão "anterior" é selecionado
    Então deve retornar a página anterior

Cenário: Selecionar botão para criar novo usuário
    Dado que foi acessada a lista de usuários
    Quando selecionar o botão "novo" no canto superior direito
    Então é direcionado a tela de criação de usuário

Cenário: Deve retornar uma opção para cadastrar novo usuário quando a lista estiver vazia
    Dado foi acessada a lista de usuários
    Quando a lista está vazia
    Então aparece uma mensagem informando que não possui usuário cadastrado
    E aparece uma opção para cadastrar um novo usuário
