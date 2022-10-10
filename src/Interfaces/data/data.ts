import React from 'react';

interface Atributes {
    name: string
}
interface PrimaryImageData{
    id:string,
    type: string
}
interface Relationships {
    primary_image: PrimaryImageData
}

export interface data {
    id: string, 
    type: string,
    atributes: Atributes
    relationships: Relationships
}

