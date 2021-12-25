import React, { useState, useEffect } from 'react'


import US3x from '../img/US3x.svg'
import arrowLang from '../img/arrowLang.svg'
import Russia from '../img/Russia.svg'
import Spain from '../img/Spain.svg'


import styles from './SelCont.module.css'

export default function SelCont({ posit, actSel, setActSel, closBut, setClosBut }) {

    const [langs, setLang] = useState({ lang: "EN", img: US3x })
    const [actAr, setActAr] = useState(false)
    const [activBut, setActivBut] = useState(false)

    useEffect(() => {
        if (actSel === true) {
            setActAr(false);
            setActivBut(false);
            setActSel(false);
        }
    }, [setActSel, actSel])


    useEffect(() => {
        if (closBut !== "selCount") {
            setActivBut(false)
            setActAr(false)
        }
    }, [closBut])

    return (
        <div className={`${styles.tooltip} ${posit === "lang" ? styles.tooltipHead : null} `} onClick={(e) => e.stopPropagation()}>
            <div className={styles.wwad} onClick={(e) => e.stopPropagation()}>
                <div className={styles.wrapSelectLang}
                    onClick={() => {
                        setActAr(!actAr)
                        setActivBut(!activBut)
                        setClosBut("selCount")
                    }}>
                    <img src={langs.img} alt="" />
                    <span>{langs.lang}</span>
                    <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                        <img src={arrowLang} alt="" />
                    </div>
                </div>
                <div
                    className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
                    onClick={() => {
                        setActivBut(!activBut)
                        setActAr(!actAr)
                        setActSel(!actSel)
                        setClosBut("selCount")
                        if (activBut === true) {
                            setClosBut("")
                        }
                    }}>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setLang({ lang: "EN", img: US3x })}>
                            <img src={US3x} alt="" />
                            <span>EN</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setLang({ lang: "RU", img: Russia })}>
                            <img src={Russia} alt="" />
                            <span style={{ color: "#05D5FA" }}>RU</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setLang({ lang: "SP", img: Spain })}>
                            <img src={Spain} alt="" />
                            <span style={{ color: "#00D632" }}>SP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


