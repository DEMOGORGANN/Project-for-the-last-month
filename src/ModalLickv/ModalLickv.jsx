import React, { useState } from "react";

import fi_x from './../img/fi_x.svg'
import ETH from './../img/ETH.svg'
import arrowLang from '../img/arrowLang.svg'
import Cardano from './../img/Cardano.svg'
import Tild5 from './../img/Tild5.svg'
import BinanceCoin from './../img/BinanceCoi.svg'
import Setting from './../img/Setting.svg'
import icons8info1 from '..//img/icons8-info1.svg'

import styles from './ModalLickv.module.css'

export default function ModalLickv({ visible, setVisible, visibles, setVisibles }) {

    const [opnWind, setOpnWind] = useState(false)
    const [SlipTolerance, setSlipTolerance] = useState("3.00%")
    const [IosSwitch, setIosSwitch] = useState(false)
    const [useBut, setUseBut] = useState(false)

    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.wrapTitleModdal}>
                        <span>Добавить ликвидность</span>
                        <img src={fi_x} alt="" onClick={() => setVisible(false)} />
                    </div>
                    <hr />

                    <div className={styles.scrollModal}>
                        <div className={styles.wrapfirsEl}>
                            <div className={styles.elemOne}>
                                <div className={styles.Obmen1}>
                                    <span>Обменять</span>
                                    <div className={styles.wrapInfoVal}
                                        onClick={() => {
                                            setVisible(false)
                                            setVisibles(true)
                                        }}>
                                        <img src={ETH} alt="" />
                                        <span>ETH</span>
                                        <img src={arrowLang} alt="" />
                                    </div>
                                </div>
                                <div className={styles.Max}>
                                    <span>MAX</span>
                                </div>
                                <div className={styles.Balance}>
                                    <span>Баланс: 0.045234</span>
                                    <h3>50</h3>
                                    <span>~ $ 12 220.00</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TwoEl}>
                            <span>Получить</span>
                            <div className={styles.valuts}>
                                <div className={styles.valutsAndImg}
                                    onClick={() => {
                                        setVisible(false)
                                        setVisibles(true)
                                    }}>
                                    <img src={Cardano} alt="" />
                                    <span>USDT / BUSD</span>
                                    <img src={arrowLang} alt="" />
                                </div>
                                <span>50</span>
                            </div>
                            <div className={styles.InfVal}>
                                <span>Est. Pool Allocation</span>
                                <span>Share in Pools</span>
                            </div>
                            <div className={styles.Prices}>
                                <span>$0.00</span>
                            </div>
                            <div className={styles.OneCript}>
                                <div className={styles.imgAndval}>
                                    <img src={Tild5} alt="" />
                                    <span>0 USDT</span>
                                </div>
                                <span>Est. Daily Fee Income</span>
                            </div>
                            <div className={styles.OneCript}>
                                <div className={styles.imgAndval}>
                                    <img src={BinanceCoin} alt="" />
                                    <span>0 USDT</span>
                                </div>
                                <span>$0.00</span>
                            </div>

                        </div>
                        <div className={styles.OneEl}>
                            <div className={styles.SettTrans}>
                                <h2>Настройки транзакции</h2>
                                <img src={Setting} alt="" onClick={() => setOpnWind(!opnWind)} />
                            </div>
                            <div className={styles.Block}>
                                <h2>
                                    Допуск Проскальзывания
                                </h2>
                                <span>
                                    3.00%
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
                                    {useBut === true ? "Ограничено" : "Не ограничено"}
                                </span>
                            </div>
                        </div>
                        <div className={styles.TwoElem} >
                            <span>Estimated Gas Fee</span>
                            <h2>---</h2>
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
                                    </button><button
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
                                        <input type="checkbox" onChange={() => setIosSwitch(!IosSwitch)} onClick={() => setUseBut(!useBut)} />
                                        <span className={styles.checkboxIosSwitch}></span>
                                    </label>
                                </div>
                            </div>
                        }
                    </div>

                    <div className={styles.ButLickVOke}>
                        <button>Подтвердить</button>
                    </div>

                </div>
            </div>
        )
    }
}