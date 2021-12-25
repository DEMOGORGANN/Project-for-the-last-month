import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Group1 from '../img/Group1.svg'
import Vector from '../img/Vector.svg'
import Vector1 from '../img/Vector1.svg'
import Vector2 from '../img/Vector2.svg'
import icons8info1 from '../img/icons8-info1.svg'
import telegramm from '../img/telegramm.svg'
import Group3 from '../img/Group3.svg'
import medium from '../img/medium.svg'
import Sun from '../img/SUUUn.svg'

import styles from './burgerMenu.module.css'
import SelCont from './../SelCont/SelCont'

function BurgerMenu({ SetModalVisib, actSel, setActSel, auth, closBut, setClosBut }) {

    const [activ, SetActive] = useState(true)




    return (
        <div className={activ === false ? styles.WrapBurger_notActive : styles.WrapBurger}>
            <div className={styles.navBar}>
                <img style={{ padding: "0", backgroundColor: "#1e1f25" }} className={styles.HeadLogo} src={Group1} alt="" />
                <div className={styles.imgCloseWind}>
                    <img className={styles.closeWind} src={Vector} alt="" onClick={() => SetActive(!activ)} />
                </div>
                <Link to="/" className={styles.wrapLinkBlock}>
                    <img src={Vector1} alt="" />
                    <span>Swap</span>
                </Link>
                <Link to="/FAQ" className={styles.wrapLinkBlock}>
                    <img src={Vector2} alt="" />
                    <span>FAQ</span>
                </Link>
                <Link to="/ABOUT" className={styles.wrapLinkBlock}>
                    <img src={icons8info1} alt="" />
                    <span>About</span>
                </Link>
                {/* <div className={styles.wrapLinkBlock} onClick={() => SetModalVisib(true)}>
                    <button onClick={(e) => e.preventDefault()}>Модал Окно..</button>
                </div> */}

                <div className={styles.darklVers}>
                    <img src={Sun} alt="" />
                    <span>Dark</span>
                </div>
            </div>
            <div className={styles.footBlockMen}>
                <div className={styles.footImgA}>
                    <Link to="#"><img src={telegramm} alt="" /></Link>
                    <Link to="#"><img src={Group3} alt="" /></Link>
                    <Link to="#"><img src={medium} alt="" /></Link>
                </div>
                {auth === false ? <SelCont actSel={actSel}
                    setActSel={setActSel}
                    closBut={closBut}
                    setClosBut={setClosBut} /> : null}

            </div>
        </div >
    );
}

export default BurgerMenu;



