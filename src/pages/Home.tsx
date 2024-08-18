import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/home.css';
import TodayTMI from '../components/TodayTMI.tsx';
import tmiDatas from '../static/tmiData.tsx';
import Button from '../components/Button.tsx';

const Home = () => {
    const randomTmiIdx = Math.floor(Math.random() * tmiDatas.length);
    return (
        <div className='background-night'>
            <div className='main-cat'>
                <TodayTMI
                    content={tmiDatas[randomTmiIdx]} />
                <Link to={'/dream-interpretation'}>
                    <Button
                        name='start'
                        draggable={true} />
                </Link>
            </div>
        </div>
    );
}

export default Home;