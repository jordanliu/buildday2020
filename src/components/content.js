import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "1rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="US$133,000 in cash prizes"
      description="Let's Get Building"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Develop using Facebook technologies</h3>
        <p style={{ color: COLORS.gray }}>
          You’ll be creating a step-by-step written tutorial that demonstrates
          one or more features of any of the technologies listed below: React,
          React Native, Spark AR, Docusaurus, Wit.AI, etc.
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
