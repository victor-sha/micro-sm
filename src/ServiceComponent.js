import React, {useState, useEffect, useCallback} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { SERVICE_URL, AUTHORS_URL } from './constants';

const defaultService = {
  status: [
    {
      "id": 1,
      "date_changed": new Date().toDateString(),
      "author_id": 1,
      "comment": "Идея"
    },
  ]
}

export const ServiceComponent = () => {
  let {id} = useParams();
  const [service, setService] = useState({});
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get(`${SERVICE_URL}/${id}`)
      .then(res => setService(res.data));
  }, [id]);
  useEffect(() => {
    axios.get(AUTHORS_URL)
      .then(res => setAuthors(res.data));
  }, [id]);

  const sendRequest = useCallback(async () => {
    if (!id) {
      await axios.post(SERVICE_URL, {...defaultService, ...service});
      return;
    }
    await axios.put(`${SERVICE_URL}/${id}`, service);
  });

  const deleteItem = useCallback(async () => {
      if(id) {
        await axios.delete(`${SERVICE_URL}/${id}`)
      }
    }
  )

  console.log(service);
  return (
      <form className="d-flex flex-row justify-content-center">
      <div className="card w-50 my-3">
          <div className="form-group">
            <label className="col-md-6">
                Название микросервиса
                <input 
                  className="form-control"
                  type="text" name="name"
                  value={service.name}
                  onChange={e => setService({...service, name: e.target.value})}
                />
            </label>
            <label className="col-md-6">
              Версия
              <input
                className="form-control"
                type="number"
                name="version"
                value={service.version}
                onChange={e => setService({...service, version: e.target.value})}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="col-md-6">
              Статус
              <input
                className="form-control"
                type="text"
                name="status"
                value={service.status && service.status.length > 0 && service.status[0].comment}
                // onChange={e => setService({...service, status: e.target.value})}
              />
            </label>
          </div>

          <div className="form-group d-flex pl-3">
            <label style={{display:"block", width: "345px"}} calssName="d-flex col-md-6" for="author">
              Автор
              <select
                className="form-control "
                type="text"
                name="author"
                id="author"
                value={service.author_id}
                onChange={e => setService({...service, author_id: e.target.value})}
              >
                {authors.length > 1 &&
                  authors.map(author => (
                    <option value={author.id}>{author.name}</option>
                    ))
                  }
              </select>
            </label>
            <button
                  className="btn btn-danger col-md-3 ml-5 btn-sm"
                  type="button"
                  onClick={deleteItem}
                >
                  Удалить
                </button>

          </div>

          <div className="form-group">
              <label className="col-md-12">
                  Описание
                  <textarea
                      className="form-control"
                      type="textarea"
                      name="description"
                      value={service.description}
                      onChange={e => setService({...service, description: e.target.value})}
                  />
              </label>
          </div>

          <div className="form-group">
              <label className="col-md-12">
                  Документация
                  <div className="d-flex">
                      <input
                          className="form-control"
                          type="text"
                          name="documentation"
                          value={service.documentation_link}
                          onChange={e => setService({documentation_link: e.target.value})}
                      />
                      <Link to={`/service/${id}`} className="btn btn-primary">Перейти</Link>
                  </div>
              </label>
          </div>

          <div className="form-group d-flex justify-content-space-between">
              <div className="col-md-6">
                <Link
                  to="/"
                  className="btn btn-secondary ml-8 col-md-6"
                  type="button"
                  onClick={() => console.log('hello')}
                >
                  Закрыть
                </Link>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <button
                  className="btn btn-info col-md-6"
                  type="button"
                  onClick={sendRequest}
                >
                  Сохранить
                </button>
              </div>
          </div>
        </div>
      </form>
  );
}

