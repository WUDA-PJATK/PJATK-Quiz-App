package com.quizApp.quizApp.Pytania;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Entity
public class Answer {
    @Id
    private Long id;
    private String tresc;
    private boolean czyPrawda;

    public Answer() {

    }
}
