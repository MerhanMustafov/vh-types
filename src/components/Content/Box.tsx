import React, {useState, useEffect} from 'react';

function BoxComponent(props: any){
    console.log(props)
    const {data, included} = props 
    console.log(data, '77777')
    // let {d, included} = props
    // console.log(included)
    let id = data?.relationships?.primary_image?.data?.id
    let imgUrl = included.filter((x: any)=> x.id == id)[0]?.attributes.url
    // console.log(d, 'asdasdasdasdasd')
    //data[].attributes.name
    //data[].relationships.primary_image.data.id
    //included[].attributes.url
    
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