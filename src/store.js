import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    viewPatientActivityList(payload) {
    },
    viewPatientMonthlyReports(payload) {
      // Fetch patient details using ID
    },
    viewPatientObservationReports(payload) {
      // Fetch patient details using ID
    },
    viewPatientSessionReports(payload) {
      // Fetch patient details using ID
    },
  }
});
