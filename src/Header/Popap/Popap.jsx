import React, { useState, useEffect } from 'react'


import Vect234or from '../../img/Vect234or.svg'

import styles from './Popap.module.css'
import ModalLickv from './ModalLickv/ModalLickv'
import WalletModal from './WalletModal/WalletModal'

export default function Popap({ posit, actSel, setActSel, activButV1, setActivButV1, setActivBut }) {



    const [actAr, setActAr] = useState(false)
    const [visible, setVisible] = useState(false)
    const [visibleV2, setVisibleV2] = useState(false)

    useEffect(() => {
        if (actSel === true) {
            setActAr(false)
            setActivButV1(false)
            setActSel(false)
        }
    }, [setActSel, actSel, setActivButV1])

    return (
        <div className={`${styles.tooltip} ${posit === "lang" ? styles.tooltipHead : null} `} onClick={(e) => e.stopPropagation()}>
            <WalletModal visible={visibleV2} setVisible={setVisibleV2} />
            <ModalLickv visible={visible} setVisible={setVisible} />
            <div className={styles.wwad} >
                <div className={styles.wrapSelectLang}
                    onClick={() => {
                        setActAr(!actAr)
                        setActivButV1(!activButV1)
                        setActivBut(false)
                    }}>
                    <img src={Vect234or} alt="" />
                </div>
                <div className={` ${activButV1 === true ? styles.tooltiptext : styles.noneActiv}`}
                    onClick={() => {
                        setActivButV1(!activButV1)
                        setActAr(!actAr)
                        setActSel(false)
                    }}>
                    <div className={styles.colorsDasd} onClick={() => setVisibleV2(true)}>
                        <div className={styles.wrapsButs} >
                            <span>Wallet</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setVisible(true)}>
                        <div className={styles.wrapsButs}>

                            <span>Transactions</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}>
                            <span>Disconnect</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


