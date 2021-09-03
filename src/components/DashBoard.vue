<template>
    <div>
        <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div class="nano">
                    <div class="nano-content">
                        <div class="logo"><a href=""><!-- <img src="assets/images/logo.png" alt="" /> --><span>Dashboard</span></a></div>
                        <ul>
                            <!-- <li class="label">Actions</li> -->
                            <li><a href=""><i class=""></i> Add Skills </a></li>
                            <li><a href=""><i class=""></i> Update Skills</a></li>
                            <li><a href=""><i class=""></i> Pending Approvals</a></li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="float-left">
                            <div class="hamburger sidebar-toggle">
                                <span class="line"></span>
                                <span class="line"></span>
                                <span class="line"></span>
                            </div>
                        </div>
                        <div class="float-right">
                            <div class="dropdown dib">
                                <div class="header-icon" data-toggle="dropdown">
                                    <i class="ti-bell"></i>
                                    <div class="drop-down dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-content-heading">
                                            <span class="text-left">Recent Notifications</span>
                                        </div>
                                        <div class="dropdown-content-body">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="dropdown dib">
                                <div class="header-icon" data-toggle="dropdown">
                                    <span class="user-avatar">User
                                        <i class="ti-angle-down f-s-10"></i>
                                    </span>
                                    <div class="drop-down dropdown-profile dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-content-heading">
                                        </div>
                                        <div class="dropdown-content-body">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i class="ti-user"></i>
                                                        <span>Profile</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <i class="ti-settings"></i>
                                                        <span>Settings</span>
                                                    </a>
                                                </li>

                                               
                                                <li>
                                                    <a href="#">
                                                        <i class="ti-power-off"></i>
                                                        <span>Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrap">
            <div class="main">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 p-r-0 title-margin-right">
                            <div class="page-header">
                                <div class="page-title">
                                    <h1>Welcome!</h1>
                                </div>
                                <div class="topnav">
                                    <input type="text" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="main-content">
                     
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../src/assets/css/lib/menubar/sidebar.css";
@import "../src/assets/css/lib/font-awesome.min.css";
@import "../src/assets/css/lib/themify-icons.css";
@import "../src/assets/css/lib/bootstrap.min.css";
@import "../src/assets/css/lib/helper.css";
@import "../src/assets/css/style.css"; 

.topnav {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
}

</style>