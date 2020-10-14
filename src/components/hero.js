import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import Countdown from "react-countdown"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h3 style={{ textAlign: "center" }}>DevC Kingston</h3>
    <h1 style={{ textAlign: "center" }}>Build Day 2020</h1>

    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Build days are virtual events where developers can come together, form
      teams, and code together in order to create projects for a challenge.
    </p>
    <a href="https://fb.me/e/1FbKxjX8w">
      <Button>RSVP</Button>
    </a>
    <span style={{ marginTop: 70 }}>Starting in:</span>
    <h1 style={{ textAlign: "center" }}>
      <Countdown date={new Date("October 17, 2020 17:00:00")} />
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
