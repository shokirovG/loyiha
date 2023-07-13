import React from 'react'

export const Footer = () => {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
      <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
      </div>
    </div>
   
  </footer>
  )
}
