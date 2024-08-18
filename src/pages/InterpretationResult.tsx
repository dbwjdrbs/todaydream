import React from 'react';
import ChatBalloon from '../components/ChatBalloon.tsx';
import resultData from '../static/resultData.tsx';
import Button from '../components/Button.tsx';
import { Link } from 'react-router-dom';

function InterpretationResult() {
    return (
        <div className='background-morning'>
            <div className='main-cat'>
                <ChatBalloon
                    message={resultData} />
                <Link to={'/dream-interpretation'}>
                    <Button
                        name='start'
                        draggable={true} />
                </Link>
            </div>
        </div>
    );
}

export default InterpretationResult;