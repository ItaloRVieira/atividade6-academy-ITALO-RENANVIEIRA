# language: pt
@cadastroUsuario
Funcionalidade: Editar usuário

Cenário: Deve ser possível editar usuário informando nome e email válido
    Dado que foi selecionado o botão editar usuário
    Quando informar um nome válido para alteração
    E informar um email válido para alteração
    E clicar no botão salvar
    Então informações são editadas
    E retorna para a pagina inicial
    E é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Ao clicar em Editar, deve ser possível cancelar a edição ao clicar em Cancelar 
    Dado que foi selecionado o botão editar usuário
    Quando informar um nome válido para alteração
    E informar um email válido para alteração
    E clicar no botão cancelar
    Então não é realizada requisição para editar usuário
    E os campos nome e email deverão estar desabilitado

Cenário: Não deve ser possível editar usuário informando email existente
    Dado que foi selecionado o botão editar usuário
    Quando informar um email já cadastrado ao editar
    E clicar no botão salvar
    Então edição não é realizada
    E é exibida uma mensagem informando que já está cadastrado

Cenário: Não deve ser possível editar usuário informando nome com caractere inválido
    Dado que foi selecionado o botão editar usuário
    Quando informar nome que contenha um caractere especial ao editar
    E clicar no botão salvar
    Então não é realizada requisição para editar usuário
    E exibe uma mensagem informando que o nome possui formato inválido

Cenário: Não deve ser possível editar usuário informando email com formato inválido
    Dado que foi selecionado o botão editar usuário
    Quando informar email com formato inválido
    E clicar no botão salvar
    Então é exibida uma mensagem informando que email possui formato inválido
    E não é realizada requisição para editar usuário

Cenário: Deve ser possível editar usuário informando nome com 100 caracteres
    Dado que foi selecionado o botão editar usuário
    Quando informar nome com 100 caracteres
    E clicar no botão salvar
    Então O nome é editado
    E retorna para a pagina inicial
    E é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Não deve ser possível editar usuário informando nome com 101 caracteres
    Dado que foi selecionado o botão editar usuário
    Quando informar um nome com 101 caracteres
    E clicar no botão salvar
    Então é exibida mensagem informando que o limite de caracteres para nome é 100
    E não é realizada requisição para editar usuário

Cenário: Deve ser possível editar usuário utilizando email com 60 caracteres
    Dado que foi selecionado o botão editar usuário
    Quando informar email com 60 caracteres
    E clicar no botão salvar
    Então O email é editado
    E retorna para a pagina inicial
    E é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Não deve ser possível editar usuário informando email com 61 caracteres
    Dado que foi selecionado o botão editar usuário
    Quando informar email com 61 caracteres
    E clicar no botão salvar
    Então é exibida mensagem informando que o limite de caracteres para email é 60
    E não é realizada requisição para editar usuário

Cenário: Editar usuário informando nome com menos de 4 caracteres
    Dado que foi selecionado o botão editar usuário
    Quando informar um nome com 3 caracteres
    E clicar no botão salvar
    Então é exibida mensagem informando que o nome deve conter no mínimo 4 caracteres
    E não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando nome vazio
    Dado que foi selecionado o botão editar usuário
    Quando não informar nome
    E clicar no botão salvar
    Então é exibida mensagem informando que o campo nome é obrigatório
    E não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando email vazio
    Dado que foi selecionado o botão editar usuário
    Quando não informar email
    E clicar no botão salvar
    Então é exibida mensagem informando que o campo email é obrigatório
    E não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando nome e email vazio
    Dado que foi selecionado o botão editar usuário
    Quando não informar nome
    E não informar email
    E clicar no botão salvar
    Então é exibida mensagem informando que o campo nome é obrigatório
    E é exibida mensagem informando que o campo email é obrigatório
    E não é realizada requisição para editar usuário

Cenário: Campo ID deve informar ID e estar desabilitado para edição
    Dado que foi selecionado o botão editar usuário
    Então campo ID está desabilitado
    E campo ID deve exibir o ID do usuário  
