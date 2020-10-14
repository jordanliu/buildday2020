import React from "react"

import { COLORS } from "../styles/constants"

const Footer = () => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none", color: COLORS.gray }}
          href="https://www.facebook.com/groups/devckingston"
        >
          FACEBOOK
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {"DevC Kingston"}
      </div>
    </div>
  </footer>
)

export default Footer
