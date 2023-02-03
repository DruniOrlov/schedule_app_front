import React, {Component, SetStateAction, useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";
import {WeekdayCard} from "./components/WeekdayCard";
import {dayData} from "./data";
import {Container, Dropdown, Row, Col} from "react-bootstrap";
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios, {AxiosResponse} from "axios";
import {IDay} from "./models";
import DropdownItem from "react-bootstrap/DropdownItem";
import Select from "react-select";

interface IOptions {
    value: string,
    label: string
    type: string
}

interface AppProps {

}

interface AppState {
    date: Date
    weekday: IDay
    selected: IOptions
    //selTeacher: string
    options: object[]
}


const iDay: IDay = {
    date: "",
    lessons: []
}


class App extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date(),
            weekday: iDay,
            selected: { value: "", label: "", type: "" },
            options: []
        };
        //this.fetchGroupsAndTeachers()
    }
    fetchLessons(date: Date) {
        if (this.state.selected.type === null) {
            this.setState({weekday: iDay})
        }
        const response = axios
            // @ts-ignore
            .get<IDay>(`${document.location.href}api/v1/schedule/?date=${date.toLocaleDateString()}&${this.state.selected.type}=${this.state.selected.value.id}`.replace("3000", "8000"))
            .then(response => {
                this.setState({weekday: response.data})
            })
            .catch(error => {
                this.setState({weekday: iDay})}

            )
    }

    appendArrayT(array: [], object: object) {
        let tempTeacher = {
            // @ts-ignore
            label: object.full_name,
            // @ts-ignore
            value: object.id,
        }
        // @ts-ignore
        array.push(tempTeacher)
    }

    fetchGroups() {
        let opt: [] = []
        let groupResponse = axios.get(`${document.location.href}api/v1/groupall/`.replace("3000", "8000"))
        groupResponse.then(response => {
            let data: [] = response.data
            data.forEach(function (item, i, array) {
                let temp = {
                    // @ts-ignore
                    label: item.name,
                    value: {
                        // @ts-ignore
                        id: item.id,
                        type: "group"
                    },
                    // @ts-ignore
                    type: "group"
                }
                // @ts-ignore
                opt.push(temp)
            })
            }
        )
        this.state.options.push({
            label: "Группы",
            options: opt
        })
    }

    fetchTeachers() {
        let opt: [] = []
        let teacherResponse = axios.get(`${document.location.href}api/v1/tutorall/`.replace("3000", "8000"))
        teacherResponse.then(response => {
                let data: [] = response.data
                data.forEach(function (item, i, array) {
                    let temp = {
                        // @ts-ignore
                        label: item.full_name,
                        // @ts-ignore
                        value: {
                            // @ts-ignore
                            id: item.id,
                            type: "teacher"
                        },
                        // @ts-ignore
                        type: "tutor"
                    }
                    // @ts-ignore
                    opt.push(temp)
                })
            }
        )
        this.state.options.push({
            label: "Преподаватели",
            options: opt
        })
    }



    setState<K extends keyof AppState>(state: ((prevState: Readonly<AppState>, props: Readonly<AppProps>) => (Pick<AppState, K> | AppState | null)) | Pick<AppState, K> | AppState | null, callback?: () => void) {
        super.setState(state, callback);
    }

    componentDidMount() {
        this.fetchTeachers()
        this.fetchGroups()
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any) {

    }


    render() {
        return (
        <Container>
            <Container style={{textAlign: "center"}}>


                <Row style={{marginTop: "20px"}}>
                    <Col>
                        <p style={{fontSize: "17px", fontWeight: "bold", textAlign: "center", verticalAlign: "middle"}}>Выберите дату: </p>
                    </Col>

                    <Col>
                        <DatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={this.state.date}
                    onSelect={(date: any) => {
                        let newDate = new Date(date)
                        this.setState({date: newDate})
                        this.fetchLessons(newDate)
                    }}
                     onChange={(date: any) => {
                         this.setState({date: new Date(date)})}
                     }/>
                    </Col>
                <Col>

                        <p style={{fontSize: "17px", fontWeight: "bold",  textAlign: "center", verticalAlign: "middle"}}>Выберете преподавателя или группу: </p>
                    </Col>
                    <Col>
                <Select options={this.state.options}
                onChange={option => {
                    // @ts-ignore
                    this.setState({selected: option})
                    setTimeout(() => this.fetchLessons(this.state.date), 100)
                }
                }
                isClearable={true}
                onFocus={() => {
                    this.setState({selected: {value: "", label: "", type: ""}})
                }
                }
                />
                </Col>
                </Row>

            </Container>
                { this.state.weekday != iDay &&
                    <WeekdayCard day={this.state.weekday}></WeekdayCard>
                }
        </Container>
    );
    }
}




export default App;