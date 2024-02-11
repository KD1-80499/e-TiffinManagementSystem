package com.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TiffinManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiffinManagementBackendApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

//	@Bean
//	public PasswordEncoder passwordencoder() {
//		PasswordEncoder encoder = new BCryptPasswordEncoder();
//		return encoder;
//	}

}
