import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})

export class SaveTaskComponent implements OnInit {
  @Input()
  currentTask: Task = new Task();
  @Output()
  isTaskSaved = new EventEmitter<boolean>();
  taskForm: FormGroup;

  constructor(private taskService: TaskService, private router: Router, private formBuild: FormBuilder) {
    this.taskForm = this.formBuild.group({
      date: [new Date().toISOString().split('T')[0], Validators.required],
      description: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  saveTask() {
    this.currentTask.date = this.taskForm.value.date;
    this.currentTask.description = this.taskForm.value.description;
    if(!this.currentTask.id) {
      this.currentTask.isDone = false;
      this.currentTask.active = true;
    }
    this.taskService.save(this.currentTask).subscribe(response => {
      document.getElementById('btn-clonse')?.click();
      this.isTaskSaved.emit(true);
    });
  }

}
