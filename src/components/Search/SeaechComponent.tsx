import React, {useState, useEffect} from 'react';
import {getData} from '../../Api/requests'



function Search(props: any){
    let {data, setData} = props
    const [word, setWord] = useState('')

    async function requestHandler(e: any){
        if(e.key === 'Enter'){
            if(word.length > 0){
            const response = await getData(word)
            setData(response)

            }else{
            setData(null)

            }
        }

    }

    //onKeyDown={(e) => requestHandler(e)}
    return(
        <div className="searchWrapper">
            <input type="text" className="searchEngine" id='serchEngine' placeholder='Vehicle Types' onChange={(e) => setWord(e.target.value)} onKeyDown={(e) => requestHandler(e)}/>
            <div className="types">Types</div>
        </div>
    )
}


export {Search}