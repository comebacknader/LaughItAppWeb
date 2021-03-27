import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImpressionsList from './ImpressionsList'
import SideBar from './SideBar'
import '../assets/stylesheets/css/main.css'

import { getImpressions } from '../redux/actions/impressions'

export default function Impressions() {
  const [ state, setState ] = useState<'new-impression'|'idle'|'empty-impressions'>('empty-impressions')
  const impressions = useSelector((state: any) => state.impressions) 
  // const impressions: Array<string> = [] 
  useEffect(() => {
    console.log("impressions: ", impressions)
    const promise = new Promise((resolve, reject) => {
      reject('Imam is not coming')
      resolve('Imam is coming')
    })
    promise.then((res) => {console.log(res)}, (err) => {console.log(err)})
    checkImamArrived()
  })

  const checkImamArrived = async () => {
    let status = await new Promise((resolve, reject) => {
      resolve('Imam is coming')
    })
    console.log("status: ", status)
  }

  const newImpression = async () => {
    setState('new-impression')
  }

  const enterImpression = (e: any) => { 
    let impression = e.target.value
    console.log('impression: ', impression)
    if (e.key === 'Enter') {
      console.log('impressions: ', impressions)
      setState('idle')
    }
  }

  return (
    <div className="l-flex l-flex-dir-row l-vh-100 l-vw-100">
      <SideBar />
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
          <ImpressionsList impressions={impressions} />
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
            <p className="t-big-blue-dot-text l-mt-2">+</p>
          </button>
        </div>
        }
         
      </div>
    </div>
  )
}

