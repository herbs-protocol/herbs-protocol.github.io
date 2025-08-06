<template>
    <footer id="oc-native-footer">
        <div class="oc-native-footer-wrapper">
            <img id="oc-native-footer-logo" alt="Opencode" src="../assets/images/footer-logo.png" />
        </div>
        <!-- version and copyright text -->
        <div id="oc-native-footer-right-side">
            <!-- <span id="oc-native-footer-build-version">Version: 1.0.1</span> -->
            <span id="oc-native-footer-copyright-text">
                <span>© 2025 Herbs Protocol Ltd.</span>
                <span>All rights reserved.</span>
            </span>
        </div>
        <!-- end version and copyright text -->
        <div class="oc-native-clearfix"></div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>

<style scoped>
/* Footer styles */
#oc-native-footer {
    background-color: #f8f8f8;
    border-top: 1px solid #e7e7e7;
    padding: 15px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between; /* Ensures logo stays left and text right */
    align-items: center;
    z-index: 1000;
}

#oc-native-footer-right-side {
    margin-left: auto; /* Push to the right */
    font-size: 12px;
    color: #666;
    display: flex; /* Make this a flex container */
    flex-direction: column; /* Stack children vertically */
    align-items: flex-end; /* Right-align content */
    min-height: 40px; /* Set a fixed min-height (adjust as needed) */
    justify-content: center; /* Vertically center content */
}

#oc-native-footer-copyright-text {
    display: inline-flex; /* Allow wrapping */
    flex-wrap: wrap; /* Enable wrapping */
    justify-content: flex-end; /* Right-align spans */
    gap: 5px; /* Replace margin-left with gap */
    line-height: 1.2; /* Control spacing between lines */
}

#oc-native-footer-logo {
    height: 30px;
    width: auto;
}

/* Optional: Add spacing between version and copyright */
#oc-native-footer-build-version {
    margin-bottom: 4px;
}

/* Ensure content doesn't hide behind the fixed footer */
body {
    margin-bottom: 80px;
}
</style>