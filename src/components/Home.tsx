import React, { useState } from "react";
import ListOfImpressions from "./ListOfImpressions";
const microphone = require('../assets/images/microphone.svg');
import "../assets/stylesheets/css/main.css";

export default function Home() {
  const [ impressions, setImpressions ] = useState<string[]>([])
  const [ state, setState ] = useState<'new-impression'|'idle'|'empty-impressions'>('empty-impressions')
  const [ impression, setImpression ] = useState<string>('')

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
    if (e.nativeEvent.key === 'Enter') {
      setImpressions([ ...impressions, impression])
      setImpression('') 
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
        <div className="l-flex-dir-row l-jus-con-c l-ali-ite-c l-h-500 l-w-500">
          <p className="t-f-s-40 t-c-darker-gray">No impressions added.</p>
          <button 
            className="t-big-blue-dot l-mt-13 l-ml-40"
            onClick={newImpression} />
            <p className="t-big-blue-dot-text">+</p>
        </div>
        :
        <div className="l-mt-30 l-ml-40 l-w-500">
          <ListOfImpressions impressions={impressions} />
          { state === 'new-impression' ? 
            <div className="l-flex-dir-row l-mt-10 t-bgc-white l-bor-rad-10 l-p-10 l-w-500">
              <div className="l-w-5 l-h-50 t-bgc-secondary-blue"></div>
              <input type="text"
                className="l-ml-50 t-f-s-20 l-ali-ite-c l-w-400 l-pl-10"
                onKeyPress={enterImpression} 
                value={impression}
                autoFocus />
            </div>  
          : <></> }
          <button className="t-big-blue-dot l-ali-sel-flex-e l-mt-20" 
            onClick={newImpression}>
            <p className="t-big-blue-dot-text">+</p>
          </button>
        </div>
        }
      </div>
    </div>
  )
} 