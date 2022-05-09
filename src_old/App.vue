<template>
  <div id="app">
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
  {{ fetchMovies() }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions("movies", ['fetchMovies'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
