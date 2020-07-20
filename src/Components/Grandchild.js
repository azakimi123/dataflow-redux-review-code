import React from 'react';

const Grandchild = props => {
    console.log(props)
    return (
        <div>
            <p>{props.hometown}</p>
        </div>
    )
}

export default Grandchild;