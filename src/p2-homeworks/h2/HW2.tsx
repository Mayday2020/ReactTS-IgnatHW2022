import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    switch (filter) {
        case "all": {
            return affairs
        }
        case "high": {
            return affairs.filter(a => a.priority === 'high')
        }
        case "low": {
            return affairs.filter(a => a.priority === 'low')
        }
        case "middle": {
            return affairs.filter(a => a.priority === 'middle')
        }
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            <hr/>
        </div>
    )
}

export default HW2
