import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export class MSserviceList extends React.Component {

    render() {
    return (
      <ul className="list-group my-3">
      {this.props.serviceList.length > 1 &&
        this.props.serviceList.map(({id, name, status, description, tags}) => (
        <div key={id} className="card list-group-item my-2" style={{background:"#eee"}}>
          <div className="card-body">
            <div className="card-title d-flex justify-content-between">
              <span>ID: <b>{id}</b></span>
              <span>Название микросервиса: <b>{name}</b></span>
              <span>Статус: <b>{status[0].comment}</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Теги: <b>{tags.length > 1 && '#' + tags.join(', #')}</b></span>
              <span>Последнее обновление статуса: <b>{status.length > 1 && status[0].date_changed}</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Описание: <b>{description}</b></span>
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