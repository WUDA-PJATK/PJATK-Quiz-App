package com.quizApp.quizApp.Pytania;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerReopsitory;

    @Autowired
    public AnswerService(AnswerRepository answerReopsitory) {
        this.answerReopsitory = answerReopsitory;
    }

    public List<Answer> getAllAnswers() {return answerReopsitory.findAll();}

    public void addAnswer(Answer answer) {answerReopsitory.save(answer);}

    public void deleteAnswer(long answerId) {
        boolean exists = answerReopsitory.existsById(answerId);
        if(!exists) {
            throw  new IllegalArgumentException("Answer not found");
        }
        answerReopsitory.deleteById(answerId);
    }
}
