import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
  
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;

  constructor(private taskService: TaskService) { }
  
  toggleBoolean() {
    this.taskService.changeFormStatusService();
  }

  ngOnInit() {
  }
}
