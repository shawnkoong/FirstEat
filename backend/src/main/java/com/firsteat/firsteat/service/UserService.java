package com.firsteat.firsteat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.firsteat.firsteat.model.User;
import com.firsteat.firsteat.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public User getUserWithUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new EntityNotFoundException());
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
