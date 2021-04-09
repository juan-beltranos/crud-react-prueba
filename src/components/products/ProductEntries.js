import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './ProductEntry';

export const ProductEntries = () => {

    const { notes } = useSelector( state => state.notes );
    //console.log(notes);

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => (
                    <JournalEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }

        </div>
    )
}
