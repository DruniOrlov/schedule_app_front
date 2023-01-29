import React from "react";
import {Col, Container, ListGroupItem, Row, Table} from "react-bootstrap";
import {IDay, ILesson} from "../models";

interface LessonProps {
    lesson: ILesson
}

export function LessonCard(props: LessonProps) {


    return(
                <tr>
                    <td><small style={{fontSize: "12px"}}>Пара №{props.lesson.number}</small> <br/> <b>{getTime(props.lesson.begin)}</b>  -  <b>{getTime(props.lesson.end)}</b></td>
                    <td><small style={{fontSize: "12px"}}>Предмет:</small> <b>{props.lesson.subject}</b> <br/> <small style={{fontSize: "12px"}}>Преподаватель:</small> <b>{props.lesson.tutor.full_name}</b> <br/> <small style={{fontSize: "12px"}}>Группа:</small> <b>{props.lesson.group}</b></td>
                    <td width={"10px"}><small style={{fontSize: "12px"}}>Аудитория:</small> <b>{props.lesson.auditorium}</b></td>
                </tr>
    )

    function getTime(time: string) {
        let date = new Date(time)
        return `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes() }`
    }
    
}