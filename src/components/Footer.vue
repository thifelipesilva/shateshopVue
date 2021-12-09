<template>
    <footer>
        <div class="newsLatter">
            <h3>Cadastre-se e receba nossas <spam>Promoções</spam></h3>
            <form action="">
                <label for="name">Digite seu nome</label>
                <input type="text" name="name">
                <label for="email">Digite seu email</label>
                <input type="email" name="email">
                <button>Cadastrar</button>
            </form>
        </div>
        <div class="container">

            <div class="institucional">
                <h4 class="institucional__title">{{ contato }}</h4>
                <ul class="institucional__lista">
                    <li class="itens" v-for="item of institucional"><a >{{ item }}</a></li>
                </ul>
            </div>

            <div class="atendimento">
                <h4 class="atendimento__title">atendimento</h4>
                <ul class="atendimento__lista">
                    <li class="itens" v-for="item of atendimento">{{ item }}</li>
                </ul>
            </div>

            <div class="conta">
                <h4 class="conta__title">Minha Conta</h4>
                <ul class="conta__lista">
                    <li class="itens" v-for="item of conta"><a >{{ item }}</a></li>
                </ul>
            </div>
        </div>

                 
    </footer>   
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            contato: 'contato',
            institucional: [
                'GreenLand',
                'Politica de troca',
                'Duvidas'
            ],
            atendimento: [
                'whatsApp: (81)9 9999-9999',
                'Horário: Seg - Sex | 9h - 18h',
                'email: contato@greenland.com.br'

            ],
            conta: [
                'Criar uma conta',
                'Minha conta',
                'Meus pedidos'
            ]
        }
    }
}
</script>


<style scoped>  

footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--green);

    width: 100%;

    padding-bottom: 1.6rem;
}

footer .newsLatter {
    margin-top: 1.2rem;
    width: 80%;
}

footer .newsLatter h3 {
    text-align: center;
    color: #fff;
    margin-bottom: .8rem;
}

footer .newsLatter form label {
    font-size: 1rem;
    color: #fff;
}

footer .newsLatter form input {
    width: 28%;
    margin-left: .4rem;
    margin-right: .8rem;
    border: 3px solid #fff;
    border-radius: .3rem; 
}

footer .newsLatter form button {
    width: 16%;
    height: 1.6rem;

    padding: .2rem;;
    border-radius: .3rem; 
    border: 1px solid rgb(235, 229, 229);
    font-weight: bold;

    color: var(--green);

}

footer .newsLatter form button:hover {
    width: 20%;
    height: 1.8rem;
    color: #000;
    border: 1px solid #000;
    background-color: #87ceeb;
}

footer .container {
    margin-top: 1.2rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
footer .container div h4 {
    color: #fff;
}

footer .container div ul .itens{
    list-style: none;
    text-decoration: none;
    color: #fff;
}
</style>