<template>
    <div id="herbs-protocol-container">
        <oc-header />
        <loader :isLoading="isLoading" />
        <router-view />
        <oc-footer />
        <!-- sertificate modal -->
        <div
            class="modal modal-xl fade"
            id="sertificateModal"
            tabindex="-1"
            aria-labelledby="sertificateModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="sertificateModalLabel">Сертификат</h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <img
                            :src="sertificatePicUrl"
                            alt="Sertificate"
                            class="img-fluid"
                            :title="Сетификат"
                        />
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
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
    computed: {
        sertificatePicUrl() {
            let sertificatePicUrl = new URL("./assets/images/sertificate.jpg", import.meta.url)
                .href;
            return sertificatePicUrl;
        },
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
