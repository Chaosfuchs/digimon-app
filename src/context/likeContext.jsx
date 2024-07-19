/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react"

// Erstellt den Context und exportiert ihn um ihn in Komponenten zu verwenden
export const LikeContext = createContext()

// Erstellt den Provider, der den State verwaltet
export const LikeContextProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([])

  const toggleLike = (cardName) => {
    if (likedCards.includes(cardName)) {
      setLikedCards(likedCards.filter((name) => name !== cardName))
    } else {
      setLikedCards([...likedCards, cardName])
    }
  }

  return (
    <LikeContext.Provider value={{ likedCards, toggleLike }}>
      {children}
    </LikeContext.Provider>
  )
}
