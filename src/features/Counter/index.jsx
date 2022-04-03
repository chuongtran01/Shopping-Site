import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../app/store';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const handleIncreaseClick = () => {
        const action = increase();
        console.log(action);
        dispatch(action)
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        console.log(action);
        dispatch(action)
    }

    return (
        <div>
            Counter : {count}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;