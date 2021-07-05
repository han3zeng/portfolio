import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 1;
    background: white;
    box-shadow: 0 5px 3px #E9E9E9;
    display: flex;
    padding: 10px 0 10px 20px;
    font-size: 26px;
    box-sizing: border-box;
    opacity : ${props => props.ifShowup ? 1 : 0};
    transform: ${props => props.ifShowup ? 'translateY(0)' : 'translateY(-100%)'};
    transition: all 0.3s ease-in-out;
    transition-property: opacity, transform;
    a:not(:last-child) {
      margin-right: 30px;
    }
    a {
      transition: color 0.3s ease-in-out;
      &:link {
        color: black;
      }
      &:active {
        color: black;
      }
      &:visited {
        color: black;
      }
      &:hover {
        color: ${props => props.theme.buttonColor};
      }
    }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifShowup: false,
    }
    this.containerNode = React.createRef();
    this.scrollHandler = this._scrollHandler.bind(this);
  }


  _scrollHandler() {
    const portfolioNode =  document.getElementById('portfolio');
    if (!document || !window || !portfolioNode) {
      return;
    }
    const nodeTop = portfolioNode.getBoundingClientRect().top;
    const { ifShowup } = this.state;
    if (nodeTop <= 0 && !ifShowup) {
      this.setState({
        ifShowup: true,
      })
    }
    if(nodeTop > 0 && ifShowup) {
      this.setState({
        ifShowup: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler)
  }
  render() {
    const { ifShowup } = this.state;
    return (
      <Container
        ref={this.containerNode}
        ifShowup={ifShowup}
      >
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </Container>
    );
  }
}

export default Navigation;
