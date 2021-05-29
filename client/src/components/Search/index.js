import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Fuse from "fuse.js";

import * as ScSearch from "./styled";

const Search = ({
  searchData,
  searchKeys,
  onResult,
  placeholder = "Search",
}) => {
  const search = useCallback(
    (value) => {
      if (!value) return searchData;

      const fuse = new Fuse(searchData, {
        keys: searchKeys,
      });

      const fusedResult = fuse.search(value);

      const finalResult = fusedResult.map(({ item }) => item);

      return finalResult;
    },
    [searchKeys, searchData]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    onResult && onResult(search(value));
  };

  return (
    <ScSearch.ScSearch>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Form.Group>
    </ScSearch.ScSearch>
  );
};

export default Search;
