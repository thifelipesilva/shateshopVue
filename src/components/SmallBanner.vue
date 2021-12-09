<template>
    <div class="banner">
        <div class="par">
            <img src="../assets/img/card-1-img1.png" alt="">
            <p>Frete Gratis</p>
        </div>
        <div class="par">
            <img src="../assets/img/card-1-img2.png" alt="">
            <p>Melhores Preços</p>
        </div>
        <div class="par">
            <img src="../assets/img/card-1-img3.png" alt="">
            <p>Até 10x sem juros</p>
        </div>
        <div class="par">
            <img src="../assets/img/card-1-img4.png" alt="">
            <p>Melhores Marcas</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SmallBanner'
}
</script>

<style scoped>
.banner{
    /*
    
    margin: 20px auto 20px auto;
    */
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 65x;

    margin-bottom: 1.4rem;
}

.banner .par{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.banner .par img:hover{
    transform: rotate(360deg);
}

</style>