import React, { useState, useEffect } from 'react';
import { FormControl, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { fetchCountries } from '../../api';
import styles from './CountrySelector.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
    <Grid container spacing={3} justify="center">
      <FormControl >
        <Autocomplete
          id="country-selection"
          onChange={(event, value) => handleCountryChange(value)}
          options={countries}
          getOptionLabel={(countries) => countries}
          style={{ width: 300 }}
          renderInput={(countries) => <TextField {...countries} label="Select Country" variant="outlined" />}
        />
      </FormControl>
    </Grid>
    </div>
  );
};

export default Countries;


