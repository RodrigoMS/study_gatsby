import React from "react"
//import { Link, useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import './header-module.scss'

const Header = () => {

  /*const data = useStaticQuery(
    graphql`
      query {
        site{
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )*/

  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="heroContent">
        
        <p className="brand">
          <Link to="/">{/*data.site.siteMetadata.title*/}</Link>
        </p>

        <p className="description">
          {/*data.site.siteMetadata.description*/}
        </p>
      </div>

      <nav className="navContainer">
        <ul className="navList">
          <li>
            <Link to="/" activeClassName="activeMenuItem">Home</Link>
          </li>

          <li>
            <Link to="/blog/" activeClassName="activeMenuItem">Blog</Link>
          </li>

          <li>
            <Link to="/contact/" activeClassName="activeMenuItem">Contato</Link>
          </li>

          <li>
            <Link to="/about" activeClassName="activeMenuItem">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  
  )
}

  /*return (
    <header>
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>

        <p>Gatsby</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/blog/">Blog</Link>
          </li>

          <li>
            <Link to="/contact/">Contato</Link>
          </li>

          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  
  )
}*/

export default Header