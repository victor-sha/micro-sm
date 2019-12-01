import React from 'react';
import { Container } from 'react-bootstrap';
import { MSserviceList } from './MSserviceList';
import { SearchField } from './SearchField';
import axios from 'axios';

export class Home extends React.Component {
    state={search: '', serviceList: []}

    componentDidMount() {
        axios.get('http://localhost:3004/service')
        .then(res => this.setState({ ...this.state, serviceList: res.data }))
    }
    
    onChange = (value) => {
        console.log('onChange', value)
        this.setState({...this.state, search: value})
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