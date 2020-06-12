import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import ForecastWeatherProps from '../../interfaces/IForecastWeatherProps';
import DefaultWeatherProps from '../../interfaces/IDefaultWeatherProps';
import WeatherProps from '../../interfaces/IWeatherProps';

import weatherConfig from '../../config/weatherProps';
import weatherAPI from '../../services/weatherApi';
import Details from './Details';

import {
  Container,
  Title,
  Form,
  Row,
  DefaultCities,
  CapitalTitles,
} from './styles';

const Home: React.FC = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [search, setSearch] = useState('');
  const [weatherResult, setWeatherResult] = useState({} as WeatherProps);

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
    return weatherAPI.get<DefaultWeatherProps>('weather', {
      params: {
        q: city,
        appid: weatherConfig.appKey,
        units: 'metric',
        lang: 'pt_br',
      },
    });
  }, []);

  const handleSearch = useCallback(async () => {
    const { data } = await weatherAPI.get<ForecastWeatherProps>('forecast', {
      params: {
        q: `${search},BR`,
        appid: weatherConfig.appKey,
        units: 'metric',
        lang: 'pt_br',
      },
    });

    console.log(data);
    const formattedForecast = {
      city: data.city.name,
      country: data.city.country,
      temp: `${String(data.list[0].main.temp).slice(0, 2)}℃`,
      wind: String(data.list[0].wind.speed),
      feelslike: `${String(data.list[0].main.feels_like).slice(0, 2)}℃`,
      tempMax: `${String(data.list[0].main.temp_max).slice(0, 2)}℃`,
      tempMin: `${String(data.list[0].main.temp_min).slice(0, 2)}℃`,
      humidity: data.list[0].main.humidity,
      weather: data.list[0].weather[0].description,
    };

    setWeatherResult(formattedForecast);
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

  const formatTemperature = useCallback((weather: DefaultWeatherProps) => {
    return Object.assign(weather, {
      main: {
        temp_max: `${String(weather.main.temp_max).slice(0, 2)}℃`,
        temp_min: `${String(weather.main.temp_min).slice(0, 2)}℃`,
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
      ] = await Promise.all([
        loadDefault('Recife,BR'),
        loadDefault('São Paulo,BR'),
        loadDefault('Brasília,BR'),
        loadDefault('Belem,BR'),
        loadDefault('Salvador,BR'),
        loadDefault('Curitiba,BR'),
      ]);

      setRecifeWeather(formatTemperature(responseRecife.data));

      setSPWeather(formatTemperature(responseSP.data));
      setBrasiliaWeather(formatTemperature(responseBrasilia.data));
      setBelemWeather(formatTemperature(responseBelem.data));
      setSalvadorWeather(formatTemperature(responseSalvador.data));
      setCuritibaWeather(formatTemperature(responseCuritiba.data));
    }

    // initialValues();
  }, [loadDefault, formatTemperature]);

  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      {showDetails && (
        <Details setShowDetails={setShowDetails} weather={weatherResult} />
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
              {recifeWeather && (
                <section>
                  <strong>{recifeWeather.main.temp_min}</strong>
                  <strong>{recifeWeather.main.temp_max}</strong>
                  <strong>{recifeWeather.name}</strong>
                </section>
              )}
              {spWeather && (
                <section>
                  <strong>{spWeather.main.temp_min}</strong>
                  <strong>{spWeather.main.temp_max}</strong>
                  <strong>{spWeather.name}</strong>
                </section>
              )}
              {brasiliaWeather && (
                <section>
                  <strong>{brasiliaWeather.main.temp_min}</strong>
                  <strong>{brasiliaWeather.main.temp_max}</strong>
                  <strong>{brasiliaWeather.name}</strong>
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
                  <strong>{belemWeather.main.temp_min}</strong>
                  <strong>{belemWeather.main.temp_max}</strong>
                  <strong>{belemWeather.name}</strong>
                </section>
              )}
              {salvadorWeather && (
                <section>
                  <strong>{salvadorWeather.main.temp_min}</strong>
                  <strong>{salvadorWeather.main.temp_max}</strong>
                  <strong>{salvadorWeather.name}</strong>
                </section>
              )}

              {curitibaWeather && (
                <section>
                  <strong>{curitibaWeather.main.temp_min}</strong>
                  <strong>{curitibaWeather.main.temp_max}</strong>
                  <strong>{curitibaWeather.name}</strong>
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
