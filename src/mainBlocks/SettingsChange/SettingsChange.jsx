import React, { useState } from "react";

import ETH from './../../img/ETH.svg'
import arrowLang from '../../img/arrowLang.svg'
import fi_maximize2 from './../../img/fi_maximize2.svg'
import Cardano from './../../img/Cardano.svg'
import Setting from './../../img/Setting.svg'
import icons8info1 from '../../img/icons8-info1.svg'

import styles from './SettingsChange.module.css'

import Modal from "./ModalWindow1/ModalWindow";


export default function SettingsChange({ visible, setVisible}) {

    const [SlipTolerance, setSlipTolerance] = useState("3.00%")
    const [val, setVal] = useState(false)
    const [IosSwitch, setIosSwitch] = useState(false)
    const [opnWind, setOpWind] = useState(false)
    const [onClSwap, setOnClSwap] = useState(false)

    return (
        <div className={styles.SettingsChange}>
            <div className={styles.wrapTwoBlock}>
                <Modal visible={visible} setVisible={setVisible} />
                <div className={styles.wrapLeftBlock}>
                    <div className={styles.wrapfirsEl}>
                        <div className={styles.elemOne}>
                            <div className={styles.Obmen1}>
                                <span>Обменять</span>
                                <div className={styles.wrapInfoVal} onClick={() => setVisible(true)}>
                                    <img src={ETH} alt="" />
                                    <span>ETH</span>
                                    <img src={arrowLang} alt="" />
                                </div>
                            </div>
                            <div className={styles.Max}>
                                <span>MAX</span>
                            </div>
                            <div className={styles.Balance}>
                                <span>Баланс: 0.0452334</span>
                                <div className={styles.wrapInp} onClick={e => e.stopPropagation()}>
                                    <input type="number" placeholder="50"
                                        contentEditable="true"
                                    />
                                </div>
                                <span>~ $ 12 220.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.change} ${onClSwap === true ? styles.transform : null}`}>
                        <img src={fi_maximize2} alt="" onClick={() => setOnClSwap(!onClSwap)} />
                    </div>
                    <div className={styles.wrapfirsEl}>
                        <div className={styles.elemOne}>
                            <div className={styles.Obmen1}>
                                <span>Получить</span>
                                <div className={styles.wrapInfoVal} onClick={() => setVisible(true)}>
                                    <img src={Cardano} alt="" />
                                    <span>ADA</span>
                                    <img src={arrowLang} alt="" />
                                </div>
                            </div>
                            <div className={styles.Max}>
                                <span>MAX</span>
                            </div>
                            <div className={styles.Balance} >
                                <span>Баланс: 0.0452334</span>
                                <div className={styles.wrapInp} onClick={e => e.stopPropagation()}>
                                    <input type="number" placeholder="50" />
                                </div>
                                <span>~ $ 12 220.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapRightBlock}>
                    <div className={styles.OneEl}>
                        <div className={styles.SettTrans}>
                            <h2>Настройки транзакции</h2>
                            <img src={Setting} alt="" onClick={() => setOpWind(!opnWind)} />
                        </div>
                        <div className={styles.Block}>
                            <h2>
                                Допуск Проскальзывания
                            </h2>
                            <span>
                                {SlipTolerance}
                            </span>
                        </div>
                        <div className={styles.Block}>
                            <h2>
                                Скорость транзакции
                            </h2>
                            <span>
                                Быстро
                            </span>
                        </div>
                        <div className={styles.Block}>
                            <h2>
                                Разрешение
                            </h2>
                            <span>
                                {IosSwitch === false ? "Ограничено" : "Не Ограничено"}
                            </span>
                        </div>
                    </div>
                    <div className={styles.TwoElem} onClick={() => setVal(!val)}>
                        <span>Estimated Gas Fee</span>
                        {val === false ? <div className={styles.cherts}></div> : <h2>+</h2>}
                    </div>

                    {opnWind === false ? null :
                        <div className={styles.wrapSetSetting}>
                            <div className={styles.wrapTitl}>
                                <span>  Допуск Проскальзывания </span>
                                <img src={icons8info1} alt="" />
                            </div>
                            <div className={styles.SelectBut}>
                                <button
                                    className={SlipTolerance === "2.00%" ? styles.butAS : null}
                                    onClick={() => setSlipTolerance("2.00%")}>
                                    2%
                                </button>
                                <button
                                    className={SlipTolerance === "3.00%" ? styles.butAS : null}
                                    onClick={() => setSlipTolerance("3.00%")}>
                                    3%
                                </button>
                                <button
                                    className={SlipTolerance === "5.00%" ? styles.butAS : null}
                                    onClick={() => setSlipTolerance("5.00%")}>
                                    5%
                                </button>
                            </div>
                            <div className={styles.wrapChec}>
                                <div className={styles.titChec}>
                                    <span>Разрешение</span>
                                    <img src={icons8info1} alt="" />
                                </div>
                                <label className={styles.checkboxIos} >
                                    <input type="checkbox" onChange={() => setIosSwitch(!IosSwitch)} />
                                    <span className={styles.checkboxIosSwitch}></span>
                                </label>
                            </div>
                        </div>
                    }


                </div>

            </div>
            <div className={styles.buts}>
                <button onClick={(e) => e.preventDefault()}>Обменять</button>
            </div>
        </div >
    )
}