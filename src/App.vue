<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr/>
                <Header/>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    export default {
      components: {Header}
    }
</script>

<style>
</style>
