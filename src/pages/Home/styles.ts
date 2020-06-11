import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-bottom: 30px;
  color: #fff;
  font-size: 48px;
  font-family: 'Ubuntu';
`;

export const Details = styled.div`
  background-color: #fff2e8;
  flex: 1;
  display: flex;
  width: 380px;
  padding: 20px;

  flex-direction: column;

  span {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    margin-top: 15px;
    font-size: 48px;
    font-weight: bold;
  }
`;

export const City = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  span + span {
    font-size: 16px;
    color: #d8775a;
  }
`;

export const MaxMinFeelslike = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 15px;

  div {
    display: flex;
    flex-direction: row;

    span {
      font-size: 14px;
    }

    div + div {
      margin-left: 10px;
    }
  }
`;

export const Feelslike = styled.div`
  margin-left: 25px;

  span {
    font-weight: normal;
  }

  span + span {
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const WindHumid = styled.div`
  display: flex;

  flex-direction: row;
  margin-top: 15px;

  span {
    font-weight: normal;
    font-size: 14px;
  }

  span + span {
    font-weight: bold;
    margin-left: 5px;
  }

  div + div {
    margin-left: 40px;
  }
`;

export const Line = styled.span`
  margin-top: 15px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #d8775a;
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-size: 12px;
    color: #d8775a;
    font-family: Ubuntu;
  }

  div {
    p {
      font-size: 16px;
    }

    span + span {
      margin-left: 5px;
    }
  }

  div + div {
    margin-left: 12px;
  }
`;

export const Form = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  width: 410px;
  align-items: center;

  &:focus {
    box-shadow: none;
  }

  input {
    flex: 1;
    height: 42px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    position: relative;
    left: -32px;
    background: transparent;
    border: none;
  }
`;

export const Row = styled.span`
  width: 550px;
  margin-top: 40px;
  border-top-style: solid;
  border-top-width: 0.25px;
  border-top-color: #fff;
`;

export const DefaultCities = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  max-width: 500px;

  div + div {
    margin-left: 50px;
  }

  div {
    section {
      margin-bottom: 10px;

      span + span {
        margin-left: 25px;
      }

      strong + strong {
        margin-left: 15px;
      }
    }

    div {
      section {
        margin-top: 24px;
      }
    }
  }
`;

export const CapitalTitles = styled.span`
  display: flex;
  margin-top: 15px;
  color: #fff;
  font-size: 28px;
  font-family: 'Ubuntu';
`;
