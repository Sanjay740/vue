import { Component, Vue } from 'vue-property-decorator';
import WithRender from './actual.html';

@WithRender
@Component({})
export default class ActualComponent extends Vue {
    // message: string = 'Hello!'
    // onClick (): void {
        
    //   }
}
