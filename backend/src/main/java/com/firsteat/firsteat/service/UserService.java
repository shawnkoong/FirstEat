package com.firsteat.firsteat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.firsteat.firsteat.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
}
