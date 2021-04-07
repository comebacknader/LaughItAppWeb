import React from 'react'
import '../assets/stylesheets/css/main.css'

export default function PageContainer(props) {
  return (
    <div className="l-flex l-flex-dir-row l-vh-100 l-vw-100" data-testid="page-container">
      {props.children}
    </div>
  )
}

