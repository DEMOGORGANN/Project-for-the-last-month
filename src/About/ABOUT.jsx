import React from 'react'

import styles from './FAQ.module.css'

import icons8faq1 from './../img/Vecsadtor.svg'


import OneElement from './oneElement/oneElement';

function ABOUT() {


    return (
        <div className={styles.wrapfull}>

            <div className={styles.wrapBlcok}>
                <div className={styles.TitleFAQ}>
                    <img src={icons8faq1} alt="" />
                    <span>About</span>
                </div>
                <div className={styles.wrapFAQ} style={{ overflow: "inherit" }}>


                    <div className={styles.sad}>
                        <OneElement />
                        <OneElement />
                        <OneElement />
                        <OneElement />
                        <OneElement />
                        <OneElement />
                        <OneElement />

                    </div>
                </div >
            </div>
        </div>
    );
}

export default ABOUT;



