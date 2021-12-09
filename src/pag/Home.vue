<template>
    <main class="container">
        <Slider/>

        <SecaoBanner/>

        <SmallBanner/>

        <SecaoBanner/>
    </main>

</template>

<script>
import Slider from '../components/Slider.vue';
import SecaoBanner from '../components/SecaoBanner.vue';
import SmallBanner from '../components/SmallBanner.vue';

export default {
    components: {
        Slider,
        SecaoBanner,
        SmallBanner
    }
}
</script>


<style scoped>
</style>