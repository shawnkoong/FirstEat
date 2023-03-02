package com.firsteat.firsteat.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.firsteat.firsteat.configuration.AuthenticationResponse;
import com.firsteat.firsteat.configuration.LoginRequest;
import com.firsteat.firsteat.configuration.RegisterRequest;
import com.firsteat.firsteat.service.AuthenticationService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthenticationController {
    
    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @PostMapping("/register-customer")
    public ResponseEntity<AuthenticationResponse> registerCustomer(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.registerCustomer(request));
    }

    @PostMapping("/register-vendor")
    public ResponseEntity<AuthenticationResponse> registerVendor(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.registerVendor(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
