import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  // showForm: boolean = false;

  // toggleAddTask = () => {
  //   console.log('toggle add task' , this.showForm)
  //   this.showForm = !this.showForm
  // }
}
