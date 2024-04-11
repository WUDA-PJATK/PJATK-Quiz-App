package com.quizApp.quizApp.Pytania;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/Questions")
public class QuestionsController {

    private final QuestionsService questionsService;
    @Autowired
    public QuestionsController(QuestionsService questionsService){
        this.questionsService = questionsService;
    }

    @GetMapping
    public List<Questions> GetQuestions(){
        return questionsService.GetQuestions();
    }

    @PostMapping
    public void registerNewQuestion(@RequestBody Questions questions){
        questionsService.addNewQuestions(questions);
    }

    @DeleteMapping(path = "{questionId}")
    public void deleteQuestion(@PathVariable("questionId") Long questionId) throws Exception {
        questionsService.deleteQuestions(questionId);
    }

}
