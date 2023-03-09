package com.firsteat.firsteat.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.stream.Collectors;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import com.firsteat.firsteat.configuration.AuthenticationResponse;
import com.firsteat.firsteat.configuration.LoginRequest;
import com.firsteat.firsteat.configuration.RegisterRequest;
import com.firsteat.firsteat.model.Role;
import com.firsteat.firsteat.model.User;

@Service
public class AuthenticationService {


    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authManager;

    private final JwtEncoder encoder;

    public AuthenticationService(UserService userService, PasswordEncoder passwordEncoder, AuthenticationManager authManager, JwtEncoder encoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authManager = authManager;
        this.encoder = encoder;
    }

    public AuthenticationResponse registerCustomer(RegisterRequest request) {
        User user = new User(
            request.getUsername(),
            passwordEncoder.encode(request.getPassword()),
            request.getEmail(),
            Role.ROLE_CUSTOMER
        );
        userService.addUser(user);
        String token = generateToken(user);
        return new AuthenticationResponse(token, user);
    }

    public AuthenticationResponse registerVendor(RegisterRequest request) {
        User user = new User(
            request.getUsername(),
            passwordEncoder.encode(request.getPassword()),
            request.getEmail(),
            Role.ROLE_VENDOR
        );
        userService.addUser(user);
        String token = generateToken(user);
        return new AuthenticationResponse(token, user);
    }

    public AuthenticationResponse login(LoginRequest request) {
        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        User user = userService.getUserWithUsername(request.getUsername());
        String token = generateToken(user);
        return new AuthenticationResponse(token, user);
    }

    public String generateToken(UserDetails userDetails) {
        Instant now = Instant.now();
        String scope = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.joining(" "));
        JwtClaimsSet claims = JwtClaimsSet.builder()
                    .issuer("self")
                    .issuedAt(now)
                    .expiresAt(now.plus(24, ChronoUnit.HOURS))
                    .subject(userDetails.getUsername())
                    .claim("scope", scope)
                    .build();
        return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }

}
