import {ILesson} from "../models";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {LessonCard} from "./LessonCard";
import {lessons} from "../data";


// export interface WeekdayProps {
//     date: {
//         date: string
//         weekday: string
//     }
//     lessons: ILesson[]
// }

export function WeekdayCard() {
    return(

        <Card style={{
            margin: "30px"
        }}>
            <Card.Title style={
                { textAlign: "center",
                marginTop: "20px"}
            }> Weekday | 20.20.2020 </Card.Title>
            <Card.Body>
                <ListGroup>
                    <LessonCard lesson={lessons}/>
                </ListGroup>
            </Card.Body>
        </Card>

        // <div className="border rounded p-3 w-25">
        //     fdsafsdfasdfasdfa
        // </div>
    )
}