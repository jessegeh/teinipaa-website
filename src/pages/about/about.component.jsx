import React from 'react';
import promo from '../../images/Teini-Pää1-kuvaaja-Jonne-Sippola.jpg'
import '../../sass/main.scss';

const About = () => (
    <div>
        <div className='container container__about'>
            <div className="grid__cell 1/1 1/3--desk 1/2--lap">
                <div className="container container__about container__about--text">
                    <p><b>TEINI-PÄÄ</b> on vuonna 2018 perustettu nössöpunk & teenage dream -bändi.
                Bändi julkaisi ensimmäisen tuplasinkkudemonsa jouluaattona 2018 ja lähti sen jälkeen keikkailemaan ympäri Suomea.
                Bändin debyytti-EP <b>"Täynnä kysymyksiä"</b> julkaistiin syksyllä 2019.
                Teini-Pää on äänittänyt uuden seiskatuumaisen ja se näkee päivänvalon kesällä 2020!
                Maistiasia tuolta levyltä tulee kuitenkin nettiin jo hyvin pian! Uu, jee! <br />
                        <br />
                        <b>Menneet keikat:</b> <br /><br />
                        <b>25.1.2020</b> Lepakkomies, Helsinki <br />
                        <b>3.1.2020</b> Bar Loose, Helsinki <br />
                        <b>31.12.2019</b> Goosebumbs Records, Helsinki <br />
                        <b>7.12.2019</b> Maunulatalo, Helsinki <br />
                        <b>25.10.2019</b> Kirjakahvila, Turku <br />
                        <b>12.10.2019</b> Oranssi, Helsinki <br />
                        <b>1.6.2019</b> Ravintola Cactus, Helsinki <br />
                        <b>18.5.2019</b> Joutomaafest x Pajafest, Kotka <br />
                        <b>13.4.2019</b> UUS HOI SIE, Lappeenranta <br />
                        <b>12.4.2019</b> Ravintola La Barre, Joensuu <br />
                        <b>6.4.2019</b> Hullu Mylly, Vieremä <br />
                        <b>5.4.2019</b> Terassi Pub Yläkerta, Tampere <br />
                        <b>16.3.2019</b> Oranssi, Helsinki <br />
                        <br />
                        <b>Tulevat keikat:</b> <br /> <br />
                Kaikki tulevat keikat peruttu tai siirtymässä uuteen ajankohtaan. Stay safe!
            </p>
                </div>
            </div>
            <div className="grid__cell 1/1 2/3--desk 1/2--lap">
                <div className="promo-wrapper">
                    <img className="promo" src={promo} alt="error" />
                </div>
            </div>
            <div className='credit'>
                <p>Kuva: Jonne Sippola</p>
            </div>
        </div>
    </div>
);

export default About;