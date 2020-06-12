import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import {
  Container,
  City,
  MaxMinFeelslike,
  Feelslike,
  WindHumid,
  Line,
  Forecast,
} from './styles';

import WeatherProps from '../../../interfaces/IWeatherProps';

interface Props {
  setShowDetails: (show: boolean) => void;
  weather: WeatherProps;
}

const Details: React.FC<Props> = ({ setShowDetails, weather }) => {
  return (
    <Container>
      <City>
        <span>{`${weather.city} - ${weather.country}`}</span>
        <button type="button" onClick={() => setShowDetails(false)}>
          X
        </button>
      </City>
      <p>{`${weather.temp} ${weather.weather}`}</p>

      <MaxMinFeelslike>
        <div>
          <div>
            <FiArrowDown color="#d8775a" />
            <span>{weather.tempMin}</span>
          </div>
          <div>
            <FiArrowUp color="#d8775a" />
            <span>{weather.tempMax}</span>
          </div>
        </div>
        <Feelslike>
          <span>Sensação</span>
          <span>{weather.feelslike}</span>
        </Feelslike>
      </MaxMinFeelslike>
      <WindHumid>
        <div>
          <div>
            <span>Vento</span>
            <span>{`${weather.wind}km/h`}</span>
          </div>
        </div>
        <div>
          <span>Humidade</span>
          <span>{`${weather.humidity}%`}</span>
        </div>
      </WindHumid>
      <Line />
      <Forecast>
        {weather.forecast &&
          weather.forecast.map((forecast) => (
            <div key={forecast.day}>
              <p>{forecast.day}</p>
              <div>
                <span>{forecast.tempMin}</span>
                <span>{forecast.tempMax}</span>
              </div>
            </div>
          ))}
      </Forecast>
    </Container>
  );
};

export default Details;
