<template>
    <div class="cadastro">
        <h2 class="title">Cadastro</h2>
        <form action="" class="form" @submit.prevent="enviaForm">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Nome Completo" v-model="user.nome">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" v-model="user.email">
            <label for="phone">Telefone | WhatsApp</label>
            <input type="tel" name="phone" placeholder="Digite seu Telefone" v-model="user.phone">
            <label for="senha">Senha</label>
            <input type="password" name="senha" placeholder="Digite sua senha" v-model="user.senha">
            <label for="senha">Confirmar Senha</label>
            <input type="password" name="senha" placeholder="Confirme sua senha" v-model="user.confSenha">

            <button type="submit">Cadastrar</button>

        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data: () => {
        return {
            user: {
                nome: '',
                email: '',
                phone: '',
                senha: '',
                confSenha: ''
            }
        }
    },
    methods: {
        enviaForm () {
            axios
                .post("http://localhost:8000/auth/register", this.usuario)
                .then(resposta => console.log(resposta))
                .catch(erro => console.log(erro));
        }
    }
}
</script>
<style scoped>

.cadastro {
    display: flex;
    flex-direction: column;    
    padding-top: 1.4rem;
    height: 700px;
    width: 800px;
}

.cadastro .title {
    margin-left: 450px;
    text-align: center;
    
    margin-bottom: .9rem;
    color: var(--green);
}

.cadastro .form {
    position: relative;
    left: 45%;

    display: flex;
    flex-direction: column;
}

.cadastro .form label {
    font-size: 1.2rem;
    color: var(--green);
    font-weight: bolder;
}

.cadastro .form input {
    margin-top: .8rem;
    margin-bottom: .8rem;
    width: 70%;
    height: 3rem;

    border: 1.4px solid var(--green);
    border-radius: .2rem;
    padding-left: .4rem;
    color: var(--green);
}

.cadastro .form button {
    width: 70%;
    height: 3rem;

    background-color: var(--green);
    color: #fff;
    

    margin-bottom: .8rem;
}

.cadastro .form button:hover {

    color: #fff;
    font-weight: bold;
    border: 1px solid var(--green);
    background-color: #87ceeb;
}

</style>