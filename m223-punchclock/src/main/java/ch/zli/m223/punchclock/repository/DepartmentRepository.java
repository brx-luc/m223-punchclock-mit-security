package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
