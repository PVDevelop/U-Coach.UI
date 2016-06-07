import {Injectable}         from '@angular/core';
import {Http, Response, Headers}     from '@angular/http';
import {Observable}         from 'rxjs/Observable';
import {Serializer}         from 'serializer.ts/Serializer';

import {Logon}              from '../classes/logon/logon';
import {User}               from '../classes/user/user';

@Injectable()
export class UserService{
    constructor(
        private http: Http,
        private serializer: Serializer){
    }
    
    public logon(logon: Logon){

        let json = JSON.stringify(logon);
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http.
        post("http://localhost:7788/api/auth", json, { headers: headers }).
        subscribe(
            null, 
            err => console.error("Error on post auth: " + err),
            () => console.log("Auth complete"));
            
        // this.http.post('http://localhost:7788/api/auth').
        // map(this.mapUsers).
        // subscribe(
        //     data => console.log('data: ' + data),
        //     err => console.error(err),
        //     () => console.log('done')
        // );
    }
    
    private mapUsers(resp: Response){
        var body = resp.json();
        return body.data;
    }
}
