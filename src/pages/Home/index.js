/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FiEdit, FiTrash, FiPlus } from 'react-icons/fi';

import {
  Container,
  ContentMenu,
  Workspace,
  Form,
  ListItem,
  ContainerButtons,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const arrLocaisTrabalho = [];

const Home = () => {
  const [func, setFunc] = useState('');
  const [building, setBuildind] = useState('');
  const [local, setLocal] = useState('');

  const [dataBase, setDataBase] = useState(() => {
    const storagedDataBase = sessionStorage.getItem('@Obuc:dataBase');

    if (storagedDataBase) {
      return JSON.parse(storagedDataBase);
    }
    return [];
  });
  useEffect(() => {
    sessionStorage.setItem('@Obuc:dataBase', JSON.stringify(dataBase));
  }, [dataBase]);

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

  const updateRegister = ({ target }, index) => {
    const itensCopy = Array.from(dataBase);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setDataBase(itensCopy);
  };

  const handleRemoveRegister = (id) => {
    const registerCopy = Array.from(dataBase);
    registerCopy.splice(id, 1);

    setDataBase(registerCopy);
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
        <h1>Locais de Trabalho</h1>

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
              type="select"
              value={building}
              id="Prédio"
              onChange={(e) => setBuildind(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione uma opção
              </option>
              <option value="Prédio1">Prédio 1</option>
              <option value="Prédio2">Prédio 2</option>
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
          <tbody>
            <tr>
              <td className="headerTable">Funcionário</td>
              <td className="headerTable">Prédio</td>
              <td className="headerTable">Local de trabalho</td>
              <td className="headerTable" />
            </tr>
          </tbody>
        </table>

        {dataBase.length > 0 && (
          <div>
            {dataBase.map((info) => (
              <ListItem key={info.id}>
                <Input
                  name="Funcionario"
                  type="text"
                  id="Funcionário"
                  defaultValue={info.func}
                />

                <select
                  name="Predio"
                  type="select"
                  defaultValue={info.building}
                  id="Prédio"
                >
                  <option value="" disabled hidden>
                    Selecione uma opção
                  </option>
                  <option value="Prédio1">Prédio 1</option>
                  <option value="Prédio2">Prédio 2</option>
                  <option value="prédio3">Prédio 3</option>
                </select>

                <Input
                  type="text"
                  id="Local de Trabalho"
                  name="Local de Trabalho"
                  defaultValue={info.local}
                />

                <ContainerButtons>
                  <button onClick={updateRegister}>
                    <FiEdit />
                  </button>
                  <button onClick={() => handleRemoveRegister(info.id)}>
                    <FiTrash />
                  </button>
                </ContainerButtons>
              </ListItem>
            ))}
          </div>
        )}
      </Workspace>
    </Container>
  );
};

export default Home;
