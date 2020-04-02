import React, { Component } from 'react';
import fire from '../../fire';
import ReactPlayer from 'react-player';

import '../../sass/main.scss';

class GuestBook extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }
    componentWillMount() {

        let messagesRef = fire.database().ref('messages').orderByKey();
        messagesRef.on('child_added', snapshot => {

            let message = { text: snapshot.val(), id: snapshot.key };
            this.setState(prevState => ({
                messages: [message].concat(prevState.messages),
              }));
        })
    }
    addMessage(e) {
        e.preventDefault();

        fire.database().ref('messages').push(this.inputEl.value);
        this.inputEl.value = '';
    }
    render() {
        return (
            <div className='wrapper'>
                <div className="guestbook">
                    <h2>LÄHETÄ TERVEISIÄ TEINI-PÄÄLLE!</h2>
                    <div className="grid">
                        <div className="grid__cell 1/1 1/2--desk 1/2--lap">
                            <div className="guestbook guestbook__columnone">
                                <form onSubmit={this.addMessage.bind(this)}>
                                    <div className="guestbook guestbook__form">
                                        <input className='form' type="text" ref={el => this.inputEl = el} />
                                        <div className="container container__guestbook">
                                            <button className="btn btn__send" type="submit">LÄHETÄ</button>
                                        </div>
                                    </div>
                                    <div className="greetings">
                                        <ul>
                                            {
                                                this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
                                            }
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='mobile-space'></div>
                        <div className="grid__cell 1/1 1/2--desk 1/2--lap">
                            <div className="guestbook guestbook__columntwo">
                                <p>TEINIT SUOSITTELEE:</p>
                                <div className='player-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        url="https://youtu.be/pYVO7BZtLNA" />
                                </div>
                                <div className="space"></div>
                                <div className='player-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        url="https://youtu.be/rg6Soh_rPHc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestBook;