import React, { Component } from 'react';
import fire from '../../fire';

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
            this.setState({ messages: [message].concat(this.state.messages) });
        })
    }
    addMessage(e) {
        e.preventDefault();

        fire.database().ref('messages').push(this.inputEl.value);
        this.inputEl.value = '';
    }
    render() {
        return (
            <div className="guestbook">
                <h2>LÄHETÄ TERVEISIÄ TEINI-PÄÄLLE!</h2>
                <form onSubmit={this.addMessage.bind(this)}>
                    <input className='form' type="text" ref={el => this.inputEl = el} />
                    <div className="container container__guestbook">
                        <button className="btn btn__send" type="submit">LÄHETÄ</button>
                    </div>
                    <div className="greetings"></div>
                    <ul>
                        {
                            this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
                        }
                    </ul>
                </form>
            </div>
        );
    }
}

export default GuestBook;