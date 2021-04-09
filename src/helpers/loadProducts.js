import { db } from '../firebase/firebase-config';

export const loadProducts = async ( uid ) => {

    const notesSnap = await db.collection(`${ uid }/crud/products`).get();
    const notes = [];

    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return notes;
}



