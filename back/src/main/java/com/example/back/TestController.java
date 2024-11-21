package com.example.back;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class TestController {

    @PostMapping("/data")
    public ResponseEntity<?> getData(@RequestBody Map<String,String> payload) {

        return ResponseEntity.ok().body(Map.of("data","Success","receivedData", payload.get("data")));
    }
}
