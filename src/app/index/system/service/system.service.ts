import {Observable, of, forkJoin} from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, mergeMap, switchMap} from 'rxjs/operators'

export interface SystemInfo{
    status: string,
    message: string
}

@Injectable({
    providedIn: 'root'
})
export class SystemService {
    constructor(private http: HttpClient) {}
    
    public getSystemInfo (): Observable<SystemInfo> {
        return this.http.get<SystemInfo>('/goods/test',{withCredentials: true})
    } 

    public factory() {
        const source$ = this.getSystemInfo();
        const source$2 = of().pipe(map (()=> null));
        return of('').pipe(mergeMap(([source$, source$2])=> {
            return forkJoin((source, result)=> {
                return source;
            })
        }))
    }

}