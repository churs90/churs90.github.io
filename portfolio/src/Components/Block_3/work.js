import React from 'react';
import classes from "./Block_3.module.css"


const Work = () => {
  return (
          <div className={classes.work}>
              <div className={classes.workImg}>
                  <button>
                      Смотреть
                  </button>
                  <img src="https://zetaline.ru/images/easyblog_images/336/1372916505_veb-stranicu.jpg" alt="картинка"/>
              </div>
              <div className={classes.description}>
                  <p>название проекта</p>
                  <p>краткое описание</p>
              </div>
          </div>
  );
}

export default Work;