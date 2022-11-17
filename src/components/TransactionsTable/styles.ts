import styled from "styled-components";

export const Conteiner = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--white);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--white);

      &:first-child{
        color: var(--white)
      }

      &.withdraw{
        color: var(--red)
      }

      &.deposit{
        color: var(--green)
      }
  }

`