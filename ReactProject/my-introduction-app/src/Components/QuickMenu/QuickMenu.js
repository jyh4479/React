import React, {Component} from 'react';
import './QuickMenu.css';

class QuickMenu extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <label htmlFor="menu-button" className="menu-button--label">▤</label>
                <input type="checkbox" id="menu-button"/>

                <div className="menu-wrap">
                    <div className="side-menu">
                        <ul className="side-menu--list">
                            <li><a>Component</a></li>
                            <li><a>Component</a></li>
                            <li><a>Component</a></li>
                            <li><a>Component</a></li>
                            <li><a>Component</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default QuickMenu;