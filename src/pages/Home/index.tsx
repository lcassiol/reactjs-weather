import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
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
    <Container>
      <Title>Previsão do Tempo</Title>
      <Details>
        <City>
          <span>Niterói, RJ - Brasil</span>
          <span>X</span>
        </City>
        <p>20℃ Nublado</p>

        <MaxMinFeelslike>
          <div>
            <div>
              <span>^</span>
              <span>16℃</span>
            </div>
            <div>
              <span>v</span>
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
      <Form>
        <input
          type="text"
          className="inputCity"
          placeholder="Insira aqui o nome da sua cidade"
        />
        <button
          type="button"
          onClick={() => alert('teste')}
          className="searchButton"
        >
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
                <strong>Rio de janeiro</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Rio de janeiro</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Rio de janeiro</strong>
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
                <strong>Rio de janeiro</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Rio de janeiro</strong>
              </section>

              <section>
                <strong>18℃</strong>
                <strong>102℃</strong>
                <strong>Rio de janeiro</strong>
              </section>
            </div>
          </div>
        </DefaultCities>
      </div>
    </Container>
  );
};

export default Home;
