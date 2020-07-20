import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../redux/userReducer';
import {getCars} from '../redux/carReducer';


const ReduxExamples = props => {
    console.log(props)

    useEffect(()=> {
        props.getCars();
    }, [])

    return (
        <div>
            <p>{props.userReducer.username}</p>
            <p>{props.userReducer.hometown}</p>
            <button onClick={() => props.getUser({username: 'SpongBob', hometown: 'Also Bikini Bottom'})}>Change User</button>
            <button onClick={props.clearUser}>Clear User</button>
            {props.carReducer.cars.map((car, i)=> (
                <p key={i}>{car.make} {car.model}</p>
            ))}
        </div>
    )
}

//if you want specific data of of the redux state
// const mapStateToProps = reduxState => {
//     return {
//         username: reduxState.username,
//         hometown: reduxState.hometown
//     }
// }



// const mapDispatchToProps = {
//     getUser,
//     clearUser
// }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, clearUser, getCars})(ReduxExamples);

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxExamples);