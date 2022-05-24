import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp, firebaseDatabase} from './firebase';
class CardRepository{
    syncCards(userId, onUpdate){

        const cardRef = ref(firebaseDatabase, `${userId}/cards`);
        onValue(cardRef, snapshot => {
            const data = snapshot.val();
            data && onUpdate(data);
        });
        return () => off(ref);
    }
    saveCard(userId, card){

        set(ref(firebaseDatabase, `${userId}/cards/${card.id}`), card);
    }
    deleteCard(userId, card){

        const cardRef = ref(firebaseDatabase, `${userId}/cards/${card.id}`);

        remove(cardRef);

    }
}
export default CardRepository;