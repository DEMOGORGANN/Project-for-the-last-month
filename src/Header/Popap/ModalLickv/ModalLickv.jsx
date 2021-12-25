import React, { useEffect, useState } from "react";

import fi_x from './../../../img/fi_x.svg'
import iconNoup from './../../../img/Icasddadon.svg'
import iconNice from './../../../img/Iasdascon.svg'
import lims from './../../../img/Icosadadn.svg'

import styles from './ModalLickv.module.css'


export default function ModalLickv({ visible, setVisible }) {

    const [haveEl, setHaveElem] = useState(false)

    useEffect(() => {
        document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    }, [visible])


    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.wrapTitleModdal}>
                        <span onClick={() => setHaveElem(!haveEl)}>Transactions</span>
                        <div className={styles.sada}>
                            <img src={fi_x} alt="" onClick={() => setVisible(false)} />
                        </div>
                    </div>
                    <hr />

                    <div className={styles.block}>
                        <div className={styles.wrapBlock}>
                            <h2 >Recent transaction</h2>
                            {haveEl === false ? <span>No recent transactions</span> :
                                <div><div className={styles.wrapOneElement}>
                                    <span>Swap 10CAKE for 0.05 BNB</span>
                                    <div className={styles.wrapImg}>
                                        <img src={iconNoup} alt="" />
                                        <img src={lims} alt="" />
                                    </div>
                                </div>
                                    <div className={styles.wrapOneElement}>
                                        <span>Swap 10CAKE for 0.05 BNB</span>
                                        <div className={styles.wrapImg}>
                                            <img src={iconNice} alt="" />
                                            <img src={lims} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.wrapOneElement}>
                                        <span>Swap 10CAKE for 0.05 BNB</span>
                                        <div className={styles.wrapImg}>
                                            <img src={iconNice} alt="" />
                                            <img src={lims} alt="" />
                                        </div>
                                    </div >
                                    <div className={styles.wrapOneElement}>
                                        <span>Swap 10CAKE for 0.05 BNB</span>
                                        <div className={styles.wrapImg}>
                                            <img src={iconNice} alt="" />
                                            <img src={lims} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.wrapOneElement}>
                                        <span>Swap 10CAKE for 0.05 BNB</span>
                                        <div className={styles.wrapImg}>
                                            <img src={iconNice} alt="" />
                                            <img src={lims} alt="" />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}