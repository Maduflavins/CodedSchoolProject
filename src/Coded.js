import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './Coded.css'
class Coded extends Component{
    static PropTypes = {
        title: PropTypes.string.isRequired,
        groups: PropTypes.arrayOf(PropTypes.string).isRequired,
        img: PropTypes.string.isRequired

    }
    render(){
        const{title, img} = this.props;
        const groups = this.props.groups.map((grp, index) => (
            <li key={index}>{grp}</li>

        ))
        return(
            <div className="coded-card">
                <div className="coded-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="coded-card-content">
                    <h3 className="coded-title">{title}</h3>
                    <ul className="coded-groups">
                        {groups}
                    </ul>
                </div>
            </div>
        );
    }

}
export default Coded