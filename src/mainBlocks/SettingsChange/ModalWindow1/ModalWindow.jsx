import React, { useEffect } from "react";

import fi_x from './../../../img/fi_x.svg'
import icon from './../../../img/Icoasdasdn.svg'
import ETH from './../../../img/ETH.svg'


import styles from './Modal.module.css'

export default function Modal({ visible, setVisible }) {

    useEffect(() => {
        document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    }, [visible])


    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.block}>
                        <div className={styles.tytleModal}>
                            <span>Select token</span>
                            <img src={fi_x} alt="" onClick={() => setVisible(false)} />
                        </div>
                        <hr />
                        <div className={styles.wrapSeachScroll}>
                            <div className={styles.seachTok}>
                                <div className={styles.MyInput}>
                                    <button onClick={(e) => e.preventDefault()}><img src={icon} alt="" /></button>
                                    <input type="text" placeholder="Filter by token" />
                                </div>


                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>
                                <div className={styles.Tokens}>
                                    <img src={ETH} alt="" />
                                    <span>Ethereum</span>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}