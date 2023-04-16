import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
  
export class TaskService {
  private _apiUrl = "http://localhost:5000/tasks"
  private _formBooleanStatus = false;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this._apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this._apiUrl}/${task.id}`;
    return this.http.patch<Task>(url, task, httpOptions)
  }

  // FIRST ATTEMPT
  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this._apiUrl, task)
  }

  changeFormStatusService() {
    this._formBooleanStatus = !this._formBooleanStatus;
    // console.log(this._formBooleanStatus)
  }

  get myBoolean() {
    return this._formBooleanStatus;
  }


}