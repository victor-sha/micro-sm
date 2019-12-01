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
            <>
                <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                <input className="form-control form-control-lg ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" onChange={e => this.props.onChange(e.target.value)} />
            </>
        )
    }
}
                
                // <AsyncSelect
                //     isMulti
                //     cacheOptions
                //     defaultOptions
                //     loadOptions={promiseOptions(this.props.onChange)}
                //     getOptionLabel={option => option.name}
                //     getOptionValue={option => option.id}
                //     styles={{
                //         container: base => {
                //             return {
                //             ...base,
                //             width: 700
                //         }}
                //     }}
                // />