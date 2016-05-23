import {Component} from 'angular2/core'
import {UserFormComponent} from '../logon/user-form.component'

@Component({
    selector: 'app',
    template: '<user-form></user-form>',
    directives: [UserFormComponent]
})
export class AppComponent{}