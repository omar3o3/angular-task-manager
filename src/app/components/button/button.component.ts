import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
  
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()

  onClick = () => {
    // console.log(this.text)
    this.btnClick.emit()
  }
  // constructor() { }

  status!:boolean;

  constructor(private taskService: TaskService){}

  ngOnInit() {
    // this.data.currentStatus.subscribe(status => this.status = status)
    // this.taskService.currentFormStatus.subscribe(status => this.status = status)
    // this.taskService.changeFormStatusService.subscribe(status => this.status = status)
  }

  // changeStatus() {
  //   this.data.changeStatus("ON")
  // }
}
