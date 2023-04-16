import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from "../../Task"
import { TaskService } from "../../services/task.service"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  constructor(private taskService: TaskService){}

  text!: string;
  day!: string;
  reminder: boolean = false;
  showWarning: boolean = false;
  // console.log(text)
  // FIRST ATTEMPT
  // not sure
  // output for sending new task to parent task.ts to update ui
  // @Output() updateTaskEmitter = new EventEmitter()
  // @Output() updateTaskEmitter = new EventEmitter<Task>()
  // @Output() updateTaskEmitter: EventEmitter<Task> = new EventEmitter()

  // SECOND ATTEMPT
  @Output() updateTaskEmitter: EventEmitter<Task> = new EventEmitter()
  // @Output() updateTaskEmitter = new EventEmitter<Task>();

  onSubmit(myForm: NgForm) {
    if (!this.text || !this.day) {
      console.log('NOT from filled')
      this.showWarning = true
    }
    if(this.text && this.day) {
      // console.log('from filled')
      this.showWarning = false
      // const newTask = {
      //   text: this.text,
      //   day: this.day,
      //   reminder: this.reminder
      // }
      const task = {
        text: myForm.value.text,
        day: myForm.value.day,
        reminder: myForm.value.reminder
      }
      
      this.updateTaskEmitter.emit(task)
      console.log("from child task" , task)

    }
  }

  ngOnInit(): void {
      
  }

}
