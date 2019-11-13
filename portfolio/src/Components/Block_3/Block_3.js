import React from 'react';
import classes from "./Block_3.module.css"
import Work from "./work";


const Block_3 = () => {
  return (
      <section className={classes.section}>
        Block3
          <div className={classes.worksBlock}>
              <h1>Мои работы</h1>
              <div className={classes.works}>
                  <Work/>
                  <Work/>
                  <Work/>
                  <Work/>
              </div>
          </div>
      </section>
  );
}

export default Block_3;