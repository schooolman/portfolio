import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div href="#" className="image avatar"><img src={avatar} alt="" /></div>
                    <h1>Hey there! <br /> I'm Jake Schoolmeesters, a front&#8209;end&nbsp;developer
                    based out of Chicago, Illinois.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
