import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import Axios from 'axios';
import { SERVICE_URL } from './constants';

const promiseOptions = callback => inputValue => {
    return Axios.get(`${SERVICE_URL}${inputValue ? `?q=${inputValue}`: ''}`)
        .then(res => {
            callback(res.data);
            return res.data
        });
}

export class SearchField extends Component {
    render() {
        return (
            <AsyncSelect
                isMulti
                cacheOptions
                defaultOptions
                loadOptions={promiseOptions(this.props.onChange)}
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
