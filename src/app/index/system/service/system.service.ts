import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SystemInfo{
    name: string,
    size: string
}

@Injectable({
    providedIn: 'root'
})
export class SystemService {
    constructor(private http: HttpClient) {}
    
    public getSystemInfo (): Observable<SystemInfo[]> {
        return this.http.get<SystemInfo[]>('http://www.baidu.com')
    } 
}