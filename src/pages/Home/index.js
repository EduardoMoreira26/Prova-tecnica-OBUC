import React from 'react';
import Button from '../../components/Button';

import { Container, ContentMenu, Workspace, Form } from './styles';

import data from '../../data/arrLocaisTrabalho';

const Home = () => (
  <Container>
    <ContentMenu>
      <Button>Acessos Administrativos</Button>
      <Button>Serviços</Button>
      <Button>Fale Conosco</Button>
      <Button>Reporte</Button>
      <Button>Pesquisa de Satisfação</Button>
      <Button>Prédios</Button>
      <Button>Locais de Trabalho</Button>
    </ContentMenu>
    <Workspace>
      <h1>Locais de Traballho</h1>
      <Form>
        <label htmlFor="Funcionário">
          Funcionário
          <br />
          <input type="text" id="Funcionário" />
        </label>

        <label htmlFor="Prédio">
          Prédio
          <br />
          <select value="" id="Prédio">
            <option value="" disabled hidden>
              Selecione uma opção
            </option>
            <option value="prédio1">Prédio 1</option>
            <option value="prédio2">Prédio 2</option>
            <option value="prédio3">Prédio 3</option>
          </select>
        </label>

        <label htmlFor="Local de Trabalho">
          Local de Trabalho
          <br />
          <input type="text" id="Local de Trabalho" />
        </label>
      </Form>

      <table>
        <tr>
          <td className="headerTable">Funcionário</td>
          <td className="headerTable">Prédio</td>
          <td className="headerTable">Local de trabalho</td>
          <td className="headerTable">Editar / Deletar</td>
        </tr>
      </table>
      {data.map((info) => (
        <>
          <table>
            <tr>
              <td className="contentTable">{info.Funcionário}</td>
              <td className="contentTable">{info.Prédio}</td>
              <td className="contentTable">{info.Local}</td>
              <td className="contentTable">{info.Local}</td>
            </tr>
          </table>
        </>
      ))}
    </Workspace>
  </Container>
);

export default Home;
