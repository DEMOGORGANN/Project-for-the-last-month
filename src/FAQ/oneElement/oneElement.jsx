import React, { useState } from 'react'

import styles from './oneElement.module.css'

import Icosadn from './../../img/Icosadn.svg'

function OneElement() {

    const [actB, setActB] = useState(false)
    const [actAr, setActAr] = useState(false)

    return (
        <div className={styles.wrapFAQElem}>

            <div className={styles.nameRules}
                onClick={() => {
                    setActAr(!actAr)
                    setActB(!actB)
                }} >
                <span
                    className={styles.accordion}
                    style={actB === true ? { color: "#00D632" } : null}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </span>
                <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                    <img src={Icosadn} alt="" />
                </div>
            </div>
            <hr />
            <div className={actB === true ? styles.active : styles.panel}>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
        </div >
    );
}

export default OneElement;



