<template>
    <div class="login">
        <h2 class="title">Login</h2>
        <form action="">
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="digite seu email">
            <label for="password">Senha:</label>
            <input type="password" name="password" placeholder="digite sua senha">
            <button>Entrar</button>
            <p>Esqueceu seu <span>Email</span>? Esquece sua <span>senha?</span></p>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>

<style scoped>

.login {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    height: 700px;
    width: 800px;
}

.login .title {
    margin-left: 450px;
    text-align: center;
    
    margin-bottom: .9rem;
    color: var(--green);
}

form {
    display: flex;
    flex-direction: column;

    position: relative;
    left: 45%;
    
}

form label {
    font-size: 1.2rem;
    color: var(--green);
    font-weight: bolder;
}

form input {
    margin-top: .8rem;
    margin-bottom: .8rem;
    width: 70%;
    height: 3rem;

    border: 1.4px solid var(--green);
    border-radius: .2rem;
    padding-left: .4rem;
    color: var(--green);
}

form button {
    width: 70%;
    height: 3rem;

    background-color: var(--green);
    color: #fff;
    

    margin-bottom: .8rem;
}

form button:hover {

    color: #fff;
    font-weight: bold;
    border: 1px solid var(--green);
    background-color: #87ceeb;
}

form p {
    color: var(--green);
    font-size: 1.2rem;
}

form p span {
    cursor: pointer;
}

form p span:hover {
    color: aqua;
}

</style>