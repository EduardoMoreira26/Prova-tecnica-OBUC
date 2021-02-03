import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;

  div {
    position: absolute;
    background: rgba(27, 55, 69, 0.7);
    height: 170px;
    width: 450px;

    h1 {
      color: #fff;
      font-style: italic;
      font-weight: 200;
      font-size: 36px;
      padding: 60px 0 0 80px;
    }
  }

  img {
    max-width: 100vw;
  }
`;
