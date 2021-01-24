import React, { useState, useEffect } from "react";
import ListOfImpressions from "./ListOfImpressions";
const microphone = require("../assets/images/microphone.svg");
import "../assets/stylesheets/css/main.css";

export default function Home() {
  const [ impressions, setImpressions ] = useState<string[]>([])
  const [ state, setState ] = useState<'new-impression'|'idle'|'empty-impressions'>('empty-impressions')

  const getAllImpressions = async () => {
    let rawResponse: any = await fetch('', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    let jsonResponse = await rawResponse.json()
    console.log(JSON.stringify(jsonResponse, null, 2))
  }

  const newImpression = async () => {
    setState('new-impression')
  }

  const enterImpression = (e: any) => { 
    let impression = e.target.value
    console.log('impression: ', impression)
    if (e.key === 'Enter') {
      setImpressions([ ...impressions, impression ])
      console.log('impressions: ', impressions)
      setState('idle')
    }
  }

  return (
    <div className="l-flex l-flex-dir-row l-vh-100 l-vw-100">
      <div className="l-flex l-ali-ite-s l-jus-con-c l-pt-40 l-w-90 t-bgc-white">
        <img src={microphone} />
      </div>
      <div className="l-flex l-flex-dir-col t-bgc-primary-gray l-vw-100">
        <div className="l-flex l-mt-40 l-ml-40 l-w-400">
          <div className="t-small-blue-dot l-mt-20 l-mr-10"></div>
          <div>
            <p className="t-f-s-22">Impressions</p>
          </div>
        </div>
        { state === 'empty-impressions' && impressions.length === 0 ? 
        <div className="l-flex l-flex-dir-row l-jus-con-c l-ali-ite-c l-h-500">
          <p className="t-f-s-40 t-c-darker-gray">No impressions added.</p>
          <div
            className="l-flex t-big-blue-dot l-mt-13 l-ml-40 l-jus-con-c"
            onClick={newImpression} >
            <p className="t-big-blue-dot-text l-mt-22">+</p>
          </div>
        </div>
        :
        <div className="l-mt-30 l-ml-40 l-w-500">
          <ListOfImpressions impressions={impressions} />
          { state === 'new-impression' ? 
            <div className="l-flex-dir-col l-mt-10 t-bgc-white l-bor-rad-10 l-p-10 l-pl-10 l-w-500">
              <div className="l-bor-l-10-blue l-h-100">
                <input type="text"
                  className="l-ml-50 t-f-s-20 l-ali-ite-c l-w-400 l-pl-10 l-bor-0"
                  onKeyPress={enterImpression} 
                  autoFocus />
              </div>
            </div>  
          : <></> }
          <button className="t-big-blue-dot l-ali-sel-flex-e l-mt-20 l-jus-con-c" 
            onClick={newImpression}>
            <p className="t-big-blue-dot-text l-mt-5">+</p>
          </button>
        </div>
        }
         
      </div>
    </div>
  )
} 