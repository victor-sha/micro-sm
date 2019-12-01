import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export const ServiceComponent = () => {
  let {id} = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3004/service/${id}`)
      .then(res => setService(res.data));
  }, [id]);
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
                  onChange={e => setService({name: e.target.value})}
                />
            </label>
          </div>

          <div className="form-group">
            <label className="col-md-6">
              Версия
              <input
                className="form-control"
                type="number"
                name="version"
                value={service.version}
                onChange={e => setService({version: e.target.value})}
              />
            </label>
          </div>

          <div className="form-group">
              <label className="col-md-6">
                  Автор
                  <input
                      className="form-control"
                      type="text"
                      name="author"
                      value={service.author_id}
                      onChange={e => setService({author_id: e.target.value})}
                  />
              </label>
          </div>

          <div className="form-group">
              <label className="col-md-12">
                  Описание
                  <textarea
                      className="form-control"
                      type="textarea"
                      name="description"
                      value={service.description}
                      onChange={e => setService({description: e.target.value})}
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
        </div>
      </form>
  );
}

