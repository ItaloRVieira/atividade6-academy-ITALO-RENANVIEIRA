# language: pt
@cadastroUsuario
Funcionalidade: Editar usuário

Cenário: Deve ser possível editar usuário informando nome e email válido
    Dado foi selecionado o botão editar usuário
    Quando informou um nome válido para alteração
    Quando informou um email válido para alteração
    Quando clicou no botão salvar
    Então informações são editadas
    Então retorna para a lista de usuarios
    Então é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Ao clicar em Editar, deve ser possível cancelar a edição ao clicar em Cancelar 
    Dado foi selecionado o botão editar usuário
    Quando informou um nome válido para alteração
    Quando informou um email válido para alteração
    Quando clicou no botão cancelar
    Então não é realizada requisição para editar usuário
    Então os campos nome e email deverão estar desabilitado

# Cenário: Não deve ser possível editar usuário informando email existente
#     Dado foi selecionado o botão editar usuário
#     Quando informou um email já cadastrado ao editar
#     Quando clicou no botão salvar
#     Então edição não é realizada
#     Então é exibida uma mensagem informando que já está cadastrado

Cenário: Não deve ser possível editar usuário informando nome com caractere inválido
    Dado foi selecionado o botão editar usuário
    Quando informou nome que contenha um caractere especial ao editar
    Quando clicou no botão salvar
    Então não é realizada requisição para editar usuário
    Então é exibida uma mensagem informando que o nome possui formato inválido

Cenário: Não deve ser possível editar usuário informando email com formato inválido
    Dado foi selecionado o botão editar usuário
    Quando informou email com formato inválido
    Quando clicou no botão salvar
    Então é exibida uma mensagem informando que e email possui formato inválido
    Então não é realizada requisição para editar usuário

Cenário: Deve ser possível editar usuário informando nome com 100 caracteres
    Dado foi selecionado o botão editar usuário
    Quando informou nome com 100 caracteres
    Quando clicou no botão salvar
    Então O nome é editado
    Então retorna para a lista de usuarios
    Então é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Não deve ser possível editar usuário informando nome com 101 caracteres
    Dado foi selecionado o botão editar usuário
    Quando informou um nome com 101 caracteres
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o limite de caracteres para nome é 100
    Então não é realizada requisição para editar usuário

Cenário: Deve ser possível editar usuário utilizando email com 60 caracteres
    Dado foi selecionado o botão editar usuário
    Quando informou email com 60 caracteres
    Quando clicou no botão salvar
    Então O email é editado
    Então retorna para a lista de usuarios
    Então é exibida uma mensagem informando que o usuário foi editado com sucesso

Cenário: Não deve ser possível editar usuário informando email com 61 caracteres
    Dado foi selecionado o botão editar usuário
    Quando informou email com 61 caracteres
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o limite de caracteres para email é 60
    Então não é realizada requisição para editar usuário

Cenário: Editar usuário informando nome com menos de 4 caracteres
    Dado foi selecionado o botão editar usuário
    Quando informou um nome com 3 caracteres
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o nome deve conter no mínimo 4 caracteres
    Então não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando nome vazio
    Dado foi selecionado o botão editar usuário
    Quando não informou nome
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o campo nome é obrigatório
    Então não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando email vazio
    Dado foi selecionado o botão editar usuário
    Quando não informou email
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o campo email é obrigatório
    Então não é realizada requisição para editar usuário

Cenário: Não deve ser possível editar usuário informando nome e email vazio
    Dado foi selecionado o botão editar usuário
    Quando não informou nome
    Quando não informou email
    Quando clicou no botão salvar
    Então é exibida mensagem informando que o campo nome é obrigatório
    Então é exibida mensagem informando que o campo email é obrigatório
    Então não é realizada requisição para editar usuário

Cenário: Campo ID deve informar ID e estar desabilitado para edição
    Dado foi selecionado o botão editar usuário
    Então campo ID está desabilitado
    Então campo ID deve exibir o ID do usuário  

#  criar cenário para validar o box quando usuário não é editado