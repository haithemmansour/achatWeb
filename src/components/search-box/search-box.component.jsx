import React from 'react';
import FormInput from '../form-input/form-input.component';



export const SearchBox = props => (
  <FormInput
    className='search-box'
    type='search'
    
    onChange={props.onSearchChange}
  />
);