import React from 'react'
import { Link } from 'react-router-dom';

import Vec234tor from './../../img/Gro34asd5up_37.svg';
import sad from './../../img/asd09143.svg';
import av3 from './../../img/3fsdfsdzf.svg'
import av4 from './../../img/asdassad3.svg'
import av5 from './../../img/asdasasd324das.svg'
import Vasdector from '../../img/Vasdector.svg'
import Vectasdaor from '../../img/Vectasdaor.svg'
// import Ve123ctor from '../../img/Ve123ctor.svg'
import C4e6D40eDD846F38351 from '../../img/C4e6D40eDD846F38351.svg'
import styles from './YieldFarming.module.css'
import strel from '../../img/Polygonasd1.svg'


function YieldFarming() {

    const objCoin = [
        { id: 1, avatar: Vec234tor, name: "CAKE/WBNB", Liquidity: "$ 913 017 336", Lock: "$ 3 017 336", ROI: "+ 2.43%", ROI2: "- 32.43%", Rewards: C4e6D40eDD846F38351, plusminus: "3 017", },
        { id: 2, avatar: sad, name: "CVP/USDT", Liquidity: "$ 513 017 336", Lock: "$ 3 017 336", ROI: "+ 2.43%", ROI2: "- 32.43%", Rewards: C4e6D40eDD846F38351, plusminus: "3 017", },
        { id: 3, avatar: av3, name: "QBT/ETH", Liquidity: "$ 513 017 336", Lock: "$ 3 017 336", ROI: "+ 2.43%", ROI2: "- 32.43%", Rewards: C4e6D40eDD846F38351, plusminus: "+ 2.43%", },
        { id: 4, avatar: av4, name: "PHA/DOT", Liquidity: "$ 513 017 336", Lock: "$ 3 017 336", ROI: "+ 2.43%", ROI2: "- 32.43%", Rewards: C4e6D40eDD846F38351, plusminus: "+ 2.43%", },
        { id: 5, avatar: av5, name: "CAKE/USDT", Liquidity: "$ 513 017 336", Lock: "$ 3 017 336", ROI: "+ 2.43%", ROI2: "- 32.43%", Rewards: C4e6D40eDD846F38351, AplusminusPR: "135 017", plusminus: "--", }
    ]

    return (
        <div className={styles.wrapCoin}>
            <div className={styles.Tat}>
                <div className={styles.wrapTitle}>
                    <h1>
                        Yield Farming
                    </h1>
                    <Link to="#">Смотреть все</Link>
                </div>
                <div className={styles.wrapCoinList}>

                    <div className={styles.overFlowFor}>
                        <div className={styles.wrapCoin} >
                            <div className={styles.CoinList}>
                                <span>#
                                    <img src={strel} alt="" style={{ marginLeft: "2px" }} />
                                    &nbsp;&nbsp;&nbsp;Name
                                </span>
                                <span>Liquidity</span>
                                <span>Lock</span>
                                <span>ROI 7d</span>
                                <span>ROI 1y</span>
                                <span>Rewards</span>
                                <span>+/-</span>
                                <button>Инвестировать</button>
                            </div>
                            {objCoin.map(i => {
                                return (
                                    <div className={styles.Element} key={i.id} >
                                        <span>{i.id} <img src={i.avatar} alt="" /> {i.name}</span>
                                        <span>{i.Liquidity}</span>
                                        <span>{i.Lock}</span>
                                        <span>{i.ROI}</span>
                                        <span>{i.ROI2}</span>
                                        <span><img src={i.Rewards} alt="" /></span>
                                        <span>{i.plusminus}</span>
                                        <button>Инвестировать</button>
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

export default YieldFarming;



