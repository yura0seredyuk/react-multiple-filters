import React from 'react';
import './PsychologistCard.scss';

const PsychologistCard = ({ data }) => {

    return (
        <div className={'root'}>
            <p className={'name'}>{data.name}</p>
            <div className={'mainInfo'}>
                <p className={'infoText'}>{data.experience}</p>
                <p className={'infoText'}>{data.price}</p>
            </div>
            <div className={'line'}/>
            <div className={'additionalInfoContainer'}>
                <div className={'additionalInfo'}>
                    <p className={'detail'}>Город</p>
                    <p className={'detailInfo'}>{data.townLocation}</p>
                </div>
                <div className={'additionalInfo'}>
                    <p className={'detail'}>Формат</p>
                    <p className={'detailInfo'}>{data.format}</p>
                </div>
                <div className={'additionalInfo'}>
                    <p className={'detail'}>Язык</p>
                    <p className={'detailInfo'}>{data.lang}</p>
                </div>
            </div>
        </div>
    );
};

export default PsychologistCard;
