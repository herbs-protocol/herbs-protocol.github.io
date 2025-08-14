<template>
    <div class="mt-2">
        <div class="marquee-container">
            <div
                class="marquee"
            >SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION •</div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 col-sm-12">
                <div class="iframe-container mb-3">
                    <iframe
                        src="https://www.youtube.com/embed/kQGM9oSaC40"
                        title="Фитотерапия"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="main-box" @click="goToTreatableDiseases">
                    <span class="box-text">Третирани Заболявания</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="main-box" @click="goToShop">
                    <span class="box-text">Билков Магазин</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HerbsProtocol",
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {
        goToTreatableDiseases() {
            this.$router.push("/treatable-diseases").catch(() => {});
        },
        goToShop() {
            this.$router.push("/herbs-shop").catch(() => {});
        },
    },
    watch: {},
};
</script>

<style scoped>
/* responsive iframe pic */
.iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 177.5%; /* Aspect ratio for 442/785 (original iframe size) */
    height: 0;
    overflow: hidden;
    max-width: 442px; /* Maximum size for desktop */
    margin: 0 auto;
}
.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
/* for phones */
@media (max-width: 767px) {
    .iframe-container {
        max-width: 100%;
        padding-bottom: 70%; /* Adjust this for a different aspect ratio on mobile */
    }
}
/* marque style */
.marquee-container {
    width: 100%;
    overflow: hidden;
    background-color: #ffcc00; /* Yellow background for visibility */
    color: #000;
    font-weight: bold;
    padding: 10px 0;
    white-space: nowrap;
}

.marquee {
    display: inline-block;
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.main-box {
    background: yellow;
    opacity: 50%;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    padding: 20px;
    cursor: pointer;
}
.box-text {
    color: black;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: Verdana, sans-serif;
}
</style>

