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
      <form>
          <div className="form-group">
            <label>
                Название микросервиса
                <input type="text" name="name" value={service.name} />
            </label>
          </div>

          <div>
            <label>
              Версия
              <input type="number" name="version" value={service.version}/>
            </label>
          </div>
      </form>
  );
}

