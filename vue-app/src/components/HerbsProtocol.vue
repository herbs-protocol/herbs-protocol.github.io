<template>
    <div class="mt-2">
        <div class="marquee-container">
            <div
                class="marquee"
            >SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION •</div>
        </div>
        <div class="row">
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
            </div>
            <div class="col-3">
                <div id="tania1" @click="goToTania">Tania</div>
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
        goToTania() {
            this.$router.push("/ilia").catch(() => {});
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

#tania1 {
    background: yellow;
    opacity: 50%;
    border-radius: 10px;
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
    padding: 20px;
    cursor: pointer;
}
</style>

