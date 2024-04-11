package com.quiz.quizApp.Pytania;


import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;

@Data
@Entity
@ToString
@Table
public class Questions {
    @Id
    @SequenceGenerator(
            name = "pytania_sequence",
            sequenceName = "pytania_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String title;
    private String description;
    @OneToMany
    private ArrayList<Answer> answers;

    public Questions(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.answers = new ArrayList<Answer>(4);
    }

    public Questions() {

    }
}
