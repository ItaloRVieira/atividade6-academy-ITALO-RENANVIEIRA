# language: pt
Funcionalidade: Pesquisar usuários

Cenário: Deve ser possível visualizar a barra de busca de usuário
Dado foi acessada a lista de usuários
Quando visualizar a barra de pesquisa
Então ela está habilitada

@cadastroUsuarioEdit
Cenário: Deve ser possível pesquisar usuário existente por email
Dado foi acessada a lista de usuários
Quando pesquisar um email cadastrado
Então é possível visualizar nome, email, ver detalher, excluir usuário

@cadastroUsuarioEdit
Cenário: Deve ser possível pesquisar usuário existente por nome
Dado foi acessada a lista de usuários
Quando pesquisar um nome cadastrado
Então é possível visualizar nome, email, ver detalher, excluir usuário

Cenário: Pesquisar por nome inexistente deve retornar mensagem de não encontrado
Dado foi acessada a lista de usuários
Quando pesquisar por um nome não cadastrado
Então aparece uma mensagem informando que não tem usuário cadastrado
Então aparece um botão para cadastrar um novo usuário

Cenário: Pesquisar por email inexistente deve retornar mensagem de não encontrado
Dado foi acessada a lista de usuários
Quando pesquisar por um email não cadastrado
Então aparece uma mensagem informando que não tem usuário cadastrado
Então aparece um botão para cadastrar um novo usuário


