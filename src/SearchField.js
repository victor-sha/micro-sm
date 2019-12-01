import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import Axios from 'axios';
import { SERVICE_URL } from './constants';

const promiseOptions = inputValue => {
    return Axios.get(`${SERVICE_URL}${inputValue ? `?q=${inputValue}`: ''}`)
        .then(res => res.data);
}

export class SearchField extends Component {
    render() {
        return (
            <AsyncSelect
                isMulti
                cacheOptions
                defaultOptions
                loadOptions={promiseOptions}
                getOptionLabel={option => option.name}
                getOptionValue={option => option.id}
                styles={{
                    container: base => {
                        return {
                        ...base,
                        width: 700
                    }}
                }}
            />
        )
    }
}
