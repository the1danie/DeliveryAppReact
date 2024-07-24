import React from 'react';
import Man from '../../../../assets/man.png';
import Woman from '../../../../assets/Avatar.png';
import './TrackerComments.css'

const TrackerComments = () => {
    return (
        <div style={{marginLeft: '17%', marginTop: '30px', display: 'flex', flexDirection: 'column'}}>
            <h4>Комментарии к заказу (13)</h4>
            <div style={{display: 'flex', marginTop: '20px', gap: '20px'}}>
                <img src={Man} alt="" height='40px' width='auto'/>
                <p style={{marginTop: '5px'}}>Иван Иванов</p>
            </div>
            <div style={{
                border: '1px solid #eee',
                padding: '10px',
                borderRadius: '20px',
                paddingLeft: '20px',
                paddingRight: '20px',
                marginTop: '10px'
            }}>
                <p style={{color: 'grey', fontSize: '15px', marginTop: '5px'}}>Комментарий</p>
                <h5 style={{fontSize: '20px'}}>Текст комментария может быть в нескольких строках</h5>
            </div>
            <div style={{display: 'flex', marginTop: '30px', gap: '20px'}}>
                <img src={Woman} alt="" height='40px' width='auto'/>
                <p style={{marginTop: '5px'}}>Ирина Иванова</p>
            </div>
            <div style={{
                border: '1px solid #eee',
                padding: '10px',
                borderRadius: '20px',
                paddingLeft: '20px',
                paddingRight: '20px',
                marginTop: '10px'
            }}>
                <p style={{color: 'grey', fontSize: '15px', marginTop: '5px'}}>Комментарий</p>
                <h5 style={{fontSize: '20px'}}>Текст комментария может быть в нескольких строках</h5>
            </div>

            <div style={{display: 'flex', marginTop: '30px', gap: '20px'}}>
                <img src={Man} alt="" height='40px' width='auto'/>
                <p style={{marginTop: '5px'}}>Иван Иванов</p>
            </div>
            <div style={{
                border: '1px solid #eee',
                padding: '10px',
                borderRadius: '20px',
                paddingLeft: '20px',
                paddingRight: '20px',
                marginTop: '10px'
            }}>
                <p style={{color: 'grey', fontSize: '15px', marginTop: '5px'}}>Комментарий</p>
                <h5 style={{fontSize: '20px'}}>Текст комментария может быть в нескольких строках</h5>
            </div>
        </div>
    );
};

export default TrackerComments;