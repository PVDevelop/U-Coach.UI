import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {UserFormComponent} from '../logon/user-form.component';
import {FbComponent} from '../facebook/fb.Component';

@Component({
    selector: 'app',
    templateUrl: './app/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/logon', component: UserFormComponent},
    {path: '/logon_fb/:code', component: FbComponent}
])
export class AppComponent{}