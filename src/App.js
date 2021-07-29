import React, { useState, useEffect } from "react";
import "./style.css";
import specialists from './specialists.js';
import PsychologistsCatalogFilters from './PsychologistsCatalogFilters.jsx';
import PsychologistCard from './PsychologistCard';

const filters = [
  {
      id: 'townLocation',
      untitled: 'Город',
      placeholder: 'Город',
      filters: ['Киев', 'Львів'],
      open: false
  },
  {
    id: 'format',
    untitled: 'Формат работы',
    placeholder: 'Формат работы',
    filters: ['Онлайн / Офлайн', 'Онлайн', 'Офлайн'],
    open: false
  },
];

export default function App() {

  const defaultStateForOpenFilters = {};
  filters.map((filter, i) => { defaultStateForOpenFilters[i] = filter.open; });
  const [filtersOpen, setFiltersOpen] = useState(defaultStateForOpenFilters);

  const handleCloseOpenFilter = () => {
      const newStateForOpenFilter = {};
      filters.map((filter, i) => { newStateForOpenFilter[i] = filter.open; });

      setFiltersOpen(newStateForOpenFilter);
  };

  const handleSelectOpenFilter = (open, index) => {
      const newState = {
          ...filtersOpen,
          ...defaultStateForOpenFilters,
          [index]: !filtersOpen[index]
      };

      setFiltersOpen(newState);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const defaultStateForActiveFilters = {};
    filters.map((filter, i) => { defaultStateForActiveFilters[i] = filter.filters; });
    const [activeFilters, setActiveFilters] = useState(defaultStateForActiveFilters);

    const emptyFilters = [];
    // eslint-disable-next-line no-return-assign
    filters.map((filter, i) => [emptyFilters[i] = []]);
    const [defaultFilters, setDefaultFilters] = useState(emptyFilters);

    const handleSelectFilter = (filter, filterIndex) => {
        if (defaultFilters[filterIndex].includes(filter)) {
            setDefaultFilters([...defaultFilters, defaultFilters[filterIndex].splice(defaultFilters[filterIndex].findIndex(elem => elem === filter), 1)]);
        } else {
            setDefaultFilters([...defaultFilters, defaultFilters[filterIndex].push(filter)]);
        }

        const newState = {
            ...activeFilters,
            [filterIndex]: defaultFilters[filterIndex]
        };

        setActiveFilters(newState);
    };

    const filterWithNormalKey = {};

    filters.map((filter, i) => filterWithNormalKey[filter.id] = activeFilters[i]);


    function filter(array = [], filters = {}) {
        const keys = Object.keys(filters).filter(key => filters.hasOwnProperty(key));
        
        console.log(keys);

        return array.filter(elem => {
            const commonKeys = keys.filter(key => elem.hasOwnProperty(key));

            console.log('commonKeys', commonKeys);

            return commonKeys.reduce((flag, key) => filters[key].includes(elem[key]));
        });
    }

    const filteredSpecialists = filter(specialists, filterWithNormalKey);

  return (
    <div>
      <PsychologistsCatalogFilters
        filters={filters}
        handleSelectOpenFilter={handleSelectOpenFilter}
        defaultFilters={defaultFilters}
        filtersOpen={filtersOpen}
        handleSelectFilter={handleSelectFilter}
      />

      {filteredSpecialists.map(specialist => (
        <div className='container' key={specialist.id}>
            {console.log('filterWithNormalKey', filterWithNormalKey)}
            {console.log('activeFilters', activeFilters)}
            {console.log('filterdSpecialist:', filteredSpecialists)}
            <PsychologistCard data={specialist}/>
        </div>
      ))}
    </div>
  );
}
