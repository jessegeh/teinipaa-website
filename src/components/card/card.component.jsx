import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <div className="card card__menu card__menu--wrapper">
                <p className="card card__menu" onClick={this.showMenu}>
                <img src="https://img.icons8.com/windows/32/000000/double-down.png" alt="null" onClick={this.showMenu}/>
                </p>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className='card card__wrapper'>
                                    <div className='card card__options'>
                                        <Link className='card card__options card__options--option' to='/'>
                                            ALKUUN
            </Link>
                                        <br />
                                        <Link className='card card__options card__options--option' to='/zine'>
                                            TEINIZINE
            </Link>
                                        <br />
                                        <Link className='card card__options card__options--option' to='/vieraskirja'>
                                            VIERASKIRJA
            </Link>
                                        <br />
                                        <Link className='card card__options card__options--option' to='/about'>
                                            LISÄTIETOA
            </Link>
                                    </div>
                                </div>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Card;