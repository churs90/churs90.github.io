import React from 'react';
import classes from "./Block_2.module.css"
import Skill from "./skill";


const Block_2 = () => {
  return (
      <section className={classes.section}>
        Block2
          <div className={classes.skillsBlock}>
            <h1>Мои скилы</h1>
            <div className={classes.skills}>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
          </div>
      </section>
  );
}

export default Block_2;