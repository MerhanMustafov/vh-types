import React, {useState, useEffect} from 'react';
import {getData} from '../../Api/requests'



function Search(props: any){
    let {data, setData, vhTypes} = props
    let [word, setWord] = useState('')

    async function requestHandler(e: any){
        console.log(e)
        if(e.key === 'Enter'){
            if(word.length > 0){
            const response = await getData(word)
            setData(response)

            }else{
            setData(null)

            }
        }else{
            if(e.type === 'click'){
                const response = await getData(e.target.innerText)
                setData(response)

            }
        }

    }

    function clickHandler(e: any){
        setWord(e.target.innerText)
        requestHandler(e)
    }
    //onKeyDown={(e) => requestHandler(e)}
    return(
        <div className="searchWrapper">
            <input type="text" className="searchEngine" id='serchEngine' placeholder='Vehicle Types' defaultValue={word} onChange={(e) => setWord(e.target.value)} onKeyDown={(e) => requestHandler(e)}/>
            <div className="vh-types"> <span> Types: </span>  
            {vhTypes && vhTypes?.length > 0 
            ?
            vhTypes.map((v: any) => <div key={Math.random()} className="vh-type" onClick={(e: any) => clickHandler(e)}>{v.type}</div> ) 
            :
            null

            }
            
            </div>
            
        </div>
    )
}


export {Search}