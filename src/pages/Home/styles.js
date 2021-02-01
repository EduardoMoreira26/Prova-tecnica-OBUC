import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1350px;
  margin: 30px auto;
`;

export const ContentMenu = styled.div`
  grid-column: 1;
`;

export const Workspace = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 20px;

  h1 {
    font-size: 36px;
    font-weight: 300;
    font-style: italic;
    color: #1b3745;
  }

  table {
    text-align: center;

    .headerTable {
      background: #1b3745;
      height: 56px;
      width: 230px;
      border-radius: 3px;
      border: 0;
      padding: 0 5px;
      color: #fff;
    }

    .contentTable {
      background: #e2e2e2;
      height: 56px;
      width: 230px;
      border-radius: 3px;
      border: 0;
      color: #000;
      padding: 0 5px;
    }

    td:nth-last-child(1) {
      width: 150px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;

  label {
    color: #c9c9c9;
    font-weight: bold;
    font-style: italic;
    padding-top: 10px;
  }

  input,
  select {
    flex: 1;
    width: 250px;
    height: 40px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #c9c9c9;
    outline: 0;
    padding: 0 5px;
    margin-right: 10px;
  }
`;
