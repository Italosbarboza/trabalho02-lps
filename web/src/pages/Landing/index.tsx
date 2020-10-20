import React from 'react';
import logoImg from '../../assets/images/logo2.svg';
import landingImg from '../../assets/images/leilao.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

function Landing() {

    return (
        <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div id="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de leilão da Black Friday, o menor valor único leva</h2>
            </div>

            <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"
            />

            <div className="buttons-container">
                <Link to="/lances" className="study">
                <img src={studyIcon} alt="Estudar"/>
                Ver menor lance
                </Link>

                <Link to="/fazer-lance" className="give-classes">
                <img src={giveClassesIcon} alt="Estudar"/>
                Dar lance
                </Link>
            </div>

            <span className="total-connections">
                Leilão válido apenas para a black friday
            </span>
        </div>
      </div>
    )
}

export default Landing;