import {Injectable}         from '@angular/core';
import {Http, Response, Headers}     from '@angular/http';
import {Observable}         from 'rxjs/Observable';
import {Serializer}         from 'serializer.ts/Serializer';
import {CookieService}      from 'angular2-cookie/core';

import {Logon}              from '../classes/logon/logon';
import {User}               from '../classes/user/user';

@Injectable()
export class UserService{
    constructor(
        private http: Http,
        private serializer: Serializer,
        private cookieService: CookieService){
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
}
