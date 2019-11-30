import React from "react";
import axios from "axios";

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
        <div className="card list-group-item">
          <div className="card-body">
            <div className="card-title d-flex justify-content-between">
              <span>ID: <b>Id</b></span>
              <span>Название микросервиса: <b>Name</b></span>
              <span>Статус: <b>status</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Теги: <b>Tags</b></span>
              <span>Последнее обновление статуса: <b>21.11.2019</b></span>
            </div>
            <div className="card-title d-flex justify-content-between">
              <span>Последнее обновление статуса: <b>description</b></span>
              <button type="button" className="btn btn-primary">Подробнее</button>
            </div>
          </div>
        </div>
      </ul>
    )
  }
}