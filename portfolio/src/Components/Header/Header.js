import React from 'react';
import classes from "./Header.module.css"

let Header = () =>{
  return (
    <div className={classes.header}>
        Header
        <nav>
            <ul>
                <li>
                    <navlink>Главная</navlink>
                </li>
                <li>
                    <navlink>Скиллы</navlink>
                </li>
                <li>
                    <navlink>Работы</navlink>
                </li>
                <li>
                    <navlink>Контакты</navlink>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;
