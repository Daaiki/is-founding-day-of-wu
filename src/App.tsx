import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'

import { English } from './pages/English'
import { Japanese } from './pages/Japanese'
import { NotFound } from './pages/NotFound'

import styled from 'styled-components'
import { fontSize, color, breakPoint } from './styles/Utils'
import { GlobalStyle } from './styles/GlobalStyles'

// defining the env
// localhost or github pages
const isDev = process.env.NODE_ENV === 'development'
const BASE_URL = isDev ? '/' : '/is-founding-day-of-wu/'

export const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header>
          <StyledLink to={`${BASE_URL}`}>Japanese</StyledLink>
          <Span>/</Span>
          <StyledLink to={`${BASE_URL}en`}>English</StyledLink>
        </Header>
        <Switch>
          <Route exact path={`${BASE_URL}`} component={Japanese} />
          <Route path={`${BASE_URL}en`} component={English} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  )
}

const Container = styled.div`
  max-width: 260px;
  margin: 60px auto 0 auto;

  @media screen and (min-width: ${breakPoint.md}) {
    max-width: 400px;
  }
  @media screen and (min-width: ${breakPoint.lg}) {
    max-width: 800px;
  }
`

const Header = styled.header`
  font-size: ${fontSize.textBase};
  display: flex;
  justify-content: flex-end;
`

const Span = styled.span`
  color: ${color.textDefault};
  font-size: ${fontSize.textBase};
  margin-left: 4px;
  margin-right: 4px;
`

const LinkA = styled.a`
  color: ${color.textDefault};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`

// add style to Link
const StyledLink = LinkA.withComponent(Link)
