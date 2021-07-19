import React, {CSSProperties, FC} from 'react';

interface ICloseProps {
    width: string;
    height: string;
}

const Close: FC<ICloseProps> = ({width = '28px', height = '28px'}) => {
    const style: CSSProperties = {
        fill: 'none',
        stroke: '#bbb8b8',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '3px'
    }

    return (
        <svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <g id="cross">
                <line style={style} x1="7" x2="25" y1="7" y2="25"/>
                <line style={style} x1="7" x2="25" y1="25" y2="7"/>
            </g>
        </svg>
    );
};

export default Close;