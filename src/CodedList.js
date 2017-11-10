import React, {Component} from 'react';
import Coded from './Coded';
import PropTypes from 'prop-types';
import './CodedList.css';
class CodedList extends Component{
    static defaultProps = {
        codeds:[
            {
                title: "Tetiary-Institutions",
                groups:["University", "College", "Polytechnics"],
                img: "Tetiary.jpeg"
            },
            {
                title: "School",
                groups:["Secondary", "Primary", "Kingdergardern"],
                img: "School.jpeg"
            },
            {
                title: "Non-Degree",
                groups:["ICT", "English Cerification", "Others"],
                img: "Nondegree.jpeg"

            },
            {
                title: "Extras",
                groups:["Investment", "NYSC", "Schoolarship", "Jobs"],
                img: "Extras.jpg"
            }
        ]
    }
    static PropTypes = {
        codeds: PropTypes.arrayOf(PropTypes.Object).isRequired
    }
    render(){
        const codeds = this.props.codeds.map((r, index) =>(
            <Coded key={index} {...r} />
        ));
        return(
            <div className="coded-list">
                {codeds}
            </div>

        )
    }
}



export default CodedList;