import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
   name: string = '';
   enthusiasm: number = 1;

  increment() {
    this.enthusiasm++;
  };

  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
}