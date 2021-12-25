import React, { useState, useEffect } from 'react'



import BinanceCoin from '../../img/BinanceCoin(BNB).svg'
import ETasdasdsadasdH from '../../img/ETasdasdsadasdH.svg'
import BinanceCoi from '../../img/BinanceCoi.svg'
import TerraLUNA from '../../img/TerraLUNA).svg'
import AvalanX from '../../img/AvalanX).svg'
import TRO from '../../img/TRO).svg'
import Solanaasd from '../../img/Solanaasd).svg'
import FantomM from '../../img/FantomM).svg'

import styles from './Popap.module.css'


export default function PopapV2({ posit, actSel, setActSel, activBut, setActivBut, setActivButV1 }) {


    const [actAr, setActAr] = useState(false)

    const [selBut, setSelBut] = useState(BinanceCoin)

    useEffect(() => {
        if (actSel === true) {
            setActAr(false)
            setActivBut(false)
            setActSel(false)
        }
    }, [setActSel, actSel, setActivBut])


    return (
        <div className={`${styles.tooltip} ${posit === "lang" ? styles.tooltipHead : null} `} onClick={(e) => e.stopPropagation()}>

            <div className={styles.wwad} >
                <div className={styles.wrapSelectLang}
                    onClick={() => {
                        setActAr(!actAr)
                        setActivBut(!activBut)
                        setActivButV1(false)
                    }}>
                    <img src={selBut} alt="" />
                </div>
                <div className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
                    onClick={() => {
                        setActivBut(!activBut)
                        setActAr(!actAr)
                        setActSel(false)
                    }}>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(ETasdasdsadasdH)}>
                        <div className={styles.wrapsButs} >
                            <img src={ETasdasdsadasdH} alt="" />
                            <span>Ethereum</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(BinanceCoi)}>
                        <div className={styles.wrapsButs}>
                            <img src={BinanceCoi} alt="" />
                            <span>BSC</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(AvalanX)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={AvalanX} alt="" />
                            <span>TRON</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(TerraLUNA)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={TerraLUNA} alt="" />
                            <span>Terra</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(TRO)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={TRO} alt="" />
                            <span>Solana</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(Solanaasd)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={Solanaasd} alt="" />
                            <span>Fantom</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(FantomM)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={FantomM} alt="" />
                            <span>Avalanche</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd} onClick={() => setSelBut(ETasdasdsadasdH)}>
                        <div
                            className={styles.wrapsButs}>
                            <img src={ETasdasdsadasdH} alt="" />
                            <span>Arbitrum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


