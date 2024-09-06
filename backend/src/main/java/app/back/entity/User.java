package app.back.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    public Integer id;
    
    @Column(name="username",length=200)
    public String username;
    
    @Column(name="fullname",length=200)
    public String fullname;
    
    @Column(name="email",length=200)
    public String email;
    
    @Column(name="roles",length=200)
    public String roles;
    
    @Column(name="password",length=300)
    public String password;
    
    @Column(name="createdAt",length=200)
    public String createdAt;
    
    public Integer getId() {
        return id;
    }
    public User setId(Integer id) {
        this.id = id;
        return this;
    }
    public String getUsername() {
        return username;
    }
    public User setUsername(String username) {
        this.username = username;
        return this;
    }
    public String getEmail() {
        return email;
    }
    public User setEmail(String email) {
        this.email = email;
        return this;
    }
    public String getRoles() {
        return roles;
    }
    public User setRoles(String roles) {
        this.roles = roles;
        return this;
    }
    public String getPassword() {
        return password;
    }
    public User setPassword(String password) {
        this.password = password;
        return this;
    }
    public String getCreatedAt() {
        return createdAt;
    }
    public User setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    public String getFullname() {
        return fullname;
    }
    public User setFullname(String fullname) {
        this.fullname = fullname;
        return this;
    }

}
