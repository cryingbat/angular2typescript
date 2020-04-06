import {Injectable} from '@angular/core'
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class guradeService implements CanActivate{
    constructor(private router: Router){}
    public canActivate() {
        let token = sessionStorage.getItem('token') ? true : false;
        if(!token){
            console.log('用户未登陆!');
        }else{
            this.router.navigate(['/index']);
        }
        return !token;
    }
}
