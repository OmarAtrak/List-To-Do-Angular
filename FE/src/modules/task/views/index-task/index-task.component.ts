import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/task.service';
import { frenchDate } from '../../application/app.global';

@Component({
  selector: 'app-index-task',
  templateUrl: './index-task.component.html',
  styleUrls: ['./index-task.component.css']
})

export class IndexTaskComponent implements OnInit {
  public tasks:Array<Task> = [];
  frenchDate = frenchDate;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = [];
    this.taskService.getAll().subscribe(response => {
      response.forEach(taskData => {
        const task = new Task();
        task.fromJson(taskData);
        this.tasks.push(task);
      });
    });
  }

  changeStatus(task: Task) {
    this.taskService.changeStatus(task)
    .subscribe(response => {
      task.fromJson(response);
      // this.getTasks();
    });
  }

  refreshTasks(isTaskSaved: boolean) {
    if(isTaskSaved) {
      this.getTasks();
    }
  }

}
