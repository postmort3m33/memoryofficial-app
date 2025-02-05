package com.memory.memoryofficial.rest;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MemoryOfficialResource {

    // Hello World from Backend
    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello, World!";
    }

}
