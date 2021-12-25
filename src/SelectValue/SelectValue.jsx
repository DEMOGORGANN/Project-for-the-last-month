import React, { useState, useEffect } from "react"

import Russia from '../img/Russia.svg'
import US3x from '../img/US3x.svg'
import arrowLang from '../img/arrowLang.svg'
import Spain from '../img/Spain.svg'


import styles from './../SelCont/SelCont.module.css'


export default function SelectValue({ actSel, setActSel, posit, closBut, setClosBut }) {

    const [valuts, setValut] = useState({ valut: "USD", img: US3x })
    const [actAr, setActAr] = useState(false)
    const [activBut, setActivBut] = useState(false)


    useEffect(() => {
        if (actSel === true) {
            setActAr(false)
            setActivBut(false)
            setActSel(false)
        }
    }, [setActSel, setActivBut, actSel])


    useEffect(() => {
        if (closBut !== "selValue") {
            setActivBut(false)
            setActAr(false)
        }
    }, [closBut])

    return (
        <div
            className={`${styles.tooltip} ${posit === "gas" ? styles.tooltipHeadVal : null} `} onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.wwad} onClick={(e) => e.stopPropagation()}>
                <div className={styles.wrapSelectLang}
                    onClick={() => {
                        setActAr(!actAr)
                        setActivBut(!activBut)
                        setClosBut("selValue")

                    }}>
                    <img src={valuts.img} alt="" />
                    <span>{valuts.valut}</span>
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
                        setClosBut("selValue")
                    }}>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setValut({ valut: "USD", img: US3x })}>
                            <img src={US3x} alt="" />
                            <span>USD</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setValut({ valut: "RUB", img: Russia })}>
                            <img src={Russia} alt="" />
                            <span style={{ color: "#05D5FA" }}>RUB</span>
                        </div>
                    </div>
                    <div className={styles.colorsDasd}>
                        <div
                            className={styles.wrapsButs}
                            onClick={() => setValut({ valut: "EUR", img: Spain })}>
                            <img src={Spain} alt="" />
                            <span style={{ color: "#00D632" }}>EUR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


// export default function SelectValue(actSel, setActSel) {

//     const [valuts, setValut] = useState({ valut: "USD", img: US3x })
//     const [activBut, setActivBut] = useState(false)
//     const [actAr, setActAr] = useState(false)

//     useEffect(() => {
//         if (actSel === true) {
//             setActAr(false)
//             setActivBut(false)
//             setActSel(false)
//         }
//     }, [actSel])


//     return (
//         <div className={`${styles.tooltip}`} onClick={(e) => e.stopPropagation()} >
//             <div className={styles.wwad} onClick={(e) => e.stopPropagation()}>
//                 <div className={styles.wrapSelectLang}
//                     onClick={() => {
//                         setActAr(!actAr)
//                         setActivBut(!activBut)

//                     }}>
//                     <img src={langs.img} alt="" />
//                     <span>{langs.lang}</span>
//                     <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
//                         <img src={arrowLang} alt="" />
//                     </div>
//                 </div>
//                 <div
//                     className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
//                     onClick={() => {
//                         setActivBut(!activBut)
//                         setActAr(!actAr)
//                         setActSel(false)
//                     }}>
//                     <div
//                         className={styles.wrapsButs}
//                         onClick={() => setLang({ lang: "EN", img: US3x })}>
//                         <img src={US3x} alt="" />
//                         <span>EN</span>
//                     </div>
//                     <div
//                         className={styles.wrapsButs}
//                         onClick={() => setLang({ lang: "RU", img: Russia })}>
//                         <img src={Russia} alt="" />
//                         <span style={{ color: "#05D5FA" }}>RU</span>
//                     </div>
//                     <div
//                         className={styles.wrapsButs}
//                         onClick={() => setLang({ lang: "SP", img: Spain })}>
//                         <img src={Spain} alt="" />
//                         <span style={{ color: "#00D632" }}>SP</span>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }



