<template>
    <div class="container-fluid mt-2">
        <div class="row mt-3">
            <div class="col">
                <div id="shop-header">
                    <button
                        type="button"
                        class="btn btn-info pull-left mt-2"
                        @click="$router.push('/').catch(() => {})"
                    >Назад</button>
                    <span>Билков Магазин</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div v-for="(herb, idx) in herbs" :key="idx">
                    <herb
                        :pic="herb.pic"
                        :herb="herb.herb"
                        :quantity="herb.quantity"
                        :price="herb.price"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Herb from "@/components/Herb.vue";

export default {
    name: "Shop",
    components: {
        Herb,
    },
    data() {
        return {
            herbs: [
                {
                    pic: "atremorine.webp",
                    herb: "Хранителна добавка Atremorine - прах",
                    quantity: "75 гр.",
                    price: "90.00",
                },
                {
                    pic: "CressanPure.jpg",
                    herb: "Хранителна добавка лиофилизиран кресон CressanPure",
                    quantity: "90 капсули",
                    price: "90.00",
                },
                {
                    pic: "aronia.jpg",
                    herb: "Пулпа от арония",
                    quantity: "190 гр.",
                    price: "9.00",
                },
                {
                    pic: "cherno_grozde.jpg",
                    herb: "Екстракт/пулпа от черно грозде",
                    quantity: "300 гр.",
                    price: "17.50",
                },
                {
                    pic: "ekstrakt_ot_plodove_na_rojkov.jpg",
                    herb: "Екстракт от плодове на рожков",
                    quantity: "640 гр.",
                    price: "28.00",
                },
            ],
        };
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {},
    watch: {},
};
</script>

<style scoped>
#shop-header {
    background: whitesmoke;
    opacity: 50%;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: Verdana, sans-serif;
}
</style>

