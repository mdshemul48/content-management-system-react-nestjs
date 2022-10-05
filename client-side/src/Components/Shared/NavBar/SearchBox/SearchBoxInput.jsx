/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axiosInstance from "../../../../utility/axiosInstance";

const SearchBoxInput = ({ setSearchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    const { data } = await axiosInstance.get(`/search-recommendation?search=${query}`);
    setOptions(data[1]);
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
