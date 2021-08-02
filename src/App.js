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
    id: 'district',
    untitled: 'Район',
    placeholder: 'Район',
    filters: ['town'],
    open: false
  },
  {
    id: 'format',
    untitled: 'Формат работы',
    placeholder: 'Формат работы',
    filters: ['Онлайн / Офлайн', 'Онлайн', 'Офлайн'],
    open: false
  },
  {
    id: 'lang',
    untitled: 'Язык',
    placeholder: 'Язык',
    filters: ['Русский', 'Український'],
    open: false
  },
  {
    id: 'workWith',
    untitled: 'С кем работает',
    placeholder: 'С кем работает',
    filters: ['Работает с детьми', 'Работает с парами', 'Индивидуальные сессии'],
    open: false
  },
  {
    id: 'helpWith',
    untitled: 'С чем помогает',
    placeholder: 'С чем помогает',
    filters: ['Депрессивные состояния', 'Расстройства пищевого поведения', 'Карьера, профессиональный рост', 'Поиск себя'],
    open: false
  },
  {
    id: 'workMethods',
    untitled: 'Методы работы',
    placeholder: 'Методы работы',
    filters: ['Стандартні'],
    open: false
  },
  {
    id: 'gender',
    untitled: 'Пол',
    placeholder: 'Пол',
    filters: ['Мужской', 'Женский', 'Пол не важен'],
    open: false
  }
];

export default function App() {
  const [rangeValueAge, setRangeValueAge] = useState({ value: { min: 18, max: 30 } });
  const [rangeValuePrice, setRangeValuePrice] = useState({ value: { min: 0, max: 999 } });

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
      return array.filter(elem => {
          const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
          return commonKeys.reduce((flag, key) => { 
            const isFilter = typeof elem[key] !== 'string' ? elem[key].some(item => filters[key].includes(item)) : filters[key].includes(elem[key])
            return (flag && isFilter);
          } , 1);
      });
  }

    const filteredSpecialists = filter(specialists, filterWithNormalKey);

    const filteredSpecialistWithRange = filteredSpecialists.filter((specialist, i) => specialist.age >= rangeValueAge.value.min && specialist.age <= rangeValueAge.value.max && specialist.price >= rangeValuePrice.value.min && specialist.price <= rangeValuePrice.value.max);

  return (
    <div>
      <PsychologistsCatalogFilters
        filters={filters}
        handleSelectOpenFilter={handleSelectOpenFilter}
        defaultFilters={defaultFilters}
        filtersOpen={filtersOpen}
        handleSelectFilter={handleSelectFilter}
        handleCloseOpenFilter={handleCloseOpenFilter}
        rangeValueAge={rangeValueAge}
        setRangeValueAge={setRangeValueAge}
        rangeValuePrice={rangeValuePrice}
        setRangeValuePrice={setRangeValuePrice}
      />

      {filteredSpecialistWithRange.map(specialist => (
        <div className='container' key={specialist.id}>
            {/* {console.log('filterWithNormalKey', filterWithNormalKey)}
            {console.log('activeFilters', activeFilters)}
            {console.log('filterdSpecialist:', filteredSpecialists)} */}
            {console.log(filteredSpecialistWithRange)}
            <PsychologistCard data={specialist}/>
        </div>
      ))}
    </div>
  );
}
