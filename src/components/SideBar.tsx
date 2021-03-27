import React from 'react'
const microphone = require('../assets/images/microphone.svg')
import '../assets/stylesheets/css/main.css'

export default function SideBar() {
  return (
  <div className="l-flex l-ali-ite-s l-jus-con-c l-pt-40 l-w-90 t-bgc-white">
    <img src={microphone} />
  </div>
  )
} 