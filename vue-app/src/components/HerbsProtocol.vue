<template>
    <div class="mt-2">
        <div class="marquee-container">
            <div
                class="marquee"
            >SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION •</div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 col-sm-6">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1485558796140461%2F&show_text=false&width=267&t=0"
                    width="267"
                    height="476"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div class="col-md-3 col-sm-6">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IuD38mqTRQ4?si=9Ag0FKTWviES298G"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="col-md-1 col-sm-6"></div>
            <div class="col-md-3 col-sm-6">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ejJsAHR5pR0?si=mHGVA0tqbT9fIpjk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTreatableDiseases">
                    <span class="box-text">Третирани Заболявяния</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(2)">
                    <span class="box-text">Tania2</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(3)">
                    <span class="box-text">Tania3</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(4)">
                    <span class="box-text">Tania4</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(5)">
                    <span class="box-text">Tania5</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(6)">
                    <span class="box-text">Tania6</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(7)">
                    <span class="box-text">Tania7</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="main-box" @click="goToTania(8)">
                    <span class="box-text">Tania8</span>
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
        goToTania(param = 1) {
            this.$router.push(`/tania${param}`).catch(() => {});
        },
    },
    watch: {},
};
</script>

<style scoped>
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

