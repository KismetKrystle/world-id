import React, { createContext, useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'

export const FlowContext = createContext()

export const FlowProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    fcl.currentUser.subscribe(setUser)
  }, [])

  const logIn = () => {
    fcl.logIn()
  }

  const logOut = () => {
    fcl.unauthenticate()
  }

  // Add more Flow-related functions here as needed

  return (
    <FlowContext.Provider value={{ user, balance, logIn, logOut }}>
      {children}
    </FlowContext.Provider>
  )
}