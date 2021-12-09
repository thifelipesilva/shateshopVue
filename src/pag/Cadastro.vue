<template>
    <div class="cadastro">
        <h2 class="title">Cadastro</h2>
        <form action="" class="form">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Nome Completo">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu e-mail">
            <label for="phone">Telefone | WhatsApp</label>
            <input type="tel" name="phone" placeholder="Digite seu Telefone">
            <label for="senha">Senha</label>
            <input type="password" name="senha" placeholder="Digite sua senha">
            <label for="senha">Confirmar Senha</label>
            <input type="password" name="senha" placeholder="Confirme sua senha">

            <button>Cadastrar</button>

        </form>
    </div>
</template>
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