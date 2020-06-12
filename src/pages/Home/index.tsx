import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import weatherAPI from '../../services/weatherApi';

import {
  Container,
  Title,
  Form,
  Row,
  DefaultCities,
  CapitalTitles,
} from './styles';

import Details from './Details';

interface DefaultWeatherProps {
  main: {
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
}

const Home = () => {
  const [search, setSearch] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [recifeWeather, setRecifeWeather] = useState<DefaultWeatherProps>();
  const [spWeather, setSPWeather] = useState<DefaultWeatherProps>();
  const [brasiliaWeather, setBrasiliaWeather] = useState<DefaultWeatherProps>();
  const [belemWeather, setBelemWeather] = useState<DefaultWeatherProps>();
  const [salvadorWeather, setSalvadorWeather] = useState<DefaultWeatherProps>();
  const [curitibaWeather, setCuritibaWeather] = useState<DefaultWeatherProps>();

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

      setRecifeWeather(responseRecife.data);
      setSPWeather(responseSP.data);
      setBrasiliaWeather(responseBrasilia.data);
      setBelemWeather(responseBelem.data);
      setSalvadorWeather(responseSalvador.data);
      setCuritibaWeather(responseCuritiba.data);
    }

    initialValues();
  }, [loadDefault]);

  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      {showDetails && <Details />}

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
              {recifeWeather && (
                <section>
                  <strong>{recifeWeather.main.temp_min}℃</strong>
                  <strong>{recifeWeather.main.temp_max}℃</strong>
                  <strong>Recife</strong>
                </section>
              )}
              {spWeather && (
                <section>
                  <strong>
                    {String(spWeather.main.temp_min).slice(0, 2)}℃
                  </strong>
                  <strong>
                    {String(spWeather.main.temp_max).slice(0, 2)}℃
                  </strong>
                  <strong>São Paulo</strong>
                </section>
              )}
              {brasiliaWeather && (
                <section>
                  <strong>{brasiliaWeather?.main.temp_min}℃</strong>
                  <strong>{brasiliaWeather?.main.temp_max}℃</strong>
                  <strong>Brasília</strong>
                </section>
              )}
            </div>
          </div>

          <div>
            <section>
              <span>Min</span>
              <span>Máx</span>
              <strong />
            </section>
            <div>
              {belemWeather && (
                <section>
                  <strong>{belemWeather?.main.temp_min}℃</strong>
                  <strong>{belemWeather?.main.temp_max}℃</strong>
                  <strong>Bélem</strong>
                </section>
              )}
              {salvadorWeather && (
                <section>
                  <strong>{salvadorWeather?.main.temp_min}℃</strong>
                  <strong>{salvadorWeather?.main.temp_max}℃</strong>
                  <strong>Salvador</strong>
                </section>
              )}

              {belemWeather && (
                <section>
                  <strong>{belemWeather?.main.temp_min}℃</strong>
                  <strong>{belemWeather?.main.temp_max}℃</strong>
                  <strong>Belem</strong>
                </section>
              )}
            </div>
          </div>
        </DefaultCities>
      </div>
    </Container>
  );
};

export default Home;
