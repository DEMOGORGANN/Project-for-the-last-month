import React from 'react'
import { Link } from 'react-router-dom';

import Vec234tor from './../../img/Vec234tor.svg';
import sad from './../../img/0x5Ec3AdBDae5.svg';
import av3 from './../../img/99B93f5261.svg'
import av4 from './../../img/D846F383511.svg'
import av5 from './../../img/9e81cE821.svg'
import Vasdector from '../../img/Vasdector.svg'
import Vectasdaor from '../../img/Vectasdaor.svg'
// import Ve123ctor from '../../img/Ve123ctor.svg'
import strel from '../../img/Polygonasd1.svg'

import styles from './CoinList.module.css'


function CoinList() {

    const objCoin = [
        { id: 1, avatar: Vec234tor, name: "CVP", price: "$ 43 000 (+7%)", cap: "200 000 000", Purpose: "Store of Value", Halal: "Yes" },
        { id: 2, avatar: sad, name: "CVP", price: "$ 43 000 (+7%)", cap: "$ 3 017 336", Purpose: "Store of Value", Halal: "Yes" },
        { id: 3, avatar: av3, name: "CVP", price: "$ 43 000 (+7%)", cap: "$ 3 017 336", Purpose: "Store of Value", Halal: "Yes" },
        { id: 4, avatar: av4, name: "CVP", price: "$ 43 000 (+7%)", cap: "$ 3 017 336", Purpose: "Store of Value", Halal: "Yes" },
        { id: 5, avatar: av5, name: "CVP", price: "$ 43 000 (+7%)", cap: "$ 3 017 336", Purpose: "Store of Value", Halal: "Yes" }
    ]

    return (
        <div className={styles.wrapCoins}>
            <div className={styles.Tat}>
                <div className={styles.wrapTitle}>
                    <h1>
                        Coin List
                    </h1>
                    <Link to="#">Смотреть все</Link>
                </div>
                <div className={styles.wrapCoinList}>

                    <div className={styles.overFlowFor}>
                        <div className={styles.wrapCoin} >
                            <div className={styles.CoinList}>
                                <span>#
                                    <img src={strel} alt=""  style={{ marginLeft: "2px" }}/>
                                    &nbsp;&nbsp;&nbsp;Name
                                </span>
                                <span>Price</span>
                                <span>Cap</span>
                                <span>Purpose</span>
                                <span>Halal</span>
                            </div>
                            {objCoin.map(i => {
                                return (
                                    <div className={styles.Element} key={i.id} >
                                        <span className={styles.sadsa}>
                                            <span style={{ fontSize: "12px" }}>{i.id}</span>
                                            <img src={i.avatar} alt="" />
                                            {i.name}
                                        </span>
                                        <span>{i.price}</span>
                                        <span>{i.cap}</span>
                                        <span>{i.Purpose}</span>
                                        <div className={styles.wrapSpan}> <span className={styles.sa}>{i.Halal}</span></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles.NavPageCoin}>
                <div className={styles.sad}>
                    <div className={styles.kovVoPage}>
                        <span>5</span>
                        <div className={styles.AlngSent}>
                            <img src={Vasdector} alt="" />
                        </div>
                    </div>
                    <div className={styles.wrapRightBlock}>
                        <span> 1–5 of 413</span>
                        <div className={styles.changePage}>
                            <img src={Vectasdaor} alt="" />
                            <img src={Vectasdaor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinList;

