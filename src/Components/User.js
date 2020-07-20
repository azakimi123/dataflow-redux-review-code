import React, {useState} from 'react';
import Grandchild from './Grandchild';

const User = props => {
    let [newName, setNewName] = useState('');
    console.log(props)

    const nameChange = () => {
        props.nameFn(newName);
        setNewName('')
    }
    return (
        <div>
            <p>{props.username}</p>
            <Grandchild hometown={props.hometown}/>
            <input value={newName} onChange={e => setNewName(e.target.value)}/>
            <button onClick={nameChange}>Change Name</button>
        </div>
    )
}

export default User;