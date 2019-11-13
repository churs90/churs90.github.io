import React from 'react';
import classes from "./Footer.module.css"


const Footer = () => {
  return (
      <footer className={classes.footer}>
        Footer
          <div className={classes.footerBlock}>
              <p>Вадим Чурсин</p>
              <div><a href=""><img src="https://avatars.mds.yandex.net/get-pdb/231404/e84ef7bb-5fa3-4021-96d6-b048d13b2fc7/s1200" alt=""/></a></div>
              <div><a href=""><img src="http://www.clipartbest.com/cliparts/KTn/Xag/KTnXagMbc.png" alt=""/></a></div>
              <div><a href=""><img src="http://www.b8b8.ru/wp-content/uploads/2015/03/%D0%BE%D0%BA.jpg" alt=""/></a></div>
              <div><a href=""><img src="https://p0.zoon.ru/7/8/58e2ade040c0888e708dd9d8_5a789071cede1.jpg" alt=""/></a></div>
          </div>

      </footer>
  );
};

export default Footer;