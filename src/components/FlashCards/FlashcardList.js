import React from 'react'
import Flashcard from '../FlashCards/Flashcard';

export default function FlashcardList({ flashcards }) {
  return (
    <div className="cardFc-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
