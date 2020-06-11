import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import weatherAPI from '../../services/weatherApi';

import {
  Container,
  Title,
  Details,
  City,
  MaxMinFeelslike,
  Feelslike,
  WindHumid,
  Line,
  Forecast,
  Form,
  Row,
  DefaultCities,
  CapitalTitles,
} from './styles';

const Home = () => {
  const [search, setSearch] = useState('');
  const [showDetails, setShowDetails] = useState(false);

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
    return weatherAPI.get('weather', {
      params: {
        q: city,
        appid: '93bbe3ad2f8c6d1617d79ab06f4cc5d0',
        units: 'metric',
        lang: 'pt_br',
      },
    });
  }, []);

  const handleSearch = useCallback(async () => {
    console.log('search new weather');
    console.log(search);

    const { data } = await weatherAPI.get('forecast', {
      params: {
        q: `${search},BR`,
        appid: '93bbe3ad2f8c6d1617d79ab06f4cc5d0',
        units: 'metric',
        lang: 'pt_br',
      },
    });

    console.log(data);
    // percorrer a lista que vem, para pegar uma vez de cada dia,
    // para poder completar 5 dias
  }, [search]);

  const handleSearchKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    async function initialValues() {
      const [
        responseRecife,
        responseSP,
        responseBrasilia,
        responseBelem,
        responseSalvador,
        responseCuritiba,
      ] = await Promise.all([
        loadDefault('Recife,BR'),
        loadDefault('São Paulo,BR'),
        loadDefault('Brasília,BR'),
        loadDefault('Belem,BR'),
        loadDefault('Salvador,BR'),
        loadDefault('Curitiba,BR'),
      ]);
    }

    // initialValues();
  }, [loadDefault]);

  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      {showDetails && (
        <Details>
          <City>
            <span>Niterói, RJ - Brasil</span>
            <button type="button" onClick={() => setShowDetails(false)}>
              X
            </button>
          </City>
          <p>20℃ Nublado</p>

          <MaxMinFeelslike>
            <div>
              <div>
                <FiArrowDown color="#d8775a" />
                <span>16℃</span>
              </div>
              <div>
                <FiArrowUp color="#d8775a" />
                <span>12℃</span>
              </div>
            </div>
            <Feelslike>
              <span>Sensação</span>
              <span>19℃</span>
            </Feelslike>
          </MaxMinFeelslike>
          <WindHumid>
            <div>
              <div>
                <span>Vento</span>
                <span>18km/h</span>
              </div>
            </div>
            <div>
              <span>Humidade</span>
              <span>89%</span>
            </div>
          </WindHumid>
          <Line />
          <Forecast>
            <div>
              <p>Terça</p>
              <div>
                <span>18℃</span>
                <span>20℃</span>
              </div>
            </div>
            <div>
              <p>Quarta</p>
              <div>
                <span>18℃</span>
                <span>20℃</span>
              </div>
            </div>
            <div>
              <p>Quinta</p>
              <div>
                <span>18℃</span>
                <span>20℃</span>
              </div>
            </div>
            <div>
              <p>Sexta</p>
              <div>
                <span>18℃</span>
                <span>20℃</span>
              </div>
            </div>
            <div>
              <p>Sábado</p>
              <div>
                <span>18℃</span>
                <span>20℃</span>
              </div>
            </div>
          </Forecast>
        </Details>
      )}

      <Form>
        <input
          type="text"
          className="inputCity"
          placeholder="Insira aqui o nome da sua cidade"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleSearchKeyPress}
        />
        <button type="button" onClick={handleSearch} className="searchButton">
          <FiSearch color="#999" size={24} />
        </button>
      </Form>
      <Row />
      <div>
        <CapitalTitles>Capitais</CapitalTitles>
        <DefaultCities>
          <div>
            <section>
              <span>Min</span>
              <span>Máx</span>
              <strong />
            </section>
            <div>
              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Recife</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>São Paulo</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Brasília</strong>
              </section>
            </div>
          </div>

          <div>
            <section>
              <span>Min</span>
              <span>Máx</span>
              <strong />
            </section>
            <div>
              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Belem</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Salvador</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Curitiba</strong>
              </section>
            </div>
          </div>
        </DefaultCities>
      </div>
    </Container>
  );
};

export default Home;
