<template>
    <aside class="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
      
      <nav class="sidebar-navigation">

        <div class="sidebar-profile">
            <img class="avatar avatar-xl" src="../../assets/img/avatar.jpg" alt="...">
            <div class="profile-info">
                <h5>Welcome, Maryam Amiri</h5>
            </div>
        </div>

        <ul class="menu menu-lg menu-bordery">
            <router-link tag="li" to="/therapist/dashboard" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-bar-chart"></span>
                    <span class="title">
                        Dashboard
                    </span>
                </a>
            </router-link>
            <router-link tag="li" to="/therapist/profile" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-user"></span>
                    <span class="title">
                        Profile
                    </span>
                </a>
            </router-link>
            <router-link tag="li" to="/therapist/patients" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-users"></span>
                    <span class="title">
                        Patients
                    </span>
                </a>
            </router-link>
            <router-link tag="li" to="/therapist/planners" class="menu-item">
                <a class="menu-link" href="#">
                    <span class="icon fa fa-calendar"></span>
                    <span class="title">
                        Planners
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
                    <router-link tag="li" to="/therapist/session-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Session Reports
                            </span>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/therapist/monthly-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Monthly Reports
                            </span>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/therapist/progress-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Progress Reports
                            </span>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/therapist/observation-reports" class="menu-item">
                        <a class="menu-link" href="#">
                            <span class="dot"></span>
                            <span class="title">
                                Observation Reports
                            </span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="menu-item">
                <a class="menu-link" href="#">
                <span class="icon fa fa-sign-out"></span>
                <span class="title">Log Out</span>
                </a>
            </li>

        </ul>
      </nav>

    </aside>
    <!-- END Sidebar -->
</template>