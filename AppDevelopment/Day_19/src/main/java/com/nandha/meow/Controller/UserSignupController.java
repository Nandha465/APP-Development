package com.nandha.meow.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//import com.food.Entity.UserSignup;
import com.nandha.meow.Entity.UserSignupEntity;
//
//import com.food.Entity.UserSignup;
//import com.food.Repository.UserSignupRepository;
import com.nandha.meow.Repository.UserRepository;
import com.nandha.meow.Service.UserSignupService;
//import com.nandha.meow.Service.UserService;


@RestController
@CrossOrigin
@RequestMapping("/usersignup")
public class UserSignupController {

    private final UserSignupService userSignupService;

    @Autowired
    public UserSignupController(UserSignupService userSignupService) {
        this.userSignupService = userSignupService;
    }

    @PostMapping("/post")
    public UserSignupEntity postUser(@RequestBody UserSignupEntity userSignup) {
        return userSignupService.createUserSignup(userSignup);
    }

    @GetMapping("/get")
    public Iterable<UserSignupEntity> getUsers() {
        return userSignupService.getAllUserSignups();
    }
}
