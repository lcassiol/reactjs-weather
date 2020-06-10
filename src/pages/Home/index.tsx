import React, { useEffect } from 'react';
import weatherAPI from '../../services/weatherApi';

import './styles.css';

const Home = () => {
  useEffect(() => {
    async function loadDefaultWeathers() {
      const { data } = await weatherAPI.get('forecast', {
        params: {
          q: 'Recife,BR',
          appid: '93bbe3ad2f8c6d1617d79ab06f4cc5d0',
          units: 'metric',
          lang: 'pt_br',
        },
      });
      console.log(data);
    }

    // loadDefaultWeathers();
  }, []);

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <h2>alou teste</h2>
    </div>
  );
};

export default Home;
