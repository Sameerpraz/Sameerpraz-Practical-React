import IdleTimer from "react-idle-timer";

import React, { useState, useRef } from 'react';
import Modal from "react-modal";


Modal.setAppElement('#root')
function IdleTimerContainer() {
    // isLoggedIn is set to True
    const [isLoggedIn, setIsLoggedOut] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idelTimeRef = useRef(null)
    const sessionTimeoutRef = useRef(null)

    const onIdle = () => {
        console.log("User is idle")
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 2000)
    }
    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
    }
    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedOut(false)
        clearTimeout(sessionTimeoutRef.current)
    }
    return (
        <div>
            {/* JSX */}
            {
                isLoggedIn ? <h2>Hello Sameer</h2>: <h2>Hello Guest</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h1>You have been idel for a while.</h1>
                <p>You will be log out soon</p>
                <div>
                    {/* set setIsLoggedOut to false which means isLoggedIn is True */}
                    <button onClick={logOut}>Log me out </button>

                    {/* set setModalIsOpen to false which means isLoggedIn is by default True  and close modal*/}
                    <button onClick={stayActive}>Stay Active</button>
                </div>
            </Modal>
            {/* if user stay idle for (5*1000) sec then onIdle is called*/}
            <IdleTimer 
                ref={idelTimeRef} 
                timeout={5* 1000} 
                onIdle={onIdle}
            >

            </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
