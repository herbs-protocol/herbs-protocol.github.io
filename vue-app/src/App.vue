<template>
    <div>
        <oc-header />
        <loader :isLoading="isLoading" />
        <herbs-protocol />
        <oc-footer />
    </div>
</template>

<script>
import emitter from "@/helpers/eventBus";
import HerbsProtocol from "@/components/HerbsProtocol.vue";
import Loader from "@/components/Loader.vue";
import OcHeader from "@/components/Header.vue";
import OcFooter from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        HerbsProtocol,
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
