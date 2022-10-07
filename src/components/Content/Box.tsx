import React, {useState, useEffect} from 'react';

function BoxComponent(props: any){
    const {data, included} = props 
    let id = data?.relationships?.primary_image?.data?.id
    let imgUrl = included.filter((x: any)=> x.id == id)[0]?.attributes.url
    
    
    return(
        <div className="contentWrapper">
            <div className="imgWrapper">
                <img src={imgUrl} alt="img" className="img"/>

            </div>
            <div className="text">{data.attributes.name}</div>
        </div>
    )
}



export {BoxComponent}