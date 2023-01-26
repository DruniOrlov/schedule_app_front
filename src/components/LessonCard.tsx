import React from "react";
import {Col, Container, ListGroupItem, Row} from "react-bootstrap";
import {ILesson} from "../models";

interface LessonProps {
    lesson: ILesson
}

export function LessonCard(props: LessonProps) {


    return(
        <ListGroupItem>
            <Row>
                <Col> Пара #{props.lesson.number} <br/> {getTime(props.lesson.begin)} <br/> {getTime(props.lesson.end)} </Col>
                <Col> Предмет: {props.lesson.subject} <br/> Преподаватель: {props.lesson.tutor.full_name} <br/> Аудитория {props.lesson.auditorium} </Col>
                <Col> Группа: {props.lesson.group} </Col>
            </Row>
        </ListGroupItem>
    )

    function getTime(time: string) {
        let date = new Date(time)
        return `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes() }`
    }
    
}