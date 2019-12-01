import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
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
          <div className="form-group ml-5">
            <label>
                Название микросервиса
                <input className="form-control" type="text" name="name" value={service.name} />
            </label>
          </div>

          <div className="form-group ml-5">
            <label>
              Версия
              <input className="form-control" type="number" name="version" value={service.version}/>
            </label>
          </div>
        </div>
      </form>
  );
}

