import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        return this.http.get<SystemInfo>('/users/users')
    } 
}