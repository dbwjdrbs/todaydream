import React from 'react';
import ChatBalloon from '../components/ChatBalloon.tsx';
import resultData from '../static/resultData.tsx';
import Button from '../components/Button.tsx';
import { Link } from 'react-router-dom';
import '../styles/result.css';

function InterpretationResult() {
    return (
        <div className='background-morning'>
            <div className='result-cat'>
                <ChatBalloon
                    message={resultData} />
            </div>
            <div className='bottom'>
                <Link to={'/dream-interpretation'}>
                    <Button
                        name='result'
                        mode='result'
                        draggable={true}>
                    </Button>
                </Link>
                <div className='blank'/>
                <Button
                    name='share'
                    mode='share'
                    draggable={true}>
                </Button>
            </div>
        </div>
    );
}

export default InterpretationResult;