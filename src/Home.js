import React from 'react';
import { Container } from 'react-bootstrap';
import { MSserviceList } from './MSserviceList';
import { SearchField } from './SearchField';
import axios from 'axios';
import { SERVICE_URL } from './constants';

export class Home extends React.Component {
    state={search: '', serviceList: []}

    loadItems = () => {
        axios.get(SERVICE_URL)
        .then(res => this.setState({ ...this.state, serviceList: res.data }))
    }

    componentDidMount() {
        this.loadItems();
    }
    
    onChange = (inputValue) => {
        console.log('onChange', inputValue)
        
        axios.get(`${SERVICE_URL}${inputValue ? `?q=${inputValue}`: ''}`)
        .then(res => {
            console.log('search res', res.data)
            this.setState({...this.state, serviceList: res.data})
            this.setState({...this.state, search: inputValue});
            });
    }

    render() {
        return (
            <Container>
                <form className="form-inline md-form form-sm mt-5">
                    {/* <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" /> */}
                        <SearchField onChange={this.onChange} />
                </form>
                <MSserviceList serviceList={this.state.serviceList} />
            </Container>
        )   
    }
}