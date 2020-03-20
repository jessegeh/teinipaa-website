import React from 'react';
import fire from '../../fire';
import Youtube from '../../components/youtube/youtube.component';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.app = fire;
        this.database = this.app.database().ref('count');

        this.state = { count: '' };
    }
    componentDidMount() {
        fire.database().ref('count').push( "uusi fani!" );
        this.database.on('value', snap => {
                this.setState({count: snap.numChildren()})
            });
    }

    render() {
        return (
            <div className='homepage'>
                <h1 className='title'>TERVETULOA TEINI-PÄÄN NETTISIVUILLE!</h1>
                <p>OLET TEINI-PÄÄN FANI #: {this.state.count}</p>
                <Youtube />
            </div>
        );
    }
}

export default HomePage;