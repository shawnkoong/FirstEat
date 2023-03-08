package com.firsteat.firsteat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.firsteat.firsteat.configuration.RsaKeyProperties;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class FirsteatApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirsteatApplication.class, args);
	}

}
