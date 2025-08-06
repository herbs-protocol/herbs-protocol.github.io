import emitter from '@/helpers/eventBus';

const publicApiURL = _appConfig.publicApiURL;

export default {
    namespaced: true,
    state: {
        countries: [],
        alerts: [],
        MNOs: {}, // mno by mcc
    },
    mutations: {
        COUNTRIES: (state, value) => {
            state.countries = value;
        },
        ALERTS: (state, value) => {
            state.alerts = value;
        },
        MNOS: (state, value) => {
            state.MNOs = value;
        },
    },
    actions: {
        fetchCountries(ctx) {
            return new Promise((resolve, reject) => {
                let countries = ctx.state.countries;
                if (countries.length > 0) {
                    resolve();
                } else {
                    emitter.emit('show-loader');
                    fetch(`${publicApiURL}countries?limit=1000`, {
                        method: 'GET',
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            // console.log('Success:', data);
                            // Handle the data here
                            countries = data.data;
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            // Handle errors here
                        })
                        .finally(() => {
                            emitter.emit('hide-loader');
                            ctx.commit('COUNTRIES', countries);
                            resolve();
                        });
                }
            });
        },
        fetchAlerts(ctx) {
            return new Promise((resolve, reject) => {
                let alerts = ctx.state.alerts;
                if (alerts.length > 0) {
                    resolve();
                } else {
                    emitter.emit('show-loader');
                    // fetch("http://web5.devlab.opencode.com:3077/api/countryalerts", {
                    // fetch("https://web5.devlab.opencode.com/ocmicro_alertwide/api/countryalerts", {
                    fetch(`${publicApiURL}countryalerts?sort=-received_time`, {
                        method: 'GET',
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            // console.log('Success:', data);
                            // Handle the data here
                            alerts = data.data;
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            // Handle errors here
                        })
                        .finally(() => {
                            emitter.emit('hide-loader');
                            ctx.commit('ALERTS', alerts);
                            resolve();
                        });
                }
            });
        },
        resetAlerts(ctx) {
            return new Promise((resolve, reject) => {
                ctx.commit('ALERTS', []);
                resolve();
            });
        },
        fetchMNOs(ctx, mcc) {
            // console.log('mcc: ', mcc);
            return new Promise((resolve, reject) => {
                let MNOs = ctx.state.MNOs;
                if (mcc in MNOs) {
                    resolve();
                } else {
                    emitter.emit('show-loader');
                    fetch(`${publicApiURL}mnos?flt[mcc]=${mcc}`, {
                        method: 'GET',
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            // console.log('Success:', data);
                            // Handle the data here
                            let currentMNOs = data.data;
                            MNOs[mcc] = currentMNOs;
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            // Handle errors here
                        })
                        .finally(() => {
                            emitter.emit('hide-loader');
                            ctx.commit('MNOS', MNOs);
                            resolve();
                        });
                }
            });
        },
    },
    getters: {
        getCountries: (state, getters) => {
            return state.countries;
        },
        getAlerts: (state, getters) => {
            return state.alerts;
        },
        getMNOs: (state, getters) => (mcc) => {
            return state.MNOs[mcc];
        },
    },
};
