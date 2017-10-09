package com.felix.love;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.WebApplicationInitializer;

@SpringBootApplication
public class LoveApplication {
//	public class LoveApplication extends SpringBootServletInitializer implements WebApplicationInitializer {


	public static void main(String[] args) {
		SpringApplication.run(LoveApplication.class, args);
	}

	// for export war
//	@Override
//	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//		return application.sources(LoveApplication.class);
//	}
//
//	public static void main(String[] args) {
//		SpringApplication.run(LoveApplication.class, args);
//	}

}
