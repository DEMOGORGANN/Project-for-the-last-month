import React, { useState, useEffect } from 'react'


import arrowLang from '../img/arrowLang.svg'
import gasstation1 from './../img/gas-station1.svg'
import gasstation2 from './../img/gas-station2.svg'
import gasstation3 from './../img/gas-station3.svg'

import styles from './../SelCont/SelCont.module.css'

export default function GasStashion({ posit, actSel, setActSel, closBut, setClosBut }) {

    const [gastation, setGastation] = useState({ station: "136", img: gasstation1 })
    const [activBut, setActivBut] = useState(false)
    const [actAr, setActAr] = useState(false)

    useEffect(() => {
        if (actSel === true) {
            setActAr(false)
            setActivBut(false)
            setActSel(false)
        }
    }, [setActSel, actSel])

    useEffect(() => {
        if (closBut !== "gasStat") {
            setActivBut(false)
            setActAr(false)
        }
    }, [closBut])

    return (
        <div
            className={`${styles.tooltip} ${posit === "gas" ? styles.tooltipHeadGas : null} `} onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.wwad} onClick={(e) => e.stopPropagation()}>
                <div className={styles.wrapSelectLang}
                    onClick={() => {
                        setActAr(!actAr)
                        setActivBut(!activBut)
                        setClosBut("gasStat")

                    }}>
                    <img src={gastation.img} alt="" />
                    <span>{gastation.station}</span>
                    <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                        <img src={arrowLang} alt="" />
                    </div>
                </div>
                <div
                    className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
                    onClick={() => {
                        setActivBut(!activBut)
                        setActAr(!actAr)
                        setActSel(false)
                        setClosBut("gasStat")
                    }}>
                    <div className={styles.colorsDasd}>
                        <div className={styles.wrapsButs} onClick={() => setGastation({ station: "136", img: gasstation1 })}>
                            <img src={gasstation1} alt="" />
                            <span>136</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div className={styles.wrapsButs} onClick={() => setGastation({ station: "151", img: gasstation2 })}>
                            <img src={gasstation2} alt="" />
                            <span style={{ color: "#05D5FA" }}>151</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div className={styles.wrapsButs} onClick={() => setGastation({ station: "166", img: gasstation3 })}>
                            <img src={gasstation3} alt="" />
                            <span style={{ color: "#00D632" }}>166</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}




