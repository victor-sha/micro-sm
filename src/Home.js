import React from 'react';
import { Container } from 'react-bootstrap';
import { MSserviceList } from './MSserviceList';
import { SearchField } from './SearchField';

export class Home extends React.Component {
    render() {
        return (
            <Container>
                <form className="form-inline md-form form-sm mt-5">
                    {/* <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" /> */}
                        <SearchField/>
                </form>
                <MSserviceList />
            </Container>
        )   
    }
}