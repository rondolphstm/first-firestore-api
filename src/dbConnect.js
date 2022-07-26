import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credential} from "../credentials.js"

export function dbConnect(){
    if(!getApps().length){
    initializeApp({
        credential: cert(credential)

});
    }return getFirestore();
}




