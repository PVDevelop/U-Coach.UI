import {Injectable}         from 'angular2/core';
import {Http, Response}     from 'angular2/http';
import {Observable}         from 'rxjs/Observable';
import {User}               from '../classes/user';

@Injectable()
export class UserService{
    constructor(private http: Http){
    }
    
    logon(user: User){
        
        let tempValues2 = 
            this.http.get("http://localhost:10406/api/values").
            map(res=>res.json() || { });
            
            
        alert(tempValues2);
        
        // let users = 
        //     this.http.get('http://localhost:7891/api/users', null).
        //     map(res=>res);
            
        // alert(users);
    }
}
