package omar.dev.app.modules.task;

import omar.dev.app.modules.task.entity.Task;
import omar.dev.app.modules.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("task/")
public class TaskResource {
    private TaskService taskService;

    @Autowired
    public TaskResource(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("save")
    public Task save(@RequestBody Task task) {
        return this.taskService.save(task);
    }

    @PutMapping("update")
    public Task update(@RequestBody Task task) throws Exception {
        return this.taskService.update(task);
    }

    @GetMapping("get/{id}")
    public Task getById(@PathVariable Long id) throws Exception {
        return this.taskService.getById(id);
    }

    @RequestMapping(value = "index", method = RequestMethod.GET, produces = "application/json")
    public List<Task> index() {
        return this.taskService.getAll();
    }

    @DeleteMapping("delete/{id}")
    public boolean delete(@PathVariable("id") Long id) throws Exception {
        return this.taskService.delete(id);
    }

    @PostMapping("changeStatus")
    public Task changeStatus(@RequestBody Task task) throws Exception {
        System.out.println(task.);
        return this.taskService.changeStatus(task);
    }

}
