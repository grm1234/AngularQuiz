import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './model.questions';

@Injectable({
    providedIn: 'root'
})
export class Quiz{
    constructor(private httpClient:HttpClient){} //DI for HttpClient
    loadData():Observable<Questions[]>{
        return this.httpClient.get<Questions[]>("http://localhost:3000/quizquestions");
    }
}