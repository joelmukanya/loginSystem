<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/fruits">Fruits</router-link> |
                    </li>
                </ul>
                <div v-if="!user">
                    <router-link to="/">Login</router-link>
                </div>
                <div v-else>
                    Welcome {{user.firstname}}
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

<style>

</style>