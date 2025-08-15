<template>
    <div class="container-fluid mt-2">
        <div class="row mt-3">
            <div class="col">
                <div id="diseases-header">
                    <button
                        type="button"
                        class="btn btn-info pull-left"
                        @click="$router.push('/').catch(() => {})"
                    >Назад</button>
                    <span>Третирани Заболявания</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="diseases-table">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ЗАБОЛЯВАНЕ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(disease, idx) in diseases" :key="idx">
                                <td>{{ idx + 1 }}</td>
                                <td>{{ disease }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import diseases from "@/config/diseases.json";

export default {
    name: "Diseases",
    data() {
        return {
            diseases: diseases,
        };
    },
    mounted() {},
    computed: {},
    methods: {},
    watch: {},
};
</script>

<style scoped>
#diseases-header {
    background: whitesmoke;
    opacity: 50%;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Verdana, sans-serif;
}
#diseases-table {
    /* background: yellow; */
    opacity: 50%;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: Verdana, sans-serif;
}
</style>

