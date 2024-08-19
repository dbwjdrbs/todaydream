import React from 'react';
import '../styles/global.css';
import '../styles/button.css';

type Button = {
    mode?: string;
    name: string;
    draggable: boolean;
}
// 버튼 width 글자 크기에 따라 늘어나도록 GPT 한테 커스텀 받기
const Button: React.FC<Button> = ({ mode, name, draggable }) => {
    let currentClass:string = 'pixel-btn-rounded';
    const currentDraggable:string = draggable ? ' draggable' : '';
    switch (mode) {
        case 'main':
            break;
        case 'result':
            currentClass = 'example';
            break;
    }

    return (
        <div>
            <button
                className={currentClass + currentDraggable}>{name}</button>
        </div>
    );
}

export default Button;