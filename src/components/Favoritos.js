import styled from "styled-components";

export const StyledFavoritos = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  margin-top: -35px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;

  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  section {
    width: auto;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
      text-align: center;
      float: left;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(100px,1fr);

      /* overflow-x: scroll; */
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 5px;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          font-family: 'Helvetica';
          font-style: normal;
          display: block;
          color: black;
        }
      }
    }
  }
`;