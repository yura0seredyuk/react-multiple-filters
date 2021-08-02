import React from 'react';
import './PsychologistCatalogFilters.scss';
import Range from './Range';

const PsychologistCatalogFilters = (
    {
        filters,
        handleSelectOpenFilter,
        defaultFilters,
        filtersOpen,
        handleSelectFilter,
        handleCloseOpenFilter,
        rangeValueAge,
        setRangeValueAge,
        rangeValuePrice,
        setRangeValuePrice
    }) => {
    return (
        <>
            {filters.map((filter, filterIndex) => (
                <div className={'filter'} key={filterIndex}>
                    <div className={'untitled'}>{filter.untitled}</div>
                    <div className={'select'} onClick={() => handleSelectOpenFilter(filter.open, filterIndex)}>
                        <p className={'placeholder'}>
                            {defaultFilters[filterIndex].length === 0 ? filter.placeholder : defaultFilters[filterIndex].join(', ')}
                        </p>
                    </div>

                    {filtersOpen[filterIndex] && (
                        <div className={'openFilter'}>
                            {filter.filters.map((filter, i) => (
                                <div
                                    className={'filterItem'}
                                    key={i}
                                    onClick={() => handleSelectFilter(filter, filterIndex)}
                                >
                                    {defaultFilters[filterIndex].includes(filter) ? (
                                        '+'
                                    ) : (
                                        '-'
                                    )}
                                    {filter}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className='rangeContainer'>
                <div
                    className='range'
                    onMouseDown={() => handleCloseOpenFilter()}
                >
                    <div className='rangeInfo'>
                        <div className='rangeType'>Возраст</div>
                        <div className='rangeNumber'>{`${rangeValueAge.value.min} - ${rangeValueAge.value.max}`}</div>
                    </div>

                    <Range rangeValue={rangeValueAge} setRangeValue={setRangeValueAge} minValue={18} maxValue={70}/>
                </div>

                <div
                    className='range'
                    onMouseDown={() => handleCloseOpenFilter()}
                >
                    <div className='rangeInfo'>
                        <div className='rangeType'>Цена</div>
                        <div className='rangeNumber'>{`${rangeValuePrice.value.min} - ${rangeValuePrice.value.max}`}</div>
                    </div>

                    <Range rangeValue={rangeValuePrice} setRangeValue={setRangeValuePrice} minValue={0} maxValue={2000}/>
                </div>
            </div>
        </>
    );
};

export default PsychologistCatalogFilters;
