import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import weatherAPI from '../../services/weatherApi';

import './styles.css';

const Home = () => {
  const [search, setSearch] = useState('');

  const searchWeather = useCallback(() => {
    return weatherAPI.get('forecast', {
      params: {
        q: search,
        appid: '93bbe3ad2f8c6d1617d79ab06f4cc5d0',
        units: 'metric',
        lang: 'pt_br',
      },
    });
  }, [search]);

  const loadDefault = useCallback((city: string) => {
    return weatherAPI.get('forecast', {
      params: {
        q: city,
        appid: '93bbe3ad2f8c6d1617d79ab06f4cc5d0',
        units: 'metric',
        lang: 'pt_br',
      },
    });
  }, []);

  useEffect(() => {
    async function initialValues() {
      const [
        responseRecife,
        responseSP,
        responseBrasilia,
        responseBelem,
        responseSalvador,
        responseCuritiba,
        responseManaus,
        responseJoaoPessoa,
      ] = await Promise.all([
        loadDefault('Recife,BR'),
        loadDefault('São Paulo,BR'),
        loadDefault('Brasília,BR'),
        loadDefault('Belem,BR'),
        loadDefault('Salvador,BR'),
        loadDefault('Curitiba,BR'),
        loadDefault('Manaus,BR'),
        loadDefault('João Pessoa,BR'),
      ]);
    }

    // initialValues();
  }, [loadDefault]);

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '50px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          marginBottom: '30px',
          color: '#fff',
          fontSize: '48px',
          fontFamily: 'Ubuntu',
        }}
      >
        Previsão do Tempo
      </span>
      <div style={{ display: 'flex', width: '400px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Insira aqui o nome da sua cidade"
          style={{
            flex: 1,
            height: '38px',
            padding: '10px',
            fontSize: '16px',
          }}
        />
        <button
          type="button"
          onClick={() => alert('teste')}
          style={{
            position: 'relative',
            left: '-32px',
            background: 'transparent',
            border: 'none',
          }}
        >
          <FiSearch color="#999" size={24} />
        </button>
      </div>
      <span
        style={{
          width: '550px',
          marginTop: '40px',
          borderTopStyle: 'solid',
          borderTopWidth: '0.25px',
          borderTopColor: '#fff',
        }}
      />
      <div>
        <h2 style={{ marginTop: '15px' }}>Capitais</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '20px',
          }}
        >
          <div className="grid">
            <section style={{ marginBottom: '10px' }}>
              <span>Min</span>
              <span>Máx</span>
              <strong />
            </section>
            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>

            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>

            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>
          </div>

          <div className="grid" style={{ marginLeft: '100px' }}>
            <section style={{ marginBottom: '10px' }}>
              <span>Min</span>
              <span>Máx</span>
              <strong />
            </section>
            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>

            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>

            <section>
              <strong>18℃</strong>
              <strong>102℉</strong>
              <strong>Rio de janeiro</strong>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
