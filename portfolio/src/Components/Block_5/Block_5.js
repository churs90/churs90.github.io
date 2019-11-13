import React from 'react';
import classes from "./Block_5.module.css"


const Block_5 = () => {
  return (
      <section className={classes.section}>
        Block5
          <div>
              <div className={classes.contact}>
                  <h1>контакты</h1>
                  <form action="">
                      <div><input type="text"/></div>
                      <div><input type="text"/></div>
                      <div><textarea rows="5" cols="30"></textarea></div>
                  </form>
                  <button>Отправить</button>

              </div>
          </div>
      </section>
  );
}

export default Block_5;