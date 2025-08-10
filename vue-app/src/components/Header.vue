<template>
    <header id="oc-native-header">
        <div class="oc-native-header-wrapper">
            <img
                id="oc-native-herbs-protocol-logo"
                alt="HerbsProtocol"
                src="../assets/images/herbs-protocol-logo.jpg"
            />
        </div>
        <a
            href="#"
            @click.prevent="openSertificate"
            data-bs-toggle="modal"
            data-bs-target="#sertificateModal"
        >Сертификат</a>
        <button id="oc-native-user-button" title="User: Guest">
            <span class="oc-native-user-icon">👤</span>
            <!-- Replace with an SVG or icon font if preferred -->
        </button>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            showSertificate: false,
        };
    },
    mounted() {},
    computed: {},
    methods: {
        openSertificate() {
            console.log("show");
        },
    },
};
</script>

<style scoped>
/* Header styles */
#oc-native-header {
    background-color: #f8f8f8;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px 20px;
    position: sticky; /* Stays at top when scrolling */
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between; /* Logo left, button right */
    align-items: center;
    z-index: 1000; /* Ensures header stays above content */
}

#oc-native-header-logo,
#oc-native-herbs-protocol-logo {
    height: 40px; /* Match footer logo height */
    width: auto;
}

#oc-native-user-button {
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #333;
    transition: background 0.2s;
}

#oc-native-user-button:hover {
    background: #eee;
}

.oc-native-user-icon {
    font-size: 16px;
}

/* Ensure content doesn’t hide behind sticky header */
body {
    padding-top: 60px; /* Adjust based on header height */
}
</style>