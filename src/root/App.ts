import { Component, Vue } from "vue-property-decorator";

import Header from "../components/layout/header/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
