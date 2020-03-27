import {Injectable} from '@angular/core'
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class guradeService implements CanActivate{
    constructor(private router: Router){}
    public canActivate() {
        if(!sessionStorage.getItem('token')){
            this.router.navigateByUrl('/login')
            return false;
        }
        return true;
    }
}
