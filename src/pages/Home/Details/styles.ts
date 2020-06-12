import styled from 'styled-components';

export const Container = styled.div`
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
    font-size: 44px;
    font-weight: bold;
  }
`;

export const City = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    cursor: pointer;
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
