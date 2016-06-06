import {Component} from '@angular/core';
import {NgForm} from '@angular/common';
import {Logon} from '../classes/logon/logon';
import {UserService} from '../services/user.service';

@Component({
    selector: 'user-form',
    templateUrl: './src/logon/user-form.component.html',
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