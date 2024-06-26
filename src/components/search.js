import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [city, setCity] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setCity(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={city}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
