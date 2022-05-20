import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import firebaseApp from './firebase';
class CardRepository{
    syncCards(userId, onUpdate){
        const db = getDatabase(firebaseApp);

        const cardRef = ref(db, `${userId}/cards`);
        onValue(cardRef, snapshot => {
            const data = snapshot.val();
            data && onUpdate(data);
        });
        return () => off(ref);
    }
    saveCard(userId, card){
        const db = getDatabase(firebaseApp);

        set(ref(db, `${userId}/cards/${card.id}`), card);
    }
    deleteCard(userId, card){
        const db = getDatabase(firebaseApp);

        const cardRef = ref(db, `${userId}/cards/${card.id}`);

        remove(cardRef);

  }
}
export default CardRepository;