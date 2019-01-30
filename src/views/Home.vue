<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header name="Mukesh Rawat"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/layout/header/Header.vue";

@Component({
  components: {
    HelloWorld,
    Header
  }
})
export default class Home extends Vue {}
</script>
