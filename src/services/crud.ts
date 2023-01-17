import {
 setDoc, doc, updateDoc, serverTimestamp,
} from 'firebase/firestore'

import { db } from './firebase'
/**
 * Add data
 *
 * @param  {CollectionName} col collection name
 * @param  {string} id custom document ID
 * @param  {any} data save data (single)
 * @return {Promise<string>} custom document ID or error
 */
export const createData = async (
  col: CollectionName,
  id: string,
  data: any,
): Promise<string> => {
  try {
    const docRef = doc(db, col, id)
    await setDoc(
      docRef,
      data,
      { merge: true },
    )
    await updateDoc(docRef, {
      update_time: serverTimestamp(),
    })
    console.info('Document written with ID', id)
    return Promise.resolve(id)
  } catch (error: any) {
    return Promise.reject(error)
  }
}
