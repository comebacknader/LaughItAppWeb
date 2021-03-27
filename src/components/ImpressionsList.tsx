import React, { useEffect } from "react";
import "../assets/stylesheets/css/main.css";

export default function ImpressionsList(props) {
  const impressions: Array<string> = props.impressions
  
  useEffect(() => {}, [])

  return (
    <>
      {impressions.map((item: any, index: any) => {
        return (
        <div className="l-flex l-flex-dir-row l-mt-10 l-h-60 t-bgc-white l-bor-rad-10 l-w-500 l-p-10" key={index}>
          <div className="l-w-10 t-bgc-secondary-blue"></div>
          <p className="l-ml-50 t-f-s-20 l-ali-sel-c">{item}</p>
        </div>
        )
      })}
    </>
  )
} 