# language: pt
Funcionalidade: Cadastrar usuário

Cenário: Deve ser possível criar um usuário válido
    Dado foi acessada a tela de criação de usuário
    Quando informou nome válido
    Quando informou um email válido
    Quando clicou no botão salvar
    Então o usuário é criado
    Então é exibida uma mensagem informando que o usuário foi salvo

Cenário: Não deve ser possível criar usuário com email já cadastrado
    Dado foi acessada a tela de criação de usuário
    Quando informou um email já cadastrado
    Quando informou nome válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que já existe email cadastrado
    Então usuário não é criado

Cenário: Não deve ser possível criar usuário utilizando caractere especial no nome
    Dado foi acessada a tela de criação de usuário
    Quando informou nome que contenha um caractere especial
    Quando informou um email válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o nome possui formato inválido
    Então não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário utilizando email com formato inválido
    Dado foi acessada a tela de criação de usuário
    Quando informou nome válido
    Quando informou um email com formato inválido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o email possuí formato inválido
    Então não é feita requisição para criação de usuário 

Cenário: Deve ser possível criar usuário com 100 caracteres no nome
    Dado foi acessada a tela de criação de usuário
    Quando informou um nome com 100 caracteres
    Quando informou um email válido
    Quando clicou no botão salvar
    Então o usuário é criado
    Então é exibida uma mensagem informando que o usuário foi salvo
    
Cenário: Não deve ser possível criar usuário com mais de 100 caracteres no nome
    Dado foi acessada a tela de criação de usuário
    Quando informou nome com 101 caracteres
    Quando informou um email válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o limite de caracteres para nome é 100
    Então não é feita requisição para criação de usuário

Cenário: Deve ser possível criar usuário utilizando email com 60 caracteres
    Dado foi acessada a tela de criação de usuário
    Quando informou nome válido
    Quando informou um email com 60 caracteres
    Quando clicou no botão salvar
    Então o usuário é criado
    Então é exibida uma mensagem informando que o usuário foi salvo

Cenário: Não deve ser possível criar usuário utilizando email com 61 caracteres
    Dado foi acessada a tela de criação de usuário
    Quando informou nome válido
    Quando informou um email com 61 caracteres
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o limite de caracteres para email é 60    
    Então não é feita requisição para criação de usuário

Cenário: Criar usuário informando nome com menos de 4 caracteres
    Dado foi acessada a tela de criação de usuário
    Quando informou nome com 3 caracteres
    Quando informou um email válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o nome deve conter no mínimo 4 caracteres
    Então não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário sem preencher nome
    Dado foi acessada a tela de criação de usuário
    Quando informou um email válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o campo nome é obrigatório
    Então não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar usuário sem preencher email
    Dado foi acessada a tela de criação de usuário
    Quando informou nome válido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o campo email é obrigatório
    Então não é feita requisição para criação de usuário

Cenário: Não deve ser possível criar um usuário sem preencher os campos nome e email
    Dado foi acessada a tela de criação de usuário
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que o campo nome é obrigatório
    Então é exibida uma mensagem informando que o campo email é obrigatório 
    Então não é feita requisição para criação de usuário   
     

        
