import React, { useState, useEffect } from 'react'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './../Header/Header'
import BurgerMenu from './../burgerMenu/burgerMenu'
import MainBlock from '../mainBlocks/mainBlocks';
import FAQ from '../FAQ/FAQ';
import ABOUT from '../About/ABOUT';
import ModalLickv from '../ModalLickv/ModalLickv';

import styles from './App.module.css'
import './normolize.css'

function App() {

  const [ModalVisibl, SetModalVisib] = useState(false)
  const [actSel, setActSel] = useState()
  const [auth, setAuth] = useState(true)
  const [visible, setVisible] = useState(false)
  const [closBut, setClosBut] = useState("d")

  useEffect(() => {
    document.querySelector("body").style.overflow = ModalVisibl ? "hidden" : "auto";
  }, [ModalVisibl])


  useEffect(() => {
    window.onscroll = () => {
      setActSel(true)
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.App}
        onClick={() => {
          setActSel(true)

        }} >
        <ModalLickv
          visible={ModalVisibl}
          setVisible={SetModalVisib}
          visibles={visible}
          setVisibles={setVisible} />
        <BurgerMenu
          SetModalVisib={SetModalVisib}
          actSel={actSel}
          setActSel={setActSel}
          auth={auth}
          closBut={closBut}
          setClosBut={setClosBut} />

        <div className={styles.mainBlock}>
          <Header
            SetModalVisib={SetModalVisib}
            actSel={actSel}
            setActSel={setActSel}
            auth={auth}
            setAuth={setAuth}
            closBut={closBut}
            setClosBut={setClosBut} />


          <Routes>

            <Route exact path="/" element={<MainBlock
             visible={visible}
              setVisible={setVisible}
            />} />

            <Route exact path="/FAQ" element={<FAQ />} />

            <Route exact path="/About" element={<ABOUT />} />


            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
