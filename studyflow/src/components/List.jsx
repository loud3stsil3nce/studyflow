import { useState } from 'react';
import Card from './Card';
import { Flex } from '@chakra-ui/react';
const List = () => {
    const [newCard, setNewCard] = useState('');
    const [cards, setCards] = useState([]);
    
    const addCard = () => {
        const tempArr = [...cards];
         const card = {title: newCard, id: cards.length};
         tempArr.push(card);
         setCards(tempArr);
         setNewCard('');
       }


    return (
        
        <>



        <div className="add-card-form">
            <input type="text" value={newCard} className="new-card-input" onChange={(e) => 
            setNewCard(e.target.value)} /><button className='newCard' onClick={addCard}>New Card</button>
        </div>
        <div className='list'>
            {cards.map((card) => <Card title={card.title} key={card.id} />)}
        </div>

        
        
        
        </>
        
    )
}


export default List