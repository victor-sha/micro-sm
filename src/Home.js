import React from 'react';
import { Container } from 'react-bootstrap';
import { MSserviceList } from './MSserviceList';

export class Home extends React.Component {
    render() {
        return (
            <Container>
                <form class="form-inline md-form form-sm mt-5">
                    <i class="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input class="form-control form-control-lg ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                </form>
                <MSserviceList />
            </Container>
        )
    }
}