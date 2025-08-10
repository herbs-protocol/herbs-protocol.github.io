<template>
    <div class="card herb-card">
        <div class="card-body">
            <img
                :src="herbPicUrl(pic)"
                :alt="pic"
                class="herb-pic"
                :title="herb"
                @click.stop="() => ({})"
            />
            <span>{{ herb }}, {{ quantity }} / цена: {{ price }} лв.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Herb",
    props: ["pic", "herb", "quantity", "price"],
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {
        herbPicUrl(pic) {
            let herbPicUrl = new URL(`../assets/images/herbs/${pic}`, import.meta.url)
                .href;
            return herbPicUrl;
        },
    },
    watch: {},
};
</script>

<style scoped>
.herb-card {
    opacity: 70%;
}
.herb-pic {
    width: 60px;
    height: 60px;
}
</style>

