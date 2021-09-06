package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Department;
import ch.zli.m223.punchclock.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    //findAll listet alle Departments auf und gibt sie als JSON aus
    public List<Department> findAll() {
        return departmentRepository.findAll();
    }

}
