import React from 'react';
import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router";
import {Home} from "./components/Home";
import {WeekdayCard} from "./components/WeekdayCard";

function App() {
  return (
      <Container>
              <WeekdayCard></WeekdayCard>
              <WeekdayCard></WeekdayCard>
              <WeekdayCard></WeekdayCard>
              <WeekdayCard></WeekdayCard>
      </Container>
  );
}

function RenderLessons() {

}

export default App;
