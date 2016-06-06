import {Injectable}         from '@angular/core';
import {Http, Response}     from '@angular/http';
import {Observable}         from 'rxjs/Observable';
import {Logon}              from '../classes/logon/logon';
import {User}               from '../classes/user/user';
import {Serializer}         from 'serializer.ts/Serializer';

@Injectable()
export class UserService{
    constructor(
        private http: Http,
        private serializer: Serializer){
    }
    
    public logon(logon: Logon){

        let json = JSON.stringify(logon);
        alert("Logon: " + json);

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
