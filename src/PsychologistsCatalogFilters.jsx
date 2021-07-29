import React from 'react';
import './PsychologistCatalogFilters.scss';

const PsychologistCatalogFilters = (
    {
        filters,
        handleSelectOpenFilter,
        defaultFilters,
        filtersOpen,
        handleSelectFilter
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
        </>
    );
};

export default PsychologistCatalogFilters;
