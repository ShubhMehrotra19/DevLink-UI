"use client";
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Cardfront from '@/components/CardComponent/cardFront_demo';
import CardBack from '@/components/CardComponent/cardBack_demo';
import { useMediaQuery } from '@react-hook/media-query';
import Cardfront_mobile from '@/components/CardComponent/cardFront_mobile';
import Cardback_mobile from '@/components/CardComponent/cardBack_mobile';

interface Props {}

function CardFlip(props: Props) {
    const {} = props;
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [isFlipped, setIsFlipped] = useState(false);
    const flipDirection = isMobile ? 'horizontal' : 'vertical';

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={flipDirection}>
            <div onClick={handleClick}>
                {isMobile ? <Cardfront_mobile /> : <Cardfront />}
            </div>

            <div onClick={handleClick}>
                {isMobile ? <Cardback_mobile /> : <CardBack />}
            </div>
        </ReactCardFlip>
    );
}

export default CardFlip;
