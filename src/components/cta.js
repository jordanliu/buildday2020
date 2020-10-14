import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What is Build Day?"
      description="Developer Circles Community Challenge 2020"
    />
    <a href="https://developercircles2020.devpost.com/">
      <Button>Learn More</Button>
    </a>
  </div>
)

export default CallToAction
