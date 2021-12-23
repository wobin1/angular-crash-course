import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../Task'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	tasks: Task[] = [];
  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
  	this.TaskService.getTask().subscribe((tasks) => (this.tasks = tasks)); 
  }

  deleteTask(task: Task) {
  	this.TaskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t: any) => t.id !== task.id)));
  }

  toggleReminder(task: Task) {
  	task.reminder = !task.reminder;
  	this.TaskService.updateTaskReminder(task).subscribe()  }

    addTask(task: Task) {
      this.TaskService.addTask(task).subscribe((task) => (this.tasks.push(task)))
    }
}

 


