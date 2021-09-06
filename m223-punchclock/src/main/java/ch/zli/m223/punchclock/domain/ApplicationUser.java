package ch.zli.m223.punchclock.domain;

import javax.persistence.*;
import java.util.List;

@Entity
public class ApplicationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true, length = 64)
    private String username;
    @Column(nullable = false, length = 64)
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Entry> entries;

    @ManyToOne
    @JoinColumn(name="department_id", nullable = false)
    private Department department;

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}