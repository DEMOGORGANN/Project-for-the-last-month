import React, { useEffect } from "react";

import fi_x from './../../../img/fi_x.svg'
import copuT from './../../../img/Icdsfsdfon.svg'
import lims from './../../../img/Icosadadn.svg'
import styles from './ModalLickv.module.css'


export default function WalletModal({ visible, setVisible }) {


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
                        <span >You wallet</span>
                        <div className={styles.sada}>
                            <img src={fi_x} alt="" onClick={() => setVisible(false)} />
                        </div>
                    </div>
                    <hr />

                    <div className={styles.block}>
                        <div className={styles.wrapBlock}>
                            <h2 >You address</h2>
                            <div className={styles.MyInput}>
                                <input type="text" placeholder="0x5b3b60889685005c1d1de" />
                                <div className={styles.wrapImg} onClick={(e) => e.preventDefault()}>
                                    <img src={copuT} alt="" />
                                </div>
                            </div>
                            <div className={styles.BalBNb}>
                                <span>BNB Balance</span>
                                <span>0.03</span>
                            </div>
                            <div className={styles.wrapBSCScans}>
                                <span>View on BscScan</span>
                                <img src={lims} alt="" />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setVisible(false)}>Disconnect Wallet</button>
                </div>
            </div>
        )
    }
}