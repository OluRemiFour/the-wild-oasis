import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 768px) {
    display: block;
    /* align-items: end; */
  }
`;

export default TableOperations;
