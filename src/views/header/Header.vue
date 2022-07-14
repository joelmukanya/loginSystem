<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div v-if="!user" class="d-flex flex-wrap w-100">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="h4" to="/fruits">Fruits</router-link> |
                        </li>
                    </ul>
                    <router-link class="h4" to="/">Login</router-link>
                </div>
                <div v-else class="d-flex flex-wrap w-100">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="h4" to="/fruits">Fruits</router-link> |
                        </li>
                        <li class="nav-item">
                            <router-link class="h4" to="/admin">Admin</router-link> |
                        </li>
                    </ul>
                    <div>
                        <span class="lead me-3">Welcome {{user.firstname}} {{user.surname}}</span>
                        <img id="login-profile" class="img-fluid" :src="user.profile" :alt="user.firstname"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

    computed: {
        user() {
            return this.$store.state.user
        }
    }

}
</script>

<style scoped>
    #login-profile{
        width: 5vw;
        border-radius: 5px;
        object-fit: cover;
        box-shadow: 1vw 2vw 2vw rgba(61, 109, 98, 0.7);
    }
</style>