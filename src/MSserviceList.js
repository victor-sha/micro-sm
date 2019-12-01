import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export class MSserviceList extends React.Component {
  state = {
    serviceList: []
  }
  componentDidMount() {
    axios.get('http://localhost:3004/service')
      .then(res => this.setState({ serviceList: res.data }))
    }
    render() {
    return (
      <ul className="list-group my-3">
      {this.state.serviceList.length > 1 &&
        this.state.serviceList.map(({id, name, status, description}) => (
        <div key={id} className="card list-group-item my-2" style={{background:"#eee"}}>
          <div className="card-body">
            <div className="card-title d-flex justify-content-between">
              <span>ID: <b>{id}</b></span>
              <span>Название микросервиса: <b>{name}</b></span>
              <span>Статус: <b>{status.id}</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Теги: <b>Tags</b></span>
              <span>Последнее обновление статуса: <b>{status.date_changed}</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Последнее обновление статуса: <b>{description}</b></span>
              <Link to={`/service/${id}`} className="btn btn-primary">Подробнее</Link>
            </div>
          </div>
        </div>)
        )
      }
      </ul>
    )
  }
}