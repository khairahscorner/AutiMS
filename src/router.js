import Vue from "vue";
import Router from "vue-router";
import Login from "./views/auth/Login.vue";
import allMixins from './mixins.js';
import axios from 'axios'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "nav-active",
  routes: [
    { name:'login', path: "/", component: Login, meta: { title: 'Login'},
      beforeEnter(to, from, next) {
        let userToken = allMixins.methods.retrieveToken(window.btoa('userToken'))
        if(userToken == null){
          next()
        }
        else {
          let details = Vue.$jwt.decode(userToken)
          if(details == null) {
            localStorage.clear()
            next('/')
          }
          else {
            if(details.data.user_type == 'therapist') {
              next('/therapist/dashboard')
            }
            else if (details.data.user_type == 'parent') {
              next('/parent/dashboard')
            }
            else if (details.data.user_type == 'caregiver'){
              next('/dashboard')
            }
            else {
              localStorage.clear()
              next('/')
            } 
          }
        }
      }
    },
    { path: "/signup", component: () => import("./views/auth/Signup.vue"), meta: {title: 'Sign Up'} },
    { path: "/activate/:confirmation_token", component: () => import("./views/auth/Activation.vue"), meta: {title: 'Activate Caregiver Account'} },
    { path: "/verify/:parent_email", component: () => import("./views/auth/ParentVerification.vue"), meta: {title: 'Verify Relationship'} },
    { path: "/login", redirect: "/" },
    { path: "*", redirect: "/" },
    
    //Therapist Section
    { 
      path: "",
      component: () => import("./views/therapist/Home.vue"),
      children: [
        { path: "/therapist/dashboard", component: () => import("./views/therapist/Dashboard.vue"), meta: {title: 'Dashboard', reqToken: true} },
        {path:"/therapist", redirect: "/therapist/dashboard" },
        { path: "/therapist/profile", component: () => import("./views/therapist/Profile.vue"), meta: {title: 'My Profile', reqToken: true} },
        { path: "/therapist/patients", component: () => import("./views/therapist/Patients.vue"), meta: {title: 'Patients', reqToken: true} },
        { path: "/therapist/patients/new", component: () => import("./views/therapist/AddPatient.vue"), meta: {title: 'New Patient', reqToken: true} },
        // { path: "/therapist/edit-patient/:id", component: () => import("./views/therapist/EditPatient.vue"), meta: {title: 'Edit Patient Profile', reqToken: true} },
        
        { path: "/therapist/activity-lists", component: () => import("./views/therapist/ActivityLists.vue"), meta: {title: 'Activity Lists', reqToken: true} },
        { path: "/therapist/activity-lists/:patient_id/new", component: () => import("./views/therapist/CreateActivityList.vue"), meta: {title: 'New Activity List', reqToken: true} },
        { path: "/therapist/activity-lists/:patient_id/edit", component: () => import("./views/therapist/EditActivityList.vue"), meta: {title: 'Edit Activity List', reqToken: true} },
        
        { path: "/therapist/session-reports", component: () => import("./views/therapist/SessionReports.vue"), meta: {title: 'Session Reports', reqToken: true} },
        { path: "/therapist/session-reports/:patient_id/new", component: () => import("./views/therapist/CreateSessionReport.vue"), meta: {title: 'New Session Report', reqToken: true} },
        { path: "/therapist/session-reports/:report_id", component: () => import("./views/therapist/SingleSessionReport.vue"), meta: {title: 'Session Report', reqToken: true} },
       
        { path: "/therapist/monthly-reports", component: () => import("./views/therapist/MonthlyReports.vue"), meta: {title: 'Monthly Reports', reqToken: true} },
        { path: "/therapist/monthly-reports/:patient_id/new", component: () => import("./views/therapist/CreateMonthlyReport.vue"), meta: {title: 'New Monthly Report', reqToken: true} },
        { path: "/therapist/monthly-reports/:report_id", component: () => import("./views/therapist/SingleMonthlyReport.vue"), meta: {title: 'Monthly Report', reqToken: true} },
        
        { path: "/therapist/observation-reports", component: () => import("./views/therapist/ObservationReports.vue"), meta: {title: 'Observation Reports', reqToken: true} }
      ],
      beforeEnter(to, from, next) {
        let userToken = allMixins.methods.retrieveToken(window.btoa('userToken'))
        let details = Vue.$jwt.decode(userToken)
        if(details == null) {
          localStorage.clear()
          next('/')
        }
        else {
          if (details.data.user_type == 'therapist') {
            next()
          }
          else{
            next('/')
          }
        }
      }
    },
    // Parent section
    {
      path: "",
      component: () => import("./views/parent/Home.vue"),
      children: [
        { path: "/parent/dashboard", component: () => import("./views/parent/Dashboard.vue"), meta: {title: 'Dashboard', reqToken: true} },
        {path:"/parent", redirect: "/parent/dashboard" },
        { path: "/parent/profile", component: () => import("./views/parent/Profile.vue"), meta: {title: 'My Profile', reqToken: true} },
        
        { path: "/parent/activity-lists", component: () => import("./views/parent/ActivityLists.vue"), meta: {title: 'Activity Lists', reqToken: true} },
        { path: "/parent/session-reports", component: () => import("./views/parent/SessionReports.vue"), meta: {title: 'Session Reports', reqToken: true} },
        { path: "/parent/monthly-reports", component: () => import("./views/parent/MonthlyReports.vue"), meta: {title: 'Monthly Reports', reqToken: true} },
        
        { path: "/parent/observation-reports", component: () => import("./views/parent/ObservationReports.vue"), meta: {title: 'Observation Reports', reqToken: true} },
        { path: "/parent/observation-reports/:patient_id/new", component: () => import("./views/parent/CreateObservationReport.vue"), meta: {title: 'New Observation Report', reqToken: true} },
        { path: "/parent/observation-reports/:payload", component: () => import("./views/parent/SingleObservationReport.vue"), meta: {title: 'Observation Report', reqToken: true} },

        { path: "/caregivers", component: () => import("./views/parent/Caregivers.vue"), meta: {title: 'All Caregivers', reqToken: true} },
      ],
      beforeEnter(to, from, next) {
        let userToken = allMixins.methods.retrieveToken(window.btoa('userToken'))
        let details = Vue.$jwt.decode(userToken)
        if(details == null) {
          localStorage.clear()
          next('/')
        }
        else {
          if (details.data.user_type == 'parent') {
            next()
          }
          else{
            next('/')
          }
        }
      }
    },
    // Caregiver section
    {
      path: "",
      component: () => import("./views/caregiver/Home.vue"),
      children: [
        { path: "/dashboard", component: () => import("./views/caregiver/Dashboard.vue"), meta: {title: 'Dashboard', reqToken: true} },
        { path: "/profile", component: () => import("./views/caregiver/Profile.vue"), meta: {title: 'My Profile', reqToken: true} },
        
        { path: "/activity-lists", component: () => import("./views/caregiver/ActivityLists.vue"), meta: {title: 'Activity Lists', reqToken: true} },
        { path: "/session-reports", component: () => import("./views/caregiver/SessionReports.vue"), meta: {title: 'Session Reports', reqToken: true} },
        { path: "/monthly-reports", component: () => import("./views/caregiver/MonthlyReports.vue"), meta: {title: 'Monthly Reports', reqToken: true} },
        
        { path: "/observation-reports", component: () => import("./views/caregiver/ObservationReports.vue"), meta: {title: 'Observation Reports', reqToken: true} },
        { path: "/observation-reports/:patient_id/new", component: () => import("./views/caregiver/CreateObservationReport.vue"), meta: {title: 'New Observation Report', reqToken: true} },
        { path: "/observation-reports/:payload", component: () => import("./views/caregiver/ObservationSingleReport.vue"), meta: {title: 'Observation Report', reqToken: true} },
      ],
      beforeEnter(to, from, next) {
        let userToken = allMixins.methods.retrieveToken(window.btoa('userToken'))
        let details = Vue.$jwt.decode(userToken)
        if(details == null) {
          localStorage.clear()
          next('/')
        }
        else {
          if (details.data.user_type == 'caregiver') {
            next()
          }
          else{
            next('/')
          }
        }
      }
    }
  ]
});

const DEFAULT_TITLE = 'AutiMS';

router.afterEach((to, from) => {
    document.title = `${to.meta.title} - ${DEFAULT_TITLE}`;
});

export default router;
