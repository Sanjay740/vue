import { Component, Vue } from 'vue-property-decorator';
import WithRender from './hello-world.html';
import { Category } from '../../shared/interface'
@WithRender
@Component({
    // props: ['category']
})
export default class HelloWorld extends Vue {
    public category: Category = new Category();

    handleSubmit() {
        console.log(this.category)
    }
}