import React from 'react';
import '../styles/global.css';
import '../styles/button.css';

type Props = {
    mode?: string;
    name: string;
    draggable: boolean;
}
// 버튼 width 글자 크기에 따라 늘어나도록 GPT 한테 커스텀 받기
const Button: React.FC<Props> = ({ mode, name, draggable }) => {
    let currentClass = 'pixel-btn-rounded';
    const currentDraggable = draggable ? ' draggable' : '';
    switch (mode) {
        case 'main':
            break;
        case 'result':
            currentClass = 'img-save-button';
            break;
        case 'share':
            currentClass = 'share-button';
            break;
        // css 만들고 조건 추가
    }

    // if(mode === 'result') {
    //     currentClass = 'example';
    // }

    return (
        <div>
            <button
                className={currentClass + currentDraggable}>{name}</button>
        </div>
    );
}

export default Button;