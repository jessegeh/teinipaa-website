import React from 'react';
import ReactPlayer from 'react-player';
import '../../sass/main.scss';

const ZinePage = () => (
    <div className='wrapper'>
        <div className="grid__cell 1/1 2/3--desk 1/2--lap">
            <div className='zine-wrapper'>
                <h1 className='title'>TERVETULOA TEINI-PÄÄN ZINEN PARIIN!</h1>
                <div className='intro'>
                    <p><i>Täällä julkaistaan haastatteluja, artikkeleita ja muuta zinemäistä sisältöä! Ensimmäisenä juttuna <b>Teini-Sara</b> haastatteli <b>Tvärtom</b>-yhtyettä. Haastattelu tapahtui 25.3.2020 messengerissä, koska ihmisten näkeminen ei ole juuri nyt sallittua!
                </i></p></div>
                <p>
                    <b>morjesta pöytään! kasin maissa olis siis tarkotus alottaa tvärtom-haastis, sanokaa vaan sitte ku ootte ready niin alotetaan, ei kiirettä tai ressiä!</b>
                <br />
                    <br />
                    <b>Kristina:</b> mä haen vielä appelsiinin ja vettä!
                <br />
                    <br />
                    <b>Joel:</b> Hihi. Eka haastis.
                <br />
                    <br />
                    <b>mua jännittää!</b>
                <br />
                    <br />
                    <b>Kristina:</b> jollain naapurillani on lauluharrastus. laulaa “Nyt riemuiten tänne” joululaulua
                <br />
                    <br />
                    <b>kohtahan on jo joulu!</b>
                <br />
                    <br />
                    <b>Kristina:</b> ei ole hyvä laulaja. mutta hyvä että laulaa, se on kiva harrastus.
                <br />
                    <br />
                    <b>Eni:</b> joo tässä ollaan varmaan vielä jouluna karanteenissa että ihan sama mitä sesonkia juhlii:/
                <br />
                    <br />
                    <b>noniin jos ootte valmiita koitokseen niin täältä. pesee. kiva että suostuitte haastatteluun, ootte ihana bändi! elikkäs ensimmäinen kysymys: miten tvärtom sai alkunsa?</b>
                <br />
                    <br />
                    <b>Eni:</b> Joel ja Minna (Hulda Huima) tais ihan ensiksi puhua asiasta?
                <br />
                    <br />
                    <b>Joel:</b> Joo. Minna olisi halunnut että mä opetan sille kitaransoittoa, mutta mä en osaa opettaa ja ehdotin sen sijaan että perustetaan bändi. Minna tosin sittemmin jäi ajanpuutteen vuoksi pois ekojen treenien jälkeen, mutta tein ekat biisit aika lailla samantien sen jälkeen kun tästä puhuttiin.
                <br />
                    <br />
                    <b>Eni:</b> me soitettiin hetki joelin ja kristinan kanssa kolmestaan minnan lähdettyä.
                <br />
                    <br />
                    <b>Joel:</b> Tuulia tuli mukaan noin vuosi sitten.
                <br />
                    <br />
                    <b>Kristina:</b> Joel ja Minna pyysivät minua mukaan, kun olivat huomanneet, että olin alkanut soittamaan rumpuja bändileirillä!
                <br />
                    <br />
                    <b>tunsitteko toisenne entuudestaan vai ootteko tutustuneet/ystävystyneet tvärtomin myötä? heittelen tähän lisäkysymyksiä näköjään nyt kun tulee mieleen ja kiinnostaa!</b>
                <br />
                    <br />
                    <b>Kristina:</b> Minä ja Joel tunnetaan toisemme musafoorumilta ja asuttiin samassa kommuunissa tovi!
                <br />
                    <br />
                    <b>Eni:</b> mä tutustuin joeliin hetki ennen tvärtomia ja soittaminen tuli aika nopeasti puheeksi, koska mulla oli nurkissa jo basso, enkä soittanut missään, mutta oli pitkään tehnyt mieli
                <br />
                    <br />
                    <b>Joel:</b> Joo, uus bändi oli ehtinyt jo kummitella siinä.
                <br />
                    <br />
                    <b>Eni:</b> tuntui että hyvin kohtasi se millasta tekis mieli soittaa, ja joelillahan oli jo siinä suunnitelmiakin bändille. tapasin itse muut tän kautta sitten
                <br />
                    <br />
                    <b>Joel:</b> Kun oltiin kolmistaan soitettu muutama kuukausi, niin aloin kaipaamaan toista kitaristia ja aika brutaalisti somessa kuulutettiin asiaa. Minnan bändissä soittava Aleksi sitten tiesi Tuulian. Sä [Tuulia] olit kans aika vastikään muuttanut silloin.
                <br />
                    <br />
                    <b>Tuulia:</b> Joo olin just tuota mitä Aleksi sanoi, sori oon hidas!
                <br />
                    <br />
                    <b>ei haittaa, saa olla :)</b>
                <br />
                    <br />
                    <b>Tuulia:</b> siis tuosta mitä Joel sanoi liittyen Aleksiin :D että olin muuttanut 2018 lopulla Helsinkiin, alkuvuodesta 2019 päivittelin kaljalla Aleksille että oispa bändi ja sit Aleksi ties vinkkaa että no mites tämmönen, laita näille viestiä kun oli ilmotus Facebookissa
                <br />
                    <br />
                    <b>Eni:</b> meistä oli kyllä heti kiva soittaa tuulian kanssa. musta ainaki tuntu että yhteissoitto koko porukalla sitten löytyi nopeesti
                <br />
                    <br />
                    <b>Kristina:</b> ja minä taas päädyin bändileirille sitä kautta että huomasin että Juuso Paaso pisti someen, että leirillä on peruutuspaikka! Eli Hulda Huiman bändillä on ollut hurjakin vaikutus Tvärtomin syntyyn! :D
                <br />
                    <br />
                    <b>Tuulia:</b> oli niin kiva löytää noi! jännitti ihan sikana mennä “koesoittamaan” mut sit paljastuikin että ihan tosi sydämellisiä tyyppejä ja hyvä meno
                <br />
                    <br />
                    <b>Eni:</b> timantinkovan ammattimaiset koesoittajaiset
                <br />
                    <br />
                    <b>bändi- ja musahommissa ihmisiin tutustuminen on kyllä yks tän homman parhaita puolia itestä. entä minkälainen on teidän biisientekoprosessi, miten teidän biisit syntyy? (ja ps. jos tulee jotain mieleen edellisistä kysymyksistä tai muutoin jää sanottava kesken niin kirjottakaa rauhassa jos oon liian nopee!)</b>
                <br />
                    <br />
                    <b>Kristina:</b> (annan Joelin vastata tähän :) )
                <br />
                    <br />
                    <b>Joel:</b> Apua. Oon tehnyt tähän mennessä aika lailla itsekseni biisejä, demottanut niitä ja soittanut treeniksellä. Kotona tulee jauhettua paljon sointukertoja.
                <br />
                    <br />
                    <b>Eni:</b> Joel on tehny demoja tosiaan ja niistä lähdetään. musta se on ollu palkitsevaa että alusta asti ollaan ryhdytty nopeesti soittamaan niitä yhteen, vaikka se olis ensin pitkään vaan sointukierron opettelua ja sellasta
                <br />
                    <br />
                    <b>Kristina:</b> bändin kanssa sitten tuodaan omat elementtinne mukaan ja työstetään yhdessä mm. taustalaulujen stemmoja kaikki yhdessä
                <br />
                    <br />
                    <b>Joel:</b> Joo. Ekat stemmatreenit oli tosi maaginen kokemus kun biisejä lähestyi porukalla pelkän kitaran säestyksellä.
                <br />
                    <br />
                    <b>Eni:</b> samaa mieltä joo
                <br />
                    <br />
                    <b>Joel:</b> En osaa biisien syntyprosessia sen kummemmin avata. Niitä biisejä on aina vähän tipahdellut silloinkin kun on soittanut aktiivisemmin jotain muuta musiikkia kuin tällaista poppia. Niitä on tavallaan aina tullutkin, mutta tarvii olla jokin konkreettinen syy, kuten bändi, että niitä saa tehtyä mitenkään määrätietoisemmin
                <br />
                    <br />
                    <b>sit ehkä vois siirtyä menneisyyden muistelusta nykyhetkeen tai tulevaisuuteen. mistä tvärtom unelmoi tällä hetkellä, minkälaisia suunnitelmia esim. loppuvuodelle?</b>
                <br />
                    <br />
                    <b>Kristina:</b> Suunnitelmia... Toivottavasti ainakin päästään keikkailemaan taas pian! ...Voiko tähän kertoa että Järkytys menee sen yhden zinen kokoelmalevylle?
                <br />
                    <br />
                    <b>Joel:</b> Joo! Vähän yllättäen New Yorkin Albertassa toimiva Cloudberry Records sisällyttää meidän viimeisen singlen fanzinensa seuraavaan numeroon. Se on aika jännää.
                <br />
                    <br />
                ...Anteeksi, Astoriassa. Liekö koko New Yorkin osavaltiossa Albertaa ollenkaan.
                <br />
                    <br />
                Uusia biisejä oon pyöritellyt ja niitä ois kiva päästä työstämään. Pitkäsoittokin on alkanut muhimaan mielessä, mutta se olemassa vasta joissakuissa hätäisissä muistiinpanoissa. Ja puheena ilmassa. Siihen tulis biisejä, mitä on tähän asti soitettu kaikilla keikoilla ainakin. Järkytyksen sessioista on myös yksi biisi keskeneräisenä.
                <br />
                    <br />
                    <b>Kristina:</b> ja yks biisi on puoliksi nauhalla, ilmestynee ennen levyä myös? Joel kirjoittikin jo eri sanoin :)
                <br />
                    <br />
                    <b>Joel:</b> En oo oikein vielä päättäny et julkaistaanko se. Se ois ollut kiva tehdä siihen zinekokoelmaan, mut ei keretty.
                <br />
                    <br />
                    <b>tulispa se pian! ja levy myös!</b>
                <br />
                    <br />
                    <b>Joel:</b> Se oli laulettu vähän sinnepäin ja tekstikin tökki. Sain sen nykyisen version valmiiksi ihan samoihin aikoihin kun tää zinehomma tuli. Sitä ei ole treeneissäkään vielä kuultu.
                <br />
                    <br />
                    <b>Mikä on teidän lemppari Tvärtom-keikka?</b>
                <br />
                    <br />
                    <b>Joel:</b> Oranssilla Girls Rock Finlandin tukikeikalla oli mun mielestä aika lailla paras tähän mennessä. Baarikeikat on aina omalla tavallaan jännittäviä, kun ne on niin jähmeitä paikkoja. Oranssilla on usein tunnelma paljon lämpimämpi.
                <br />
                    <br />
                    <b>Eni:</b> ensimmäinen keikka tenhossa oli mulle henkilökohtaisesti tärkein. se oli ensimmäinen kerta kun soitan minkään bändin kanssa minkään keikan ikinä. lavalla oli ihan hirveetä olla, mutta onnistuminen jäi päällimmäiseksi mieleen.
                <br />
                    <br />
                    <b>Tuulia:</b> Ite tykkäsin paljon Cactuksen keikasta. Ja Vastavirran yläkerran keikasta! Tampere best. Nää oli kans kummatkin syksyllä 2019.
                <br />
                    <br />
                    <b>Joel:</b> Tenho oli hirveän jännä, mutta siellä on maailman ihanin äänihenkilö.
                <br />
                    <br />
                    <b>Eni:</b> itelle myös vastavirran yläkerta oli tärkeä, koska se taas oli ensimmäinen kerta kun lähdettiin toiseen kaupunkiin, ja vastis on muutenkin sydäntä lähellä
                <br />
                    <br />
                    <b>Tuulia:</b> Cactus koska silloin oli eka kertaa itellä suht mukava olo siellä lavalla että ei jännittänyt tai ahdistanut liikaa ja tuntui että soitto kulki hyvin. VV:n yläkerta koska se on itelle rakas ja nostalginen paikka ja siellä oli kotoisa tunnelma
                <br />
                    <br />
                    <b>Joel:</b> Yläkerta oli mulle yks jännittävimpiä keikkoja tähän mennessä, just samoista syistä kuin Enillä.
                <br />
                    <br />
                    <b>Kristina:</b> Mä tykkäsin Loosen keikasta itse! Varmaan sen vuoksi, että oli jo pidemmän rumpaloinnin myötä varmempi ote itse soittamiseen ja laulettiin enemmän myös taustoja kuin aikaisemmin. ja tein yhden meidän fanin mielestä jonkun tosi hienon rumpujutun! ei vaan muistanut missä biisissä, vain sen että silloin oli punaiset valot!
                <br />
                    <br />
                    <b>Joel:</b> Loosessa olin ihan romuna kun mun isä oli paikalla. Lätäkön laulaminen oli ihan hirveetä siinä tilanteessa, kun se on niin sydän hihassa biisi.
                <br />
                    <br />
                    <b>Eni:</b> Loose oli munkin mielestä rennoin tähän mennessä niinkun kristina sanoit. lavalla oli ehkä ensimmäistä kertaa ihan mukavaa. ja sielläkin oli jotain "ensimmäistä kertaa", nimittäin eka kerta kun lauloin ihmisten kuunnellessa mikkiin.
                <br />
                    <br />
                Kaikki keikat on tähän mennessä ollu sikäli antoisia että niissä on ollu meille melkein jokaisessa jotakin uutta. Ollaan lisätty biisejä, stemmoja, tms. tai paikka on uusi.
                <br />
                    <br />
                    <b>Joel:</b> Tuo on kyllä hyvä pointti. Kaikista keikoista jäänyt tosi hyvä mieli loppujen lopuksi. Flagonin keikka Too Slown kanssa oli omalla tavallaan myös tosi jännä, kun mentiin törkeästi räkälän nurkkaan soittamaan indiepoppia.
                <br />
                    <br />
                    <b>Eni:</b> Se oli seikkailu kyllä.
                <br />
                    <br />
                    <b>tenhon keikka on ehkä mun suosikkikeikkoja teiltä! tossa puhuittekin sopivasti jo vähän kotikaupungin ulkopuolella keikkailuista, joten seuraa tärkeä kysymys: mitkä on parhaat eväät keikkareissuilla?</b> 
                <br />
                    <br />
                    <b>Eni:</b> Parhaat keikkaeväät tähän mennessä on ehkä ollu kristinan antamat beetasalpaajat täytyy sanoa. Ja tenhon unohtumattomat pizzat. Vielä ei oo rutinoitunu itellä ainakaan eväspakkaukset.
                <br />
                    <br />
                    <b>Kristina:</b> Joo. Beetasalpaajat.
                <br />
                    <br />
                    <b>Eni:</b> T. nynnyt, jännittää
                <br />
                    <br />
                    <b>Kristina:</b> t: en juo edes alkoholia
                <br />
                    <br />
                    <b>Joel:</b> Joo. Vähän sama. En oo minkään bändin kanssa kauheasti käynyt Helsingin ulkopuolellakaan, niin sellasta go-to survival packia ei ole vielä ehtinyt kehittymään. Päihteitä voi tietty halutessaan, mut oon huomannut et mitä vähemmän sen parempi.
                <br />
                    <br />
                    <b>Kristina:</b> beetasalpaajatkin vähän jännitti jo, että jos onkin vetänyt liikaa :D
                <br />
                    <br />
                    <b>Joel:</b> Tykkään juoda kahvia ennen keikkaa, mutta kahviövereissä soittaminen on vähän turhan levotonta. Siksi tarvitsisi just hyvät eväät. Joku just kertoi että kahviövereihin toimii banaani. Eli banskut ainakin ostoslistalle tähtä lähtien.
                <br />
                    <br />
                    <b>Krisitina:</b> vau!
                <br />
                    <br />
                    <b>beetasalpaajat best! niitä on tullut itsekin vedeltyä. batterya ei kannata juoda ennen keikkaa, ainakaan yhtä enempää sen olen todennut.</b>
                <br />
                    <br />
                    <b>Eni:</b> kyllä mä pidän kaljaakin mukana
                <br />
                    <br />
                    <b>Sit oon miettinyt paljon sellasta, että kuka on tvärtom-kasetin kannessa oleva kissa?</b>
                <br />
                    <br />
                    <b>Eni:</b> huh battery joo varmaan hc. hoho nyt oikein se kissan nimi
                <br />
                    <br />
                    <b>Joel:</b> Kääk… Kissa on Kari Kieloston ja tämän kumppanin luona asuva Vesna Nilüfer
                <br />
                    <br />
                    <b>Kristina:</b> Kissan nimi itseasiassa mainitaan kasetin crediteissä!
                <br />
                    <br />
                    <b>Joel:</b> Joo, mut se on väärin niissä kansissa. Ehdin korjata sen bandcampiin ja soundcloudiin, mut kasetille ei ehtinyt. Jos otetaan toinen painos, niin siihen kyllä korjaan.
                <br />
                    <br />
                    <b>lol, niinpä mainitaankin!</b>
                <br />
                    <br />
                    <b>Joel:</b> Seiskallehan se EP mahtuisi myös (mikäli kellään on varaa kustantaa, hehe). Seiskan painattimen on vaan niin hinnoissaan.
                <br />
                    <br />
                    <b>se on kyllä. no jos ei seiskaa tai muuta oo ihan heti tulossa, niin milloin saa tvärtom-fanituotteita??</b>
                <br />
                    <br />
                    <b>Kristina:</b> kääk!
                <br />
                    <br />
                    <b>Joel:</b> Ei kyllä ole ollut puhetta. En ole itse ikinä ollut mikään kovin viitseliäs visuaalisella puolella. En oo piirrellyt bändin logoja vihkoihin tai mitään. Too Slowssa ja Palmpillowsissa ja ties missä soittava ja lauava Iiro, jolla on toi graffittikulttuuri hirveän hyvin hallussa, joskus kannusti tarrakampanjaan, mut en oo saanu aikaiseksi hommata mitään tusseja tai tarra-arkkeja.
                <br />
                    <br />
                    <b>...tai onko teillä tietoa tulevista keikoista? (aiemmista vastauksista päättelin, että ehkä ei?)
                <br />
                    <br />
                    <b>Joel:</b> Ei kyllä mitään tietoa tässä vaiheessa. Toukokuulle oli suunnitteilla jotain, kunne Vastis ilmoitti menevänsä kiinni. Nythän ne on vissiin samantien jossain taloudellisissa vaikeuksissa. Niillä on kai jokin mesenaattikamppanja meneillään. Oispa ylimääräistä itsellä.</b> 
                <br />
                    <br />
                    <b>*toim. huom. Vastiksen mesenaattikampanjaan pääsee tutustumaan <a className='interview-link' href="https://mesenaatti.me/campaign/?id=1478#single/view">tästä</a>. Jos on yhtään ylimääräistä, niin kannattaa ihmeessä osallistua!*</b>
                    <br />
                    <br />
                    <b>Eni:</b> nyt on tosiaan jäissä kaikki niinku kaikilla
                <br />
                    <br />
                    <b>Joel:</b> Siis Vastikselle oli tosiaan suunniteltu, mutta mikäli se selviää, niin toivottavasti saadaan tapahtumaan myöhemmin.
                <br />
                    <br />
                    <b>Kristina:</b> Ja toivottavasti Lepiksen keikalle tulee myös uusi päivämäärä.
                <br />
                    <br />
                    <b>Joel:</b> Ei taida kyllä kellään olla keikkaa tiedossa hetkeen. Jokin striimilive ois kiva tehdä. Tiedän et niil lepiksen järkkääjillä on nyt joku striimihomma vireillä yhdessä studiossa. Se vois olla hauska. Siis sen iltaman, missä piti soittaa.
                <br />
                    <br />
                    <b>striimilivelle full support! ollaan iteki mietitty sitä teinien kanssa kunhan vaan pääsis treenikselle joskus kun tämä maailman meininki vähän rauhottuu. mitä muuta te tykkäätte puuhailla silloin kun ette ole tvärtom-hommien parissa?</b>
                <br />
                    <br />
                    <b>Kristina:</b> välillä on muita musahommia. mulla oli nyt just yksi vanhan musiikin projekti ja sen puitteissa kaksi kirkkokonserttia. Sitä päätimme myös jatkaa ainakin jossain mittakaavassa. Ja aina välillä on Lau Naun kanssa kuorohommia myös. Mutta nyt ei ole muita säännöllisiä musahommeleita. Todellisuudessa viime päivinä sohva ja YouTube on olleet kovimmat jutut.
                <br />
                    <br />
                    <b>Tuulia:</b> Tällä hetkellä ei tuu paljoa mitään mieleen ko maailma ja elämä on niin pysähtynyttä :D töissä käyn. tykkään myös käydä keikoilla ja kivoissa diskoissa ja metsässä.
                <br />
                    <br />
                    <b>Joel:</b> Mä soitan viikoittain myös Rime-nimisessä bändissä kitaraa ja suuta. Se on kovaäänisempää ja jokseenkin dramaattisempaa musiikkia, mutta myös hämmentävällä ja omintakeisella melodisella otteella. Sitten soitan syntikoita Sandlådanissa, joka tosin toimii aika verkkaisesti. En käy töissä enkä ole koulussa, niin nyt vois tehdä kaikkea muutakin luovaa kun ei työkkärikään jaksa hengittää niskaan mistään. Kouluihn oon hakenut keväällä. En ole ollut työelämässä muutamaan vuoteen erinäisistä syistä. Diskoissa on kiva käydä ja keikoilla. Ja taidenäyttelyissä. Ja kirjastoissa käyminen on yksi parhaista asioista mitä voi tehdä.
                <br />
                    <br />
                    <b>Eni:</b> Mä laulan kirkkokuorossa, kallion kantaattikuoro. jos en oo noissa musaharrastuksissa tai museotöissä niin tykkään esimerkiksi kuunnella historiapodcasteja ja tehdä kevyttä lähiluontoretkeilyä. ennen tätä karanteeniaikaa tykkäsin myös käydä punk- ja hc-keikkoja kattomassa. tai siis karanteeni ja karanteeni, mutta eristysaikaa.
                <br />
                    <br />
                    <b>Joel:</b> Mä haluaisin kirjoittaa lisää. Se olisi sanoittamisen kannalta tärkeää. (random välikommentti)
                <br />
                    <br />
                    <b>Kristina:</b> minä datanörtteilen päivisin! lähinnä töissä kuitenkin. ja haluaisin soittaa enemmän viulua
                <br />
                    <br />
                    <b>sitten myös ei niin tvärtom/musa-aiheinen kysymys koska pidän elokuvista: mitkä on teidän lemppari elokuvat?</b> 
                <br />
                    <br />
                    <b>Eni:</b> voi ei. en ikinä osaa sanoa ja mulla on kauheat paineet että sen pitää olla JOKU SIISTI
                <br />
                    <br />
                    <b>Tuulia:</b> oijoi on montakin ja tosi eri syistä mutta nää oon katsonut miljoona kertaa: Donnie Darko, Tahraton mieli ja Goodbye Lenin, Tillsammans.
                <br />
                    <br />
                    <b>Kristina:</b> kääk. en tiedä osaanko vastata.
                <br />
                    <br />
                    <b>mihinkään ei oo pakko vastata jos on liian vaikee tai liian tyhmä kysymys!</b>
                <br />
                    <br />
                    <b>Kristina:</b> mä en ehkä ota ees painetta mutta en vaan keksi mikä ois silleen "lempielokuva"
                <br />
                    <br />
                    <b>Eni:</b> totta puhuen ensimmäisenä tuli mieleen, että yleensä kuitenkin haluun katsoa jotakin ruotsalaista tai joskus brittiläistä rikossarjaa, mieluummin parikymmentä vuotta vanhaa. uusien sarjojen nopeat leikkaukset ja säpinä ahistaa.
                <br />
                    <br />
                    <b>Joel:</b> Mä tykkäsin Granaattiomenan Väristä ihan mielettömän paljon. Oon nähnyt sen joku kolme kertaa teatterissa ja se on joka kerta sellanen visuaalinen täyslaidallinen, että se kummittelee päässä monta päivää.
                <br />
                    <br />
                    <b>Eni:</b> en mä keksi kyllä lempparia vaikka jonkun verran katsonkin
                <br />
                    <br />
                    <b>Kristina:</b> mä oon muutenkin enemmän tv-sarja addikti kuin elokuva-ihminen. enkä kyllä osaa sanoa mikä on edes lempisarja tv:ssä :D Ehkä Bob's Burgers! tai Broad City
                <br />
                    <br />
                    <b>joo, ei tarvi keksiä! sitten ois vielä pari kysymystä. mitkä on tvärtomin suositukset kotikaranteenilevyiksi näin sosiaalisen eristäytymisen aikana?</b>
                <br />
                    <br />
                    <b>Eni:</b> ei mitään dramaattisen angstista ehkä. viimeksi taisin kuunnella ite eurythmicsin ekaa levyä, mikähän sen nimi nyt onkaan
                <br />
                    <br />
                    <b>Kristina:</b> vähän riippuu mitä haluaa! Jos haluaa esim. hetkellisesti ahdistua lisää ja kokea jonkin puhdistautumisrituaalin niin sitten suosittelen Scott Walkerin 2000-luvun levyjä, myös Sunn O))):n kanssa tehtyä EP:tä.
                <br />
                    <br />
                    <b>Tuulia:</b> Broder Daniel: Broder Daniel Forever, mut jos liian synkkää nii sitte vaikka Tiiu Helinän Veli.
                <br />
                    <br />
                    <b>Eni:</b> semmonen valoisa unipop tuntui piristävältä
                <br />
                    <br />
                    <b>Joel:</b> Jos on hyviä soittolistoja tai menneisyydestä löytyy kokoelmakasetteja tai -cd:itä, niin ne on hyviä.
                <br />
                    <br />
                    <b>Kristina:</b> Itse olen kuunnellut enimmäkseen Yle Radio 1:stä. Saatan vaihtaa pois, jos sieltä tulee taas joku jumalanpalvelus, mutta en välttämättä silloinkaan. Niissäkin on jotain kiehtovaa ja kotoisaa.
                <br />
                    <br />
                    <b>Eni:</b> toi kokoelmakasettiajatus oli hyvä! siis jos on joku kompilaatio jonka joku muu tai itse on koonnut itselle ajatuksella ja lämmöllä joskus, niin mikä lohduttaisi paremmin
                <br />
                    <br />
                    <b>Joel:</b> Tuli muuten valoisasta unipopista mieleen et yks tän hetken suosikkibiisejä on Wojciechin Kylmäkäynnistys, Ystävät, Toverit albumilta. Ja saman bändin Haukotellaan (ollaan tylsää seuraa) on myös ihana.
                <br />
                    <br />
                    <b>Eni:</b> kristina sanoi ylen ykkösestä niin sama juttu, yleensä kuuntelen ykköstä. mulla on jotenkin geriatrinen maku monen asian suhteen. tykkään että asiat ilmaistaan asiallisesti ja rauhallisessa tempossa.
                <br />
                    <br />
                    <b>*tässä kohtaa keskustelu kääntyi taas Morse ja Midsomerin Murhat, sekä Poirot -tv sarjojen pariin. Keskustelua käytiin mm. Vanhan ja Nuoren Morsen eroista sekä etsittiin kuumeisesti “kuumottavaa pimputusta” joka esiintyy eräässä Vanhan Morsen jaksossa*</b>
                    <br />
                    <br />
                    <b>mulla ei oikeestaan oo enempää kysymyksiä, et jos haluutte vielä sanoa jotain, niin sana on vapaa... PAITSI tietty terveisiä saa mielellään lähettää!!</b>
                <br />
                    <br />
                    <b>Joel:</b> Mä voisin lähettää terveisiä Aleksille, joka on jaksanut äänitellä meitä pariin otteeseen ja on halukas äänittelemään jatkossakin. Ja Virpille, joka teki meidän musavideon. Ja Karille ja Vesna-kissalle. Joku piffillä just kertoi kissan olevan hyvä tyyppi. En ole häntä tavannut, mutta uskon.
                <br />
                    <br />
                    <b>Eni:</b> lähetän terveisiä niille parille ihan tuiki tuntemattomalle ihmiselle jotka on keikkojen jälkeen tullu sanomaan mulle kiitoksia tai kehuja. jäi ihan tosi hyvä mieli.
                    <br />
                    <br />
                    <b>Tuulia:</b> Terveisiä Pulla-kissalle ja Aleksille
                    <br />
                    <br />
                    <b>Kristina:</b> Jukka Pesoselle terveisiä!
                    <br />
                    <br />
                    <b>*toim. huom. tämän jälkeen “kuumottava pimputus” <a className='interview-link' href='https://youtu.be/e-z_6j0oldA?t=2950'>löytyi</a> ja keskustelu ajautui aivan muille raiteille, joten haastattelun oli parempi katsoa päättyneen tähän*</b>
                </p>
            </div>
        </div>
        <div className="grid__cell 1/1 1/3--desk 1/2--lap">
            <div className='zine-wrapper zine-wrapper__multimedia'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url="https://youtu.be/rg6Soh_rPHc" />
                </div>
            </div>
            <div className="space"></div>
            <div className="promo-wrapper">
                <img className="promo" src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/p720x720/79311416_2598226660213511_2832009531272200192_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=1pA2opPGn4UAX-m4yN3&_nc_ht=scontent-hel2-1.xx&_nc_tp=6&oh=17edd0eb0ae504b94f7216046c9af3e9&oe=5EE958CD" alt="error" />
            </div>
            <div className="space"></div>
            <div className="promo-wrapper">
                <img className="promo" src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/s960x960/74599530_1396451783842831_4649553662744461312_o.jpg?_nc_cat=104&_nc_sid=b386c4&_nc_ohc=k2D-6xbW1BAAX9CI8L-&_nc_ht=scontent-hel2-1.xx&_nc_tp=7&oh=ce7ea6a51f220bb574f31ae64667a8b7&oe=5EE7A4D5" alt="error" />
            </div>
            <div className="space"></div>
            <div className="promo-wrapper">
                <img className="promo" src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/s960x960/70640558_2759182090759246_996675108388995072_o.jpg?_nc_cat=104&_nc_sid=b386c4&_nc_ohc=sOlfmVP8LjQAX-n5ujb&_nc_ht=scontent-hel2-1.xx&_nc_tp=7&oh=e6f18a58977eed9a080c932dd7765ade&oe=5EE9E06B" alt="error" />
            </div>
            <div className="space"></div>
            <div className='zine-wrapper zine-wrapper__multimedia'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url="https://youtu.be/Wuuecg2922s" />
                </div>
            </div>
            <div className="space"></div>
            <div className='zine-wrapper zine-wrapper__multimedia'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url="https://youtu.be/4mTnLsmLaTE" />
                </div>
            </div>
            <div className="space"></div>
            <div className='zine-wrapper zine-wrapper__multimedia'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url="https://youtu.be/G_NIop72vis" />
                </div>
            </div>
            <div className="space"></div>
            <div className='zine-wrapper zine-wrapper__multimedia'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url="https://youtu.be/TayH6v_ijR8" />
                </div>
            </div>
        </div>
    </div>
);

export default ZinePage;