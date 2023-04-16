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
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch<Task>(url, task, httpOptions)
  }

  // FIRST ATTEMPT
  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task)
  }

  private formStatusSource = new BehaviorSubject(false); // set default status
  currentFormStatus = this.formStatusSource.asObservable();
  // currentFormStatus: boolean = false;

  changeFormStatusService(status: boolean) {
    // return this.formStatusSource = !this.currentFormStatus
    this.formStatusSource.next(status)
  }



}