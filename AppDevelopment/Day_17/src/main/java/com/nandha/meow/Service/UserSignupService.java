package com.nandha.meow.Service;



import com.nandha.meow.Entity.UserSignupEntity;
import com.nandha.meow.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSignupService {

    private final UserRepository userRepository;

    @Autowired
    public UserSignupService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserSignupEntity createUserSignup(UserSignupEntity userSignup) {
        return userRepository.save(userSignup);
    }

    public Iterable<UserSignupEntity> getAllUserSignups() {
        return userRepository.findAll();
    }
}