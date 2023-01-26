interface ITutor {
    full_name: string
}

export interface ILesson {
    id: number
    number: number
    begin: string
    end: string
    subject: string
    tutor: ITutor
    group: string
    auditorium: string
}