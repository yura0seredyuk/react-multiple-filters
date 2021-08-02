import React from 'react';
import InputRange from 'react-input-range';
import './Range.css';

const Range = ({ rangeValue, setRangeValue, minValue, maxValue }) => {
    return (
        <div>
            <InputRange
                maxValue={maxValue}
                minValue={minValue}
                value={rangeValue.value}
                onChange={value => setRangeValue({ value })}
            />
        </div>
    );
};

export default Range;