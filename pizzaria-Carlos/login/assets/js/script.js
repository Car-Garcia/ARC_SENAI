// criando uma variavel para o icone
let btn = document.querySelector('#showPassword');
let btnChecked = document.querySelector('#showCheckedPassword');

// criando variaveis para os labels e inputs

// page cadastro
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelSenha');
let validPassword = false

let checkedpassword = document.querySelector('#checkedpassword');
let labelCheckedPassword = document.querySelector('#labelCheckedPassword');
let validCheckedPassword = false

let msError = document.querySelector('#msError')
let msSucces = document.querySelector('#msSucces')

let buttonMobile = document.querySelector('#button')

// page login

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome</strong> *insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
    }else{
        labelNome.setAttribute('style', 'color: #F27706')
        labelNome.innerHTML = '<strong>Nome</strong>'
        nome.setAttribute('style', 'border-color: #F27706')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 5) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = '<strong>Usuario</strong> *insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
    }else{
        labelUsuario.setAttribute('style', 'color: #F27706')
        labelUsuario.innerHTML = '<strong>Usuario</strong>'
        usuario.setAttribute('style', 'border-color: #F27706')
        validUsuario = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = '<strong>Senha</strong> *insira no minimo 6 caracteres'
        password.setAttribute('style', 'border-color: red')
    }else{
        labelPassword.setAttribute('style', 'color: #F27706')
        labelPassword.innerHTML = '<strong>Senha</strong>'
        password.setAttribute('style', 'border-color: #F27706')
        validPassword = true
    }
})

checkedpassword.addEventListener('keyup', () => {
    if (checkedpassword.value != password.value) {
        labelCheckedPassword.setAttribute('style', 'color: red')
        labelCheckedPassword.innerHTML = '<strong>Senha</strong> *os valores não são iguais'
        checkedpassword.setAttribute('style', 'border-color: red')
    }else{
        labelCheckedPassword.setAttribute('style', 'color: #F27706')
        labelCheckedPassword.innerHTML = '<strong>Senha</strong>'
        checkedpassword.setAttribute('style', 'border-color: #F27706')
        validCheckedPassword = true
    }
})

function cadastrar() {
    if (validNome && validUsuario && validPassword && validCheckedPassword == true) {

        //memoria storge: "banco" temporario do chome
        //pega a 'listaUser' se tiver, ou crie uma
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nome: nome.value,
            userCad: usuario.value,
            senhaCad: password.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msSucces.setAttribute('style', 'display:block')
        msSucces.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msError.setAttribute('style', 'display: none')
        msError.innerHTML = '<strong></strong>'

        window.location.href = 'http://127.0.0.1:5501/login.html'
    }else{
        msError.setAttribute('style', 'display: block')
        msError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msSucces.setAttribute('style', 'display:none')
        msSucces.innerHTML = '<strong></strong>'
    }
}

function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#password')
    let senhaLabel = document.querySelector('#passwordLabel')

    let msError = document.querySelector('#msError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {

        // se o itens inseridos no senha e usuario for igual au usuario e senha do localStroge
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {

            // preenchendo o array com os valores 
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = 'http://127.0.0.1:5500/tela_produtos.html'
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        msError.setAttribute('style', 'display: block')
        msError.innerHTML = 'Usuario ou senha incorretos'

        usuario.focus()
    }

}

// quando acontecer o evento 'click' entra na arrow function
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    // se o atributo'type' do input for igual a password
    if (inputSenha.getAttribute('type') == 'password') {
        // troca o type para 'text'
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

btnChecked.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#checkedpassword')

    if (inputSenha.getAttribute('type') == 'password') {
        // troca o type para 'text'
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

function MenuMobile() {
    if (buttonMobile.className == 'menu-mobile-active') {
        buttonMobile.className = 'menu-mobile'
    } else {
        buttonMobile.className = 'menu-mobile-active'
    }
}



