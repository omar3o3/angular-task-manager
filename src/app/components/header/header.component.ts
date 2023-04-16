import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';

  constructor(public taskService: TaskService) { }

}
