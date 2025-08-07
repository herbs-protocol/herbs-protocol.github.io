<template>
    <div class="mt-2">
        <div class="marquee-container">
            <div
                class="marquee"
            >SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION • SITE IS UNDER CONSTRUCTION •</div>
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
    methods: {},
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
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

