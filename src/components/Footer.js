import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/Schooolman" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/schooolman" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://github.com/schooolman" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://codepen.io/schooolman" className="icon fa-codepen"><span className="label">Codepen</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
