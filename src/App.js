import React, { useState, useEffect } from "react";
import "./style.css";
import specialists from './specialists.js';
import PsychologistsCatalogFilters from './PsychologistsCatalogFilters.jsx';

const filters = [
  {
      id: 'town',
      untitled: 'Город',
      placeholder: 'Город',
      filters: ['Київ', 'Харків', 'Львів', 'Одеса'],
      open: false
  },
  {
      id: 'district',
      untitled: 'Район',
      placeholder: 'Район',
      filters: [],
      open: false
  },
  {
      id: 'workFormat',
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
      filters: ['Мужчина ', 'Женщина ', 'Пол не важен'],
      open: false
  }
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

  return (
    <div>
      <PsychologistsCatalogFilters
        filters={filters}
        handleSelectOpenFilter={handleSelectOpenFilter}
        defaultFilters={defaultFilters}
        filtersOpen={filtersOpen}
        handleSelectFilter={handleSelectFilter}
      />
    </div>
  );
}
