import React from 'react';
import classes from "./Block_4.module.css"


const Block_4 = () => {
  return (
      <section className={classes.section}>
        Block4
          <div className={classes.remoteWorkBlock}>
              <p>Расматриваю вариант удалённой работы</p>
              <button>Нанять меня</button>
          </div>
      </section>
  );
}

export default Block_4;
