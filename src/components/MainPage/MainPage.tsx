import React, {useState, useEffect} from 'react';
import {getVehicles} from '../../Api/requests'
import {Search} from '../Search/SeaechComponent';
import {BoxComponent} from '../Content/Box'

function MainPage(){
    const [data, setData] = useState<any>(null)
    const [vhTypes, setVhTypes] = useState([])

    useEffect(() => {
        async function getVhTypes(){
            const response = await getVehicles()
            setVhTypes(response.meta.vehicle_types)
        }
        getVhTypes()
    }, [])
    return(
        <div className="w main-page">
            <Search data={data} setData={setData} vhTypes={vhTypes}></Search>
            
            {data && data?.data.length > 0 ?
                data?.data.map((obj: any) => 
                    //key={obj.id}
                    <BoxComponent  key={obj.id} data={obj} included={data.included}></BoxComponent>
                ) 
                : 
                <div className="empty">Type in to Search or select a type !</div>
            }
        </div>
    )
}



export {MainPage}