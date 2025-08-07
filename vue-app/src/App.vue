<template>
    <div id="herbs-protocol-container">
        <oc-header />
        <loader :isLoading="isLoading" />
        <router-view />
        <oc-footer />
    </div>
</template>

<script>
import emitter from "@/helpers/eventBus";
import Loader from "@/components/Loader.vue";
import OcHeader from "@/components/Header.vue";
import OcFooter from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Loader,
        OcHeader,
        OcFooter,
    },
    data() {
        return {
            isLoading: false,
        };
    },
    created() {
        emitter.on("show-loader", () => {
            this.isLoading = true;
        });
        emitter.on("hide-loader", () => {
            this.isLoading = false;
        });
    },
};
</script>

<style scoped>
</style>
