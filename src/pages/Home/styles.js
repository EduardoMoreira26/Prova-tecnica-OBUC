import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100vw;
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
      width: 200px;
      border-radius: 3px;
      border: 0;
      padding: 0 5px;
      color: #fff;
    }
  }
`;

export const ListItem = styled.form`
  display: flex;
  select {
    text-align: center;
    width: 200px;
    height: 56px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #c9c9c9;
    background: #f2f2f2;
    outline: 0;
    padding: 0 5px;
    margin: 0 1px;
  }
`;

export const ContainerButtons = styled.div`
  background: #f2f2f2;
  border: 1px solid #c9c9c9;
  height: 56px;
  width: 200px;
  border-radius: 3px;
  text-align: center;
  button {
    margin: 20px 10px;
    border: none;
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
    width: 230px;
    height: 40px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #c9c9c9;
    outline: 0;
    padding: 0 5px;
    margin-right: 10px;
  }
  button {
    border: none;
    background: #fff;
  }
  svg {
    margin-top: 30px;
    font-size: 20px;
    transition: font-size 0.1s;
    &:hover {
      font-size: 23px;
    }
  }
`;
