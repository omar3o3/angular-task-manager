import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  text!: string;
  day!: string;
  reminder: boolean = false;
  showWarning: boolean = false;
  // console.log(text)

  onSubmit(myForm: NgForm) {
    if (!this.text || !this.day) {
      console.log('NOT from filled')
      this.showWarning = true
    }
    if(this.text && this.day) {
      console.log('from filled')
      this.showWarning = false
      // const newTask = {
      //   text: this.text,
      //   day: this.day,
      //   reminder: this.reminder
      // }
      const newTask = {
        text: myForm.value.text,
        day: myForm.value.day,
        reminder: myForm.value.reminder
      }
      myForm.resetForm();
    }
  }

  ngOnInit(): void {
      
  }

}
