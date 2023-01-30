import {IDay, ILesson} from "../models";
import {Card, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import {LessonCard} from "./LessonCard";
import {lessons} from "../data";
import React from "react";


export interface WeekdayProps {
    day: IDay
}

export function WeekdayCard(props: WeekdayProps) {
    return(

        <Card style={{
            margin: "5px",
            marginTop: "30px"
        }}>
            <Card.Title style={
                { textAlign: "center",
                marginTop: "20px"}
            }> {getDateForCard(props.day.date)} </Card.Title>
            <Card.Body>
                <Table>
                    <tbody>
                    {props.day.lessons.map(lesson => <LessonCard lesson={lesson}></LessonCard>)}
                    {props.day.lessons.length === 0 && <h5 style={{textAlign: "center"}}>Нет занятий</h5>}
                    </tbody>

                </Table>
            </Card.Body>
        </Card>
    )

    function getDateForCard(data: string) {
        let date = new Date(data)
        return(capitalizeFirstLetter(date.toLocaleDateString('ru-RU',{weekday: 'long'})) + "  |  " + date.toLocaleDateString())
    }



    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}