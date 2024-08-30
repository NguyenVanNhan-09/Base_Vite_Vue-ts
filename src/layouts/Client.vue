<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const route = useRoute();
const isPathPage = computed(() => {
    const excludedPaths = ['/your-property', '/checkout', '/checkout-info', '/login'];
    return excludedPaths.includes(route.path);
});
</script>

<template>
    <div>
        <Header v-if="!isPathPage" />
        <div class="z-1"><router-view></router-view></div>
        <Footer v-if="!isPathPage" />
    </div>
</template>

<style lang="scss" scoped></style>