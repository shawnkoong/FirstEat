package com.firsteat.firsteat.configuration;

import com.firsteat.firsteat.model.User;

public class AuthenticationResponse {
    
    private String token;
    private User user;

    public AuthenticationResponse() {
    }

    public AuthenticationResponse(String token, User user) {
        this.token = token;
        user.setPassword("");
        this.user = user;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
