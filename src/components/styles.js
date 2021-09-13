import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    text-justify: justify;
  }
`

const Button = styled(Link)`
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 1rem 4rem;
  background-color: rgba(44, 62, 80, 0.85);
  color: #ffffff;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
`

const Logo = styled(Link)`
  display: flex;
  align-items: start;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
`
const TextBox = styled.div`
  padding: 2rem;
  border: 1px solid #f4f6f6;
`
const H2 = styled.h2`
  margin-top: 2rem;
  text-align: center;
  font-size: 4rem;
`

const H3 = styled.h3`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`

export { Container, Button, Logo, TextBox, H2, H3 }
