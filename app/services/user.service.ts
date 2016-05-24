import {Injectable}         from 'angular2/core';
import {Http, Response}     from 'angular2/http';
import {Observable}         from 'rxjs/Observable';
import {Logon}              from '../classes/logon/logon';
import {User}               from '../classes/user/user';

@Injectable()
export class UserService{
    constructor(private http: Http){
    }
    
    public logon(logon: Logon){
        this.http.get('http://localhost:7891/api/users').
        map(this.mapUsers).
        subscribe(
            data => console.log('data: ' + data),
            err => console.error(err),
            () => console.log('done')
        );
    }
    
    private mapUsers(resp: Response){
        var body = resp.json();
        return body.data;
    }
}
