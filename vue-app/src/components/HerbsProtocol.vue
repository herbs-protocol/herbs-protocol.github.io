<template>
    <div class="mt-2">
        <div class="marquee-container">
            <div
                class="marquee"
            >SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION •</div>
        </div>
        <div class="row mt-5">
            <div class="col-3">
                <div class="main-box" @click="goToTania(1)">
                    <span class="box-text">Tania1</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(2)">
                    <span class="box-text">Tania2</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(3)">
                    <span class="box-text">Tania3</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(4)">
                    <span class="box-text">Tania4</span>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-3">
                <div class="main-box" @click="goToTania(5)">
                    <span class="box-text">Tania5</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(6)">
                    <span class="box-text">Tania6</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(7)">
                    <span class="box-text">Tania7</span>
                </div>
            </div>
            <div class="col-3">
                <div class="main-box" @click="goToTania(8)">
                    <span class="box-text">Tania8</span>
                </div>
            </div>
        </div>
    </div>
</template>n

<script>
export default {
    name: "HerbsProtocol",
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {
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

