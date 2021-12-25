import React from 'react'

import styles from './mainBlocks.module.css'

import ExChangeValue from './ExChangeValue/ExChangeValue'
import SettingsChange from './SettingsChange/SettingsChange';
import CoinList from './CoinList/CoinList';
// import Pools from './Pools/Pools';
// import YieldFarming from './YieldFarming/YieldFarming';

function MainBlock({ visible, setVisible }) {

    return (
        <div className={styles.wrapMainBlock}>

            <div className={styles.firstTwoBlock}>
                <ExChangeValue />
                <SettingsChange
                    visible={visible}
                    setVisible={setVisible} />
            </div>
            <CoinList />
            {/* <Pools /> */}
            {/* <YieldFarming /> */}

        </div>
    );
}

export default MainBlock;
