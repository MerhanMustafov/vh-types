import {data} from '../Interfaces/data/data'
import {included} from '../Interfaces/included/included'
import {meta} from '../Interfaces/meta/meta'


interface Data {
    data: data[]
    included: included[]
    meta: meta

}

export type {Data}
// export type {data}
// export type {included}
// export type {meta, Vehicles}