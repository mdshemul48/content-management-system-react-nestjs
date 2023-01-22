/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import fetchJsonp from "fetch-jsonp";

const SearchBoxInput = ({ setSearchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    const response = await fetchJsonp(`https://suggestqueries.google.com/complete/search?client=youtube&q=${query}`);
    const responseJson = await response.json();
    const data = responseJson[1].map((item) => item[0]);
    setOptions(data);
    setIsLoading(false);
  };

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="login"
      minLength={3}
      onSearch={handleSearch}
      options={options}
      onChange={(value) => {
        setSearchQuery(value[0]);
      }}
      placeholder="Search for Anything..."
      renderMenuItemChildren={(option) => <span>{option}</span>}
    />
  );
};

export default SearchBoxInput;
