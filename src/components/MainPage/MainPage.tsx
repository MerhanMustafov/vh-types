import React, {useState, useEffect} from 'react';
import {getVehicles} from '../../Api/requests'
import {Search} from '../Search/SeaechComponent';
import {BoxComponent} from '../Content/Box'

import {Data} from '../../Interfaces/Data'
import {Vehicles} from '../../Interfaces/meta/meta' 



function MainPage(){
    const [data, setData] = useState<Data | null>(null)
    const [vhTypes, setVhTypes] = useState<Vehicles[]>([])

    useEffect(() => {
        async function getVhTypes(){
            const response = await getVehicles()
            setVhTypes(response.meta.vehicle_types)
        }
        getVhTypes()
    }, [])
    return(
        <div className="w main-page">
            <Search vhTypes={vhTypes} setData={setData}></Search>
            
            {data && data?.data.length > 0 ?
                data?.data.map((obj: any) => 
                    <BoxComponent  key={obj.id} data={obj} included={data.included}></BoxComponent>
                ) 
                : 
                <div className="empty">Type in to Search or select a type !</div>
            }
        </div>
    )
}



export {MainPage}
