import { Component, OnInit , Input} from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
// export class TasksComponent implements OnInit{
export class TasksComponent {
  constructor(private taskService: TaskService){}
  
  tasks: Task[] = []

  deleteTask(task: Task) {
    // console.log("from task parent comp", task)
    this.taskService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addNewTask(task: Task){
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task))
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

}
  
