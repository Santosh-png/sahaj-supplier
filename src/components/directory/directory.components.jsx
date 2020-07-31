import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections:[
            {
                title: "computer",
                id: 1
            },
            {
                title: "Laptop",
                id: 2
            },
            {
                title: "Phone",
                id: 3
            },
            {
                title: "CCTV",
                id: 4
            },
            {
                title: "Gagets",
                id: 5
            }
        ]

        };
    }
    render(){
        // cosnt {sections} = this.state;
        return(
            <div className='directory'>
                {
                    this.state.sections.map(({id,title}) =>(
                        <MenuItem key={id} title={title} />
                    ))
                }
                

            </div>
)
}
}
export default Directory;