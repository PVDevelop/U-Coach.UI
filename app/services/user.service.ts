import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Serializer} from 'serializer.ts/Serializer';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {Logon} from '../classes/logon/logon';
import {User} from '../classes/user/user';

@Injectable()
export class UserService{
    constructor(
        private http: Http,
        private serializer: Serializer,
        private router: Router){
    }
    
    public logon(logon: Logon){
        let json = JSON.stringify(logon);
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var uri =
            "http://localhost:51668/api/ucoach/logon"; 
        
        this.
            http.
            put(uri, json, { headers: headers }).
            subscribe(
                null, 
                err => console.error("Error on ucoach logon: " + err),
                () => console.log("Ucoach logon succeeded"));
    }

    public logonFb()
    {
        var uri = 
            "http://localhost:51668/api/facebook/authorization_uri?" +
            "redirect_uri=" + "http://localhost:7788/logon_fb";

        this.
            http.
            get(uri).
            map(res=>res.json()).
            subscribe(
                next => this.redirectToFb(next),
                err => console.error("Error on FB logon: " + err),
                () => console.log("FB logon succeeded"));
    }

    private redirectToFb(response: Object)
    {
        window.location.href = response["uri"];
    }
}
