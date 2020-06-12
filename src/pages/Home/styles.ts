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
