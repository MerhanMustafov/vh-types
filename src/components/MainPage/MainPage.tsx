import React, {useState, useEffect} from 'react';
import {Search} from '../Search/SeaechComponent';
import {BoxComponent} from '../Content/Box'

function MainPage(){
    const [data, setData] = useState<any>(null)
    return(
        <div className="w main-page">
            <Search data={data} setData={setData}></Search>
            
            {data && data?.data.length > 0 ?
                data?.data.map((obj: any) => 
                    //key={obj.id}
                    <BoxComponent  key={obj.id} data={obj} included={data.included}></BoxComponent>
                ) 
                : 
                <div className="empty">Type in to Search !</div>
            }
        </div>
    )
}



export {MainPage}