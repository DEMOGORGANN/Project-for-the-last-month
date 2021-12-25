import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import SelectValue from '../SelectValue/SelectValue'
import SelCont from '../SelCont/SelCont'
import GasStashion from '../GasStashion/GasStashion'
import Popap from './Popap/Popap'
import PopapV2 from './PopapV2/PopapV2'


import Vector1 from '../img/Vector1.svg'
import Vector2 from '../img/Vector2.svg'
import icons8info1 from '../img/icons8-info1.svg'
import Group from '../img/Group1.svg'
import telegramm from '../img/telegramm.svg'
import Group3 from '../img/Group3.svg'
import medium from '../img/medium.svg'
import Graph from '../img/Graph.svg'
import regular from '../img/regular.svg'


function Header({ SetModalVisib, actSel, setActSel, setAuth, auth, closBut, setClosBut }) {

    const [activBurg, setActivBurg] = useState(false)
    const [activBut, setActivBut] = useState(false)
    const [activButV1, setActivButV1] = useState(false)



    useEffect(() => {
        document.querySelector("body").style.overflow = activBurg ? "hidden" : "auto";
    }, [activBurg])

    // useEffect(() => {
    //     if (activButV1 === true) {
    //         setActivBut(false)
    //     } else if (activBut === true) {
    //         setActivButV1(false)
    //     }

    // }, [activBut, activButV1])

    return (
        <div className={styles.fullWrapHead}>

            <div className={styles.wrapHead}>
                <div className={styles.nameProj}>
                    <h1>Halal</h1>
                    <h1>Swap</h1>
                </div>

                <div className={auth === false ? styles.myBlock : styles.myBlockAct}>
                    {auth === true ?
                        <div className={styles.inFoBal}>
                            <img src={Graph} alt="" />
                            <h1>PNL</h1>
                            <span>30d+553 000$</span>
                            <h2>1d -200$</h2>
                        </div> : null}

                    <GasStashion posit={"gas"} actSel={actSel} setActSel={setActSel} closBut={closBut} setClosBut={setClosBut} />
                    {auth === true ? <SelCont posit={"lang"} actSel={actSel} setActSel={setActSel} closBut={closBut} setClosBut={setClosBut} /> : null}
                    <SelectValue posit={"gas"} actSel={actSel} setActSel={setActSel} closBut={closBut} setClosBut={setClosBut} />

                    <div className={styles.logIn} onClick={() => setAuth(!auth)}>
                        <h2>{auth === true ? `XCd...krId  Disconnect` : "Connect"}</h2>
                    </div>
                </div>

            </div>

            {/* ------------------------------MOBILE----------------------------------------- */}
            <div className={styles.wrapMobileVersion} >
                <div className={styles.fullNAv} onClick={() => setActSel(true)}>
                    <div
                        className={`${styles.burgerMenu} ${activBurg === true ? styles.burgerMenu_active : 0}`}
                        onClick={() => {
                            setActivBurg(!activBurg)
                            setActSel(true)
                        }}>
                        <span className={styles.burgerMenu_lines}></span>
                    </div>
                    <div className={`${activBurg === true ? styles.boxShad_act : 0}`} onClick={() => setActivBurg(false)}>

                        <nav className={`${styles.burgerMenu_nav} ${activBurg === true ? styles.burgerMenu_nav_active : 0}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                setActSel(true)
                            }}>
                            <div className={styles.imgHedBurg}>

                                <div className={styles.asdads}>
                                    <img src={Group} alt="" />
                                    <img src={regular} alt="" />

                                </div>

                            </div>
                            <div className={styles.wrapFullBlock}>
                                <div className={styles.wrapnav}>
                                    <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                        <img src={Vector1} alt="" />
                                        <Link to="/" onClick={() => setActivBurg(false)}>Swap</Link>
                                    </div>
                                    <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                        <img src={Vector2} alt="" />
                                        <Link to="/FAQ" onClick={() => setActivBurg(false)}>FAQ</Link>
                                    </div>
                                    <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                        <img src={icons8info1} alt="" />
                                        <Link to="/ABOUT" onClick={() => setActivBurg(false)}>About</Link>
                                    </div>
                                    {/* <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`} onClick={() => SetModalVisib(true)}>
                                        <button onClick={() => setActivBurg(false)}>Модал Окно..</button>
                                    </div> */}

                                </div>
                                <div className={`${activBurg === true ? styles.footMobileVers : styles.noneAct}`}>
                                    <div className={styles.imgLink}>
                                        <img src={telegramm} alt="" />
                                        <img src={Group3} alt="" />
                                        <img src={medium} alt="" />
                                    </div>
                                    <div className={styles.wrapImgFoot} >
                                        <SelCont
                                            actSel={actSel}
                                            setActSel={setActSel}
                                            closBut={closBut}
                                            setClosBut={setClosBut}

                                        />
                                        <SelectValue
                                            actSel={actSel}
                                            setActSel={setActSel}
                                            closBut={closBut}
                                            setClosBut={setClosBut}

                                        />
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div >
                <div className={styles.wrapImgasd}>
                    <div className={styles.opacityNaNull}><img src={Group} alt="" /></div>
                    <img src={Group} alt="" />
                    <div className={styles.lastelement}>
                        <PopapV2
                            actSel={actSel}
                            setActSel={setActSel}
                            posit={"lang"}
                            activBut={activBut}
                            setActivBut={setActivBut}
                            setActivButV1={setActivButV1} />
                        <Popap actSel={actSel}
                            setActSel={setActSel}
                            posit={"lang"}
                            activButV1={activButV1}
                            setActivButV1={setActivButV1}
                            setActivBut={setActivBut} />

                    </div>
                </div>
            </div >
        </div>

    );

}


export default Header;











