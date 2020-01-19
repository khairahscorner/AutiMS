<template>
    <aside class="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
    <circle-spin class="mt-50" v-if="loading"></circle-spin>
     
      <nav v-else class="scroll sidebar-navigation">

        <div class="sidebar-profile">
            <img v-if="user_details.img_url == null" class="avatar avatar-xl" src="../../assets/img/avatar.jpg" alt="...">
            <img v-else class="avatar avatar-xl" :src="user_details.img_url" alt="...">
            <div class="profile-info">
                <h5>Welcome, {{user_details.name}}</h5>
            </div>
        </div>

        <ul class="menu menu-lg menu-bordery">
            <router-link tag="li" to="/parent/dashboard" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-bar-chart"></span>
                    <span class="title">
                        Dashboard
                    </span>
                </a>
            </router-link>
            <router-link tag="li" to="/parent/profile" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-user"></span>
                    <span class="title">
                        Profile
                    </span>
                </a>
            </router-link>
            <router-link tag="li" to="/parent/activity-lists" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-calendar"></span>
                    <span class="title">
                        Activity Lists
                    </span>
                </a>
            </router-link>
            <li class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-folder-open-o"></span>
                    <span class="title">
                        Reports
                    </span>
                    <span class="arrow"></span>
                </a>
                <ul class="menu-submenu">
                    <router-link tag="li" to="/parent/session-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Session Reports
                            </span>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/parent/monthly-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Monthly Reports
                            </span>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/parent/observation-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Observation Reports
                            </span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <router-link tag="li" to="/caregivers" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-users"></span>
                    <span class="title">
                        Caregivers
                    </span>
                </a>
            </router-link>
            <li class="menu-item">
                <a class="menu-link" href="#" @click="logOut">
                <span class="icon fa fa-sign-out"></span>
                <span class="title">Log Out</span>
                </a>
            </li>

        </ul>
      </nav>

    </aside>
    <!-- END Sidebar -->
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: true,
            user_details: {}
        }
    },
    methods: {
        logOut() {
            localStorage.clear()
            this.$notify({
                group: 'response',
                type: 'success',
                title: 'Logged Out',
                duration: 2500
                })
                setTimeout(() => {
                    this.$router.push('/')
                }, 3000)
        }
    },
    mounted() {
        this.loading = true
        axios.get('/parent')
        .then(res => {
            this.loading = false
            this.user_details = res.data.data.parent
        })
        .catch(err => {
            this.loading = false
            this.$notify({
                group: 'response',
                type: 'error',
                title: 'An error occurred. Try again',
                duration: 5000
                })
        })
    }
}
</script>