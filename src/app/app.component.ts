import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {AccountComponent} from '../account/account.component';
import {UserFormComponent} from '../logon/user-form.component';

@Component({
    selector: 'app',
    templateUrl: './src/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/logon', component: UserFormComponent},
    {path: '/account', component: AccountComponent}
])
export class AppComponent{}