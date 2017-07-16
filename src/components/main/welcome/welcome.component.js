import welcome from './welcome.html';
import styles from './welcome.scss';

export default {
  templateUrl: welcome,
  controller() {
      this.$onInit = () => {
          this.list = [
              {id: 1, label: 'one'},
              {id: 2, label: 'two'},
              {id: 3, label: 'three'}
          ];
      }
  }
};
