package omar.dev.app.modules.task.service;

import omar.dev.app.modules.task.entity.Task;
import omar.dev.app.modules.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

    public Task update(Task task) throws Exception {
        Task requestedTask =  this.getById(task.getId());

        if(requestedTask == null) {
            throw new Exception("Error: Task not Updated");
        }
        Task taskUpdated = this.taskRepository.save(requestedTask);
        return taskUpdated;
    }

    public Task getById(Long id) throws Exception {
        Task requestedTask = this.taskRepository.findOneById(id);

        if(requestedTask == null) {
            throw new Exception("Error: Task not Found");
        }
        return requestedTask;
    }

    public List<Task> getAll() {
        return this.taskRepository.findAll();
    }

    public boolean delete(Long id) throws Exception {
        Task requestedTask = this.taskRepository.findOneById(id);
        requestedTask.setActive(false);
        Task removedTask = this.taskRepository.save(requestedTask);
        if(removedTask.isActive()) {
            throw new Exception("Error: Task not Updated");
        }
        return true;
    }

    public Task changeStatus(Task task) throws Exception {
        task.setDone(!task.isDone());
        return this.update(task);
    }

}
