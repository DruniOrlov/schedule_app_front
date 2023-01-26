import {NavDropdown} from "react-bootstrap";
import React from "react";


export function UserInfoDropdown() {

    return(
        <NavDropdown title="Имя Фамилия" id="nav-dropdown" style={{width: "200px", textAlign: "center"}}>
            <NavDropdown.Item href="#action/3.1" style={{width: "200px", textAlign: "center"}}>Редактор расписания</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" style={{width: "200px", textAlign: "center"}}>Контроль доступа</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" style={{width: "200px", textAlign: "center"}}>Мой профиль</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" style={{width: "200px", textAlign: "center"}}>
                Выйти
            </NavDropdown.Item>
        </NavDropdown>
    )

}