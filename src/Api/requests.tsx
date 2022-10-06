import React from 'react';

// "https://search.outdoorsy.com/rentals?filter[keywords]=trailer&page[limit]=8&page[offset]=8"
const baseUrl = "https://search.outdoorsy.com/rentals"

async function getData(word: string){
    const url = baseUrl + "?filter[keywords]="
    const response = await fetch(url + word)

    try{
        if(response.ok == false){
            await response.json()
            throw new Error('Sth went wrong !')
        }
        return response.json()
    }catch{
        throw new Error('Sth went wrong !')
    }
} 


export {
    getData,
}