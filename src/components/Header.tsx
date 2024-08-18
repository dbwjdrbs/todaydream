import React, { useState } from 'react';
import '../styles/global.css';
import { Link } from 'react-router-dom';
import Modal from './Modal.tsx';

const Header = () => {
    const [modalOpen, setModalOpen] = useState<boolean>();

    return (
        <div>
            <header>
                <div className='width-wrapper'></div>
                <Link to='/'><img id='logo' src={require('../assets/logo.png')} className='draggable-img' /></Link>
                <img
                    src={require('../assets/menu-bar.png')}
                    onClick={() => modalOpen ? setModalOpen(false) : setModalOpen(true)}
                />
            </header>
            <div>
                <Modal openModal={modalOpen}></Modal>
            </div>
        </div>
    );
}

export default Header;