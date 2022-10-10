import React from 'react';

interface Atributes {
    name: string
}

interface Relationships {
    primary_image: PrimaryImageData
}

interface PrimaryImageData{
    data: ImageData
}
interface ImageData {
    id: string,
}


export interface data {
    id: string, 
    type: string,
    attributes: Atributes
    relationships: Relationships
}

