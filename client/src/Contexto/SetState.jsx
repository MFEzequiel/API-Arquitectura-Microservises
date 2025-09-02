import { createContext, useEffect, useState } from 'react'
import contentJson from '../json/responce.json'

export const SetState = createContext()

export function GetState ({ children }) {
  const [loading, setLoading] = useState(false)

  return (
    <SetState.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </SetState.Provider>
  )
}
