import React, { useState, useEffect } from 'react'
import { getData } from '../../Api/requests'
import { Vehicles } from '../../Interfaces/meta/meta'
import { Data } from '../../Interfaces/Data'

interface Props {
  vhTypes: Vehicles[]
  setData: any
  data?: Data | null
  setSpinner: (b: boolean) => void
  // setData: React.SetStateAction<S> = S | ((prevState: S) => S)
}
function Search(props: Props) {
  let { vhTypes, setData, data, setSpinner } = props
  let [word, setWord] = useState('')
  let key = 100

  async function requestHandler(e: any, type: string) {
    if (e.key === 'Enter') {
      cleanCssBold()
      setSpinner(true)
      if (word.length > 0) {
        const response = await getData(word)
        setData(response)
      } else {
        setData(null)
      }
      setSpinner(false)
    } else if (e.type === 'click') {
      setSpinner(true)
      cssManipulation(e, type)
      setWord(e.target.id)
      const response = await getData(e.target.innerText)
      setData(response)
      setSpinner(false)
    }
  }

  function cssManipulation(e: any, type: string) {
    cleanCssBold()
    const htmlEl: HTMLElement | null = document.getElementById(type)
    const htmlInput = document.getElementById('serchEngine') as HTMLInputElement
    htmlInput.value = type
    htmlEl?.classList.add('bold')
  }

  function cleanCssBold() {
    const htmlBold: HTMLElement | null = document.querySelector('.bold')
    if (htmlBold) {
      htmlBold.classList.remove('bold')
    }
  }

  return (
    <div className="searchWrapper">
      <input
        type="text"
        className="searchEngine"
        id="serchEngine"
        placeholder="Vehicle Types"
        // defaultValue={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => requestHandler(e, '')}
      />
      <div className="vh-types">
        {' '}
        <span> Types: </span>
        {vhTypes && vhTypes?.length > 0
          ? vhTypes.map((v) => (
              <div
                key={key++}
                id={v.type}
                className="vh-type"
                onClick={(e) => requestHandler(e, v.type)}
              >
                {v.type}
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export { Search }
