import React from 'react';
import promo from '../../images/Teini-Pää1-kuvaaja-Jonne-Sippola.jpg'
import '../../sass/main.scss';

const About = () => (
    <div>
        <h1 className='title'>TÄÄLLÄ LÖYTYY TIETOA TEINI-PÄÄSTÄ</h1>
        <div className='container container__about'>
            <div className="container container__about container__about--text">
                <p>Teini-Pää on vuonna 2018 perustettu nössöpunk & teenage dream -bändi. Bändi julkaisi ensimmäisen tuplasinkkudemonsa jouluaattona 2018 ja lähti sen jälkeen keikkailemaan ympäri Suomea. Bändin debyytti-EP "Täynnä kysymyksiä" julkaistiin syksyllä 2019. Teini-Pää on äänittänyt uuden seiskatuumaisen ja se näkee päivänvalon kesällä 2020! Maistiasia tuolta levyltä tulee kuitenkin nettiin jo hyvin pian! Uu, jee!
            </p>
            </div>
            <img className="promo" src={promo} alt="error" />
        </div>
    </div>
);

export default About;