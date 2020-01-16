import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import {router} from './router'

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    patient_details: {},
    therapist_details: {},
    monthly_report: {},
    session_report: {},
  }, 
  mutations: {
    SAVE_PATIENT_DETAILS: (state, payload) => {
      state.patient_details = payload
    },
    SAVE_THERAPIST_DETAILS: (state, payload) => {
      state.therapist_details = payload
    },
    SAVE_MONTHLY_REPORT: (state, payload) => {
      state.monthly_report = payload
    },
    SAVE_SESSION_REPORT: (state, payload) => {
      state.session_report = payload
    },
  },
  actions: {
    fetchAllTherapistPatients: ({state, getters}) => {
      return axios.get('/therapist/view_patients/')    
    },
    // fetchStock: ({state, getters, commit}, payload) => {
    //   let pro = payload
    //   axios.get('/stock.json')
    //   .then(res => {
    // router.push('/feedback')
    //     commit('STOCK',res.data)
    //     commit('STOCK')
    //     commit('GET_STOCK', {productArray: getters.allProducts, stockArray: state.allStock})
    //   })
    // }, 
    viewPatientActivityList: (payload) => {
    },
    viewPatientMonthlyReports: (payload) =>{
      // Fetch patient details using ID
    },
    viewPatientObservationReports: (payload) =>{
      // Fetch patient details using ID
    },
    viewPatientSessionReports: (payload) =>{
      // Fetch patient details using ID
    },
  },
  getters: {
    // allProducts: state => {
    //   state.allProducts = (state.ChiffonProducts.concat(state.ViscoseProducts)).concat(state.RayonProducts);
    //   return state.allProducts
    // },
  }
});
