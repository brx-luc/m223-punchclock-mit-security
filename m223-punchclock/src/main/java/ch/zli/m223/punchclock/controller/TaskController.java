package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Task;
import ch.zli.m223.punchclock.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private TaskService taskService;

    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    //Die vordefinierten Tasks werden in einem JSON aufgelistat und angezeigt
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Task> getAllTasks() {
        return taskService.findAll();
    }

}
