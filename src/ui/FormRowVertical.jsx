import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  /* @media (min-width: 580px) {
    gap: 1rem;
    padding: 1.5rem 0;
    display: block;
  } */

  @media (min-width: 768px) {
    gap: 1rem; /* Medium screens (tablets) */
    padding: 1.5rem 0;
    /* flex-direction: row; */
  }

  @media (min-width: 1024px) {
    gap: 1.2rem; /* Large screens (desktops) */
    padding: 2rem 0;
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.2rem; /* Medium screens (tablets) */
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem; /* Large screens (desktops) */
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media (min-width: 768px) {
    font-size: 1.6rem; /* Medium screens (tablets) */
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem; /* Large screens (desktops) */
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
