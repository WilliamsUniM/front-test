import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={`${process.env.PUBLIC_URL}/W.png`} style={{ width: 3 + '%' }} />
                    <h2>Williams Alexander Maldonado Pardo</h2>
                </a>
            </header>
        )
    }
}