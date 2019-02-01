<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <Header name ="Mukesh Rawat"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../layout/header/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
