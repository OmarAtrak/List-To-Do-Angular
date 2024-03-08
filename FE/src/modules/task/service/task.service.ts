import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'src/config';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private API_URL = config.endPoint + 'task/';

  constructor(private http: HttpClient) { }

  save(task: Task) {
    if (!task.id)
      return this.http.post<Task>(`${this.API_URL}save`, task.toJson);
    return this.http.put<Task>(`${this.API_URL}update`, task.toJson);
  }

  getById(id: number) {
    return this.http.get<Task>(`${this.API_URL}get/${id}`);
  }

  getAll() {
    return this.http.get<Array<Task>>(`${this.API_URL}index`);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}delete/${id}`, { responseType: "text" });
  }

  changeStatus(task: Task) {
    return this.http.post<Task>(`${this.API_URL}changeStatus`, task.toJson);
  }
}
