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

interface Props {
  setShowDetails: (show: boolean) => void;
}

const Details: React.FC<Props> = ({ setShowDetails }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Details;
