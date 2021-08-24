import styled from 'styled-components';

const Container = styled.section`
  padding: ${props => props.witoutPadding ? '0' :  `${props.theme.sectionMargin} ${props.theme.pageMargin}`};
  box-sizing: border-box;
  background-color: ${props => props.isWhite ? 'white' : '#F7F7F7'};
`

const ContentWrapper= styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  position: relative;
`;

const Divider = styled.div`
  border-top: 2px solid #e2e2e2;
  margin: 0 -${props => props.theme.pageMargin};
`;

function SectionContainer (props) {
  const { children, isWhite, withBorder, id, witoutPadding } = props;
  return (
    <Container
      witoutPadding={witoutPadding}
      isWhite={isWhite}
      id={id || undefined}
    >
      {withBorder && <Divider />}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
}

export {
  SectionContainer,
};
