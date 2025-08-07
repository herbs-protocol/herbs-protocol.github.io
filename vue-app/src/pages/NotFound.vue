<template>
    <div class="d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">
                        The page
                        <span class="font-weight-bold font-italic h4">{{ $route.fullPath }}</span> you are
                        looking for was not found.
                    </div>
                    <router-link class="btn btn-xl btn-info" to="/">{{ 'Back to Home' }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {},
    watch: {},
};
</script>
