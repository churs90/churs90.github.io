import React from 'react';
import classes from "./Block_1.module.css"

const Block_1 = () => {
  return (
    <section className={classes.section}>
      Block1
        <div className={classes.about_me}>
            <div className={classes.name}>
                Привет!<br/>
                меня зовут Вадим Чурсин, я front-end разработчик
            </div>
            <div className={classes.foto}>
                <img src="https://cdn.pixabay.com/photo/2016/03/31/18/38/icons-1294517_1280.png" alt="фото"/>
            </div>
        </div>
    </section>
  );
};

export default Block_1;
