package com.firsteat.firsteat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.firsteat.firsteat.configuration.AuthenticationResponse;
import com.firsteat.firsteat.configuration.LoginRequest;
import com.firsteat.firsteat.configuration.RegisterRequest;
import com.firsteat.firsteat.model.Role;
import com.firsteat.firsteat.model.User;
import com.firsteat.firsteat.util.JwtUtil;

@Service
public class AuthenticationService {
    
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authManager;

    public AuthenticationResponse registerCustomer(RegisterRequest request) {
        User user = new User(
            request.getUsername(),
            passwordEncoder.encode(request.getPassword()),
            request.getEmail(),
            Role.CUSTOMER
        );
        userService.addUser(user);
        String token = jwtUtil.generateToken(user);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse registerVendor(RegisterRequest request) {
        User user = new User(
            request.getUsername(),
            passwordEncoder.encode(request.getPassword()),
            request.getEmail(),
            Role.VENDOR
        );
        userService.addUser(user);
        String token = jwtUtil.generateToken(user);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse login(LoginRequest request) {
        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        User user = userService.getUserWithUsername(request.getUsername());
        String token = jwtUtil.generateToken(user);
        return new AuthenticationResponse(token);
    }
}
