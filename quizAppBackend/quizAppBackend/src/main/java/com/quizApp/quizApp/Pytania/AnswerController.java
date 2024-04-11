package com.quizApp.quizApp.Pytania;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/Answers")
public class AnswerController {
    private final AnswerService answerService;
    @Autowired
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    public List<Answer> getAnswers() {return answerService.getAllAnswers();}

    @PostMapping
    public void addAnswer(@RequestBody Answer answer) {answerService.addAnswer(answer);}

    @DeleteMapping(path = "{answerId}")
    public void deleteAnswer(@PathVariable int answerId) {answerService.deleteAnswer(answerId);}
}
