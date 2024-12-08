import React, { createContext, useState, useContext } from "react"

const FormValidityContext = createContext()

export const FormValidityProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false)

  return (
    <FormValidityContext.Provider value={{ isFormValid, setIsFormValid }}>
      {children}
    </FormValidityContext.Provider>
  )
}

export const useFormValidity = () => useContext(FormValidityContext)
