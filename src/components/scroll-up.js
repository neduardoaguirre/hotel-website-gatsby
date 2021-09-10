import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { FaAngleUp } from "react-icons/fa"

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: #ffffff;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom: 8px;
  right: 8px;

  @media (max-width: 768px) {
    font-size: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    bottom: 6px;
    right: 4px;
  }
`

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
    })
  })

  const scrollUp = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <>
      {showButton && (
        <Button onClick={scrollUp}>
          <FaAngleUp />
        </Button>
      )}
    </>
  )
}

export default ScrollUp
