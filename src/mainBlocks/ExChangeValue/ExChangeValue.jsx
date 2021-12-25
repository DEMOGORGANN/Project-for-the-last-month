import React, { useState } from "react";


import fi_maximize2 from './../../img/fi_maximize2.svg'
import fi_alertcircle from './../../img/fi_alertcircle.svg'
import ETH from './../../img/ETH.svg'
import BinanceCoin from '../../img/BinanceCoi.svg'
import PolygonMATIC from '../../img/Polygon(MATIC).svg'

import styles from './ExChangeValue.module.css'


export default function ExChangeValue() {

    const [activBlock, setActivBlock] = useState("Ethereum")
    return (
        <div className={styles.exchangeValue}>
            <div className={styles.exChange}>
                <img src={fi_maximize2} alt="" />
                <span>Обмен</span>
            </div>
            <div className={styles.desc}>
                <span>Обменяйте более чем на 2000 токенов, используя
                    лучшие цитаты из более чем 20 источников.</span>
            </div>
            <hr />
            <div className={styles.SupportedNetworks}>
                <span>
                    Поддерживаемые сети
                </span>
                <img src={fi_alertcircle} alt="" />
            </div>
            <div className={styles.Network}>
                <div className={activBlock === "Ethereum" ? styles.ActivBlock : styles.oneBlock} onClick={() => setActivBlock("Ethereum")}>
                    <div className={styles.wrapLogoName}>
                        <img src={ETH} alt="" />
                        <span>Ethereum</span>
                    </div>
                    <div className={styles.centrH2}>
                        <h2>2 328</h2>
                    </div>
                </div>
                <div className={activBlock === "BSC" ? styles.ActivBlock : styles.oneBlock} onClick={() => setActivBlock("BSC")}>
                    <div className={styles.wrapLogoName}>
                        <img src={BinanceCoin} alt="" />
                        <span>BSC</span>
                    </div>
                    <div className={styles.centrH2}>
                        <h2>433</h2>
                    </div>
                </div>
                <div className={activBlock === "Polygon" ? styles.ActivBlock : styles.oneBlock} onClick={() => setActivBlock("Polygon")}>
                    <div className={styles.wrapLogoName}>
                        <img src={PolygonMATIC} alt="" />
                        <span>Polygon</span>
                    </div>
                    <div className={styles.centrH2}>
                        <h2>27</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}