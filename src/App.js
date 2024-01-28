
import { Button, Text, Card, Grid, Spacer, Divider} from '@geist-ui/core';
import { useState } from 'react';

function App(){
  // State for the cards
  const [cards, setCards] = useState([]);


  return (
    <>
    <Spacer h={2} />
    <Grid.Container gap={2} justify="center">
    <Text h1>Idea Game</Text>
    </Grid.Container>
    <Spacer h={1} />
    <Divider />
    <Spacer h={2} />
    <DrawCardsBarComponent setter={setCards} />
    <Spacer h={2} />


    <CardZoneComponent cards={cards} />
    </>
  )
}

// Description for the game:
/*
 - Cards: Different Industrys and Sectors in the business world
 - Each time n cards are drawn from the deck
 - Yeah that's it, the player can now think of stuff based on the cards
*/



function DrawCards(setter){
  // Function that draws n cards from the deck
  // Returns an array of cards
  const Cards = [
    "Agriculture", "Automotive", "Banking", "Chemicals", "Construction", "Consumer Goods", "Education", "Energy", "E-commerce", "Entertainment", "Financial Services", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Insurance", "Machinery", "Manufacturing", "Media", "Mining", "Pharmaceuticals", "Real Estate", "Retail", "Telecommunications", "Transportation", "Utilities",
  ]
  const n = 2;
  const cards = [];
  for(let i = 0; i < n; i++){
    const index = Math.floor(Math.random() * Cards.length);
    // check if the card is already in the array
    if(cards.includes(Cards[index])){
      i--;
      continue;
    }
    cards.push(Cards[index]);
    Cards.splice(index, 1);
  }
  setter(cards);
  return cards;
}


function CardComponent(props){
  // Component that displays the info of a card
  return (

    <Card shadow width="100%">
      <Text h1>{props.title}</Text>
      </Card>

  )
}


function CardZoneComponent(props){
  // takes in a list of cards and displays them
  return (
    <>
    <Grid.Container gap={2} justify="center">
      {
       props.cards.map((card) => {
        return (
          <Grid>
            <CardComponent title={card} />
          </Grid>
        )
       } 
      )}
    </Grid.Container>
    </>
  )
}

function DrawCardsBarComponent(props){
  return(
    <>
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={6} md={6}>
    <Button type='success' width={"100%"} onClick={() => DrawCards(props.setter)}>Draw Cards</Button>
    </Grid>
    </Grid.Container>
    </>
  )
}











// exporting
export default App;
