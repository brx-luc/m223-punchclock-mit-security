package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Department;
import ch.zli.m223.punchclock.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartmentController {
    private DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService){
        this.departmentService = departmentService;
    }


    //Die vordefinierten Departments werden in einem JSON aufgelistet und angezeigt
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Department> getAllDepartments() {
        return departmentService.findAll();
    }
}
