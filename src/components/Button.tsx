import React from 'react';
import '../styles/global.css';
import '../styles/button.css';

type Props = {
    sizeType?: string;
    name: string;
    draggable: boolean;
}
// 버튼 width 글자 크기에 따라 늘어나도록 GPT 한테 커스텀 받기
const Button: React.FC<Props> = ({ sizeType, name, draggable }) => {
    const currentClass = 'pixel-btn-rounded';
    const currentDraggable = draggable ? ' draggable' : '';
    switch (sizeType) {
        case 'main':
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