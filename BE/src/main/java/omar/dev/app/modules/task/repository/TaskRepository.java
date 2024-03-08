package omar.dev.app.modules.task.repository;

import omar.dev.app.modules.task.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findOneById(Long id);
}
