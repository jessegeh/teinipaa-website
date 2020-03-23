import React from 'react';
import fire from '../../fire';
import Youtube from '../../components/youtube/youtube.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { SocialIcon } from 'react-social-icons';
import '../../sass/main.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.app = fire;
        this.database = this.app.database().ref('count');

        this.state = { count: '' };
    }
    componentDidMount() {
        fire.database().ref('count').push("uusi fani!");
        this.database.on('value', snap => {
            this.setState({ count: snap.numChildren() })
        });
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className='title'>TERVETULOA TEINI-PÄÄN NETTISIVUILLE!</h1>
                <p>OLET TEINI-PÄÄN FANI #: {this.state.count}</p>
                <div className='container container__homepage'>
                    <div className='container container__homepage container__homepage--columnone'>
                        <Youtube />
                    </div>
                    <div className='container container__homepage container__homepage--columntwo'>
                        <Sidebar />
                    </div>
                </div>
                <div className='footer'>
                    <p>SEURAA TEINI-PÄÄTÄ:</p>
                    <SocialIcon url="https://www.facebook.com/teinipaa/" />
                    <SocialIcon url="https://www.instagram.com/teinipaa/" />
                    <SocialIcon url="https://open.spotify.com/artist/2zxGggWSxfoWtprihkzo8Q?si=H4ist8ksTtKbNsG_H0VzEw" />
                    <SocialIcon url="https://www.youtube.com/channel/UCgZNXTcd8ESJcUqpDcTMpww" />
                </div>
            </div>
        );
    }
}

export default HomePage;