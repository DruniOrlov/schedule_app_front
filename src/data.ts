import {IDay, ILesson} from "./models";

export const lessons: ILesson = {
    id: 1,
    number: 1,
    begin: "2023-01-27T20:46:19+03:00",
    end: "2023-01-27T22:46:21+03:00",
    subject: "МДК",
    tutor: {
        full_name: "Иван Иванов Иванович"
    },
    group: "тнг80",
    auditorium: "21-4"
}

export const dayData: IDay = {
    date: "2023-01-27T00:00:00",
    lessons: [
        {
            id: 1,
            number: 1,
            begin: "2023-01-27T20:46:19+03:00",
            end: "2023-01-27T22:46:21+03:00",
            subject: "МДК",
            tutor: {
                full_name: "Иван Иванов Иванович"
            },
            group: "тнг80",
            auditorium: "21-4"
        }
    ]
}