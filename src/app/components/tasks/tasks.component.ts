import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  constructor(private taskService: TaskService){}

  tasks: Task[] = []

  deleteTask(task: Task) {
    console.log("from task parent comp", task)
    this.taskService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

}
  
