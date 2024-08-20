import React, { useState } from 'react';

import arrow from './SelectMenu_Img/arrow.png'
import facebook from './SelectMenu_Img/facebook.png'
import instagram from './SelectMenu_Img/instagram.png'
import pinterest from './SelectMenu_Img/pinterest.png'
import twitter from './SelectMenu_Img/twitter.png'
import whatsapp from './SelectMenu_Img/whatsapp.png'
import youtube from './SelectMenu_Img/youtube.png'



const SelectMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectOptions, setSelectOptions] = useState('Select Social Media');

    const toggleList = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionclick = (text) => {
        setSelectOptions(text);
        setIsOpen(false)
    };

    return (
        <div className='hero'>
            <div className='selecter'>
                <div id='SelectedFiled' onClick={toggleList}>
                    <p id='selectedList' >{selectOptions}</p>
                    <img src={arrow} alt="Arrow" id='arrowIcon' className={isOpen ? 'rotate' : ""} />
                </div>
                <ul id='list' className={isOpen ? '' : 'hide'}>
                    <li className='options' onClick={() => handleOptionclick("Facebook")}>
                        <img src={facebook} alt="" />
                        <p>Facebook</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Instagram")}>
                        <img src={instagram} alt="" />
                        <p>Instagram</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Pinterest")}>
                        <img src={pinterest} alt="" />
                        <p>Pinterest</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Twitter")}>
                        <img src={twitter} alt="" />
                        <p>Twitter</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("whatsapp")}>
                        <img src={whatsapp} alt="" />
                        <p>Whatsapp</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Youtube")}>
                        <img src={youtube} alt="" />
                        <p>Youtube</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SelectMenu;