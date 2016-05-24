import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Logon} from '../classes/logon/logon';
import {UserService} from '../services/user.service';

@Component({
    selector: 'user-form',
    templateUrl: 'app/logon/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent
{
    logon = new Logon("some login", "some password");
    
    constructor(private userService: UserService){
    }
    
    onSubmit(){
        this.userService.logon(this.logon);
    }
}