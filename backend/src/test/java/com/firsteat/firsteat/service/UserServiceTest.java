package com.firsteat.firsteat.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.firsteat.firsteat.model.User;
import com.firsteat.firsteat.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetUser() {
        Long id = 1L;
        User user = new User(id, "john", "password", "john@example.com");
        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        User result = userService.getUser(id);

        assertEquals(user, result);
        verify(userRepository).findById(id);
    }

    @Test
    void testGetAllUsers() {
        // Arrange
        List<User> users = List.of(new User(), new User());
        when(userRepository.findAll()).thenReturn(users);

        // Act
        List<User> result = userService.getAllUsers();

        // Assert
        assertNotNull(result);
        assertEquals(users.size(), result.size());
    }
}