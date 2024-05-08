# language: pt
Funcionalidade: Cadastrar usuário

Cenário: Deve ser possível criar um usuário válido
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome válido
    E informar um email válido
    E clicar no botão salvar
    Então o usuário é criado
    E é exibida uma mensagem informando que o usuário foi salvo

Cenário: Não deve ser possível criar usuário com email já cadastrado
    Dado que foi acessada a tela de criação de usuário
    Quando informar um email já cadastrado
    E informar nome válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que já existe email cadastrado
    E usuário não é criado

Cenário: Não deve ser possível criar usuário utilizando caractere especial no nome
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome que contenha um caractere especial
    E informar um email válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o nome possui formato inválido
    E não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário utilizando email com formato inválido
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome válido
    E informar um email com formato inválido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o email possuí formato inválido
    E não é feita requisição para criação de usuário 

Cenário: Deve ser possível criar usuário com 100 caracteres no nome
    Dado que foi acessada a tela de criação de usuário
    Quando informar um nome com 100 caracteres
    E informar um email válido
    E clicar no botão salvar
    Então o usuário é criado
    E é exibida uma mensagem informando que o usuário foi salvo
    
Cenário: Não deve ser possível criar usuário com mais de 100 caracteres no nome
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome com 101 caracteres
    E informar um email válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o limite de caracteres para nome é 100
    E não é feita requisição para criação de usuário

Cenário: Deve ser possível criar usuário utilizando email com 60 caracteres
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome válido
    E informar um email com 60 caracteres
    E clicar no botão salvar
    Então o usuário é criado
    E é exibida uma mensagem informando que o usuário foi salvo

Cenário: Não deve ser possível criar usuário utilizando email com 61 caracteres
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome válido
    E informar um email com 61 caracteres
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o limite de caracteres para email é 60    
    E não é feita requisição para criação de usuário

Cenário: Criar usuário informando nome com menos de 4 caracteres
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome com 3 caracteres
    E informar um email válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o nome deve conter no mínimo 4 caracteres
    E não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário sem preencher nome
    Dado que foi acessada a tela de criação de usuário
    Quando informar um email válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o campo nome é obrigatório
    E não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário sem preencher email
    Dado que foi acessada a tela de criação de usuário
    Quando informar nome válido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que o campo email é obrigatório
    E não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar um usuário sem preencher os campos nome e email
    Dado que foi acessada a tela de criação de usuário
    Quando clicar no botão salvar
    Então é exibida uma mensagem informando que o campo nome é obrigatório
    E é exibida uma mensagem informando que o campo email é obrigatório 
    E não é feita requisição para criação de usuário   
     

        
