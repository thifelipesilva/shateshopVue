<template>
    <header class="container">
        
        <div class="nav-top">
            <ul class="login">
                <li>
                    <router-link to="./login" class="link">Login</router-link>                   
                </li>
                <li>
                    <router-link to="./cadastro" class="link">Cadastre-se</router-link>                 
                </li>
                              
            </ul>
            <input type="search" class="search" placeholder="Oque você procura?">
        </div>

        <nav class="nav-principal">
            <h1 class="title">{{ titulo }}</h1>
            <ul class="menu">
                <li>
                    <router-link to="/" class="link">Home</router-link>
                </li>
                <li>Skates</li>
                <li>roupas</li>
                <li>acessorios</li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Header',
   
  data () {
    return {
        login: [
            'Login',
            'Cadastre-se'
        ],

        titulo: 'GreenLand',

        menu: [
            'home',
            'Skates',
            'roupas',
            'acessorios'
        ]

    }
  }
    
}
</script>

<style scoped>

.container{    
    display: flex;
    align-items: center;
    flex-direction: column;       
    
    
    padding: 1rem 7%;

    box-shadow: var(--box-shadow);  
    
    border-bottom: 3px solid var(--green);
}

/* login | cadastro */
.container .nav-top {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    
}

.container .nav-top .login {
    display: flex;
    align-items: center;
    
}

.container .nav-top .login li {
    list-style: none;
}

.container .nav-top .login li .link {
    font-size: .8rem;
    color: var(--green);
    cursor: pointer;

    border-radius: .5rem; 
    padding: .5rem 1.5rem; 

    margin-right: 1rem;
    
}

.container .nav-top .login li .link:hover {
    color: #fff;
    background: var(--green);
}




/* Input */

.container .nav-top .search {
    width: 300px;
    border: 3px solid var(--green);
    border-radius: .5rem;  
    padding: .5rem 1.2rem;
}



/* nav-bar */

.container .nav-principal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.6rem;
    margin-bottom: 1.2rem;
    width: 100%;
}

.container .nav-principal .title {
    color: var(--green);
    font-size: 2rem;
}

.container .nav-principal .menu {
    display: flex;
    align-items: center;
}

.container .nav-principal .menu li {
    
    list-style: none;

    font-weight: bold;
    font-size: 1rem;
    color: var(--green);

    cursor: pointer;

    border-radius: .5rem; 
    padding: .5rem 1.5rem;  
}

.container .nav-principal .menu li .link {
    font-weight: bold;
    font-size: 1rem;
    color: var(--green);
    
    margin-right: 1rem;
}

.container .nav-principal .menu li .link:hover {
    color: #fff;
    background: var(--green);
}

.container .nav-principal .menu li:hover {
    color: #fff;
    background: var(--green);
}

</style>