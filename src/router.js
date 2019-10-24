import Vue from "vue";
import Router from "vue-router";
import Login from "./views/auth/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "nav-active",
  routes: [
    { path: "/", component: Login, meta: { title: 'Login'} },
    { path: "/signup", component: () => import("./views/auth/Signup.vue"), meta: {title: 'Sign Up'} },
    { path: "/verification", component: () => import("./views/auth/Verification.vue"), meta: {title: 'Verify'} },
    { path: "/login", redirect: "/" },
    { path: "*", redirect: "/" },
    
    //Therapist Section
    {
      path: "",
      component: () => import("./views/therapist/Home.vue"),
      children: [
        { path: "/therapist/dashboard", component: () => import("./views/therapist/Dashboard.vue"), meta: {title: 'Dashboard'} },
        {path:"/therapist", redirect: "/therapist/dashboard" },
        { path: "/therapist/profile", component: () => import("./views/therapist/Profile.vue"), meta: {title: 'My Profile'} },
        { path: "/therapist/patients", component: () => import("./views/therapist/Patients.vue"), meta: {title: 'Patients'} },
        { path: "/therapist/patients/new", component: () => import("./views/therapist/AddPatient.vue"), meta: {title: 'New Patient'} },
        // { path: "/therapist/edit-patient/:id", component: () => import("./views/therapist/EditPatient.vue"), meta: {title: 'Edit Patient Profile'} },
        { path: "/therapist/activity-lists", component: () => import("./views/therapist/ActivityLists.vue"), meta: {title: 'Activity Lists'} },
        { path: "/therapist/activity-lists/new", component: () => import("./views/therapist/CreateActivityList.vue"), meta: {title: 'New Activity List'} },
        { path: "/therapist/session-reports", component: () => import("./views/therapist/SessionReports.vue"), meta: {title: 'Session Reports'} },
        { path: "/therapist/session-reports/new", component: () => import("./views/therapist/CreateSessionReport.vue"), meta: {title: 'New Session Report'} },
        { path: "/therapist/monthly-reports", component: () => import("./views/therapist/MonthlyReports.vue"), meta: {title: 'Monthly Reports'} },
        { path: "/therapist/monthly-reports/new", component: () => import("./views/therapist/CreateMonthlyReport.vue"), meta: {title: 'New Monthly Report'} },
        { path: "/therapist/observation-reports", component: () => import("./views/therapist/ObservationReports.vue"), meta: {title: 'Observation Reports'} }
      ]
    },
    // Users section
    
  ]
});

const DEFAULT_TITLE = 'AutiMS';
router.afterEach((to, from) => {
    document.title = `${to.meta.title} - ${DEFAULT_TITLE}`;
});

export default router;
