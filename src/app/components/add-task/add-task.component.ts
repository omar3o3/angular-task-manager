import { Component, OnInit } from '@angular/core';

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

  onSubmit() {
    if (!this.text && !this.day) {
      // console.log('you need to provide a title and day')
      console.log('NOT from filled')
      this.showWarning = true
    }
    if(this.text && this.day) {
      // console.log(this.text, this.day, this.reminder)
      console.log('from filled')
      this.showWarning = false
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }

  ngOnInit(): void {
      
  }

}
