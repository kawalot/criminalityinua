import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/App.scss";

const Layout = ({children}) => {

  return (
    <div className="container">
      <Header />
      <section id="pageMain">
        <main className="main">{children}</main>
      </section>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
