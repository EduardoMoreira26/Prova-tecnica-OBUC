/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FiEdit, FiTrash, FiPlus, FiCheck, Fix } from 'react-icons/fi';

import Button from '../../components/Button';

import { Container, ContentMenu, Workspace, Form } from './styles';

const arrLocaisTrabalho = [];

const Home = () => {
  const [func, setFunc] = useState('');
  const [building, setBuildind] = useState('');
  const [local, setLocal] = useState('');
  const [dataBase, setDataBase] = useState([]);

  const handleCreateRegister = (e) => {
    e.preventDefault();

    const addNewResgister = {
      id: uuidv4(),
      func,
      building,
      local,
    };

    arrLocaisTrabalho.push(addNewResgister);

    setDataBase(arrLocaisTrabalho);

    setFunc('');
    setBuildind('');
    setLocal('');
  };

  return (
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

        <Form onSubmit={handleCreateRegister}>
          <label htmlFor="Funcionário">
            Funcionário
            <br />
            <input
              required
              name="Funcionario"
              type="text"
              id="Funcionário"
              value={func}
              onChange={(e) => setFunc(e.target.value)}
            />
          </label>

          <label htmlFor="Prédio">
            Prédio
            <br />
            <select
              required
              name="Predio"
              value={building}
              id="Prédio"
              onChange={(e) => setBuildind(e.target.value)}
            >
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
            <input
              required
              type="text"
              id="Local de Trabalho"
              name="Local de Trabalho"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </label>
          <button type="submit">
            <FiPlus />
          </button>
        </Form>

        <table>
          <tr>
            <td className="headerTable">Funcionário</td>
            <td className="headerTable">Prédio</td>
            <td className="headerTable">Local de trabalho</td>
            <td className="headerTable" />
          </tr>
        </table>

        {dataBase.map((info) => (
          <table key={info.id}>
            <tr>
              <td className="contentTable">{info.func}</td>
              <td className="contentTable">{info.building}</td>
              <td className="contentTable">{info.local}</td>
              <td className="contentTable">
                <FiEdit />
                <FiTrash />
              </td>
            </tr>
          </table>
        ))}
      </Workspace>
    </Container>
  );
};

export default Home;
