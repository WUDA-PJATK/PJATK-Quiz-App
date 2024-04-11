package com.quizApp.quizApp.Pytania;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionsService {

    private final QuestionsRepository questionsRepository;

    @Autowired
    public QuestionsService(QuestionsRepository questionsRepository){
        this.questionsRepository = questionsRepository;
    }

    public List<Questions> GetQuestions(){
        return questionsRepository.findAll();
    }

    public void addNewQuestions(Questions questions){
        questionsRepository.save(questions);
    }

    public void deleteQuestions(long questionsId) throws Exception {
        boolean exists = questionsRepository.existsById(questionsId);
        if(!exists){
            throw new Exception("err");
        }
        questionsRepository.deleteById(questionsId);
    }



}
