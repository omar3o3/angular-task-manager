import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  // color: string = ''

  constructor(public taskService: TaskService, private router: Router) { }

  hasRoute(route: string) {
    return this.router.url === route
  }

}
