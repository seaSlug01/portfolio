import React, { useRef, useEffect } from "react"
import { Formik, Form } from "formik"
import { useFormValidity } from "../context/ContactFormValidity"

const FormikWithValidation = ({ children, ...formikProps }) => {
  const { setIsFormValid } = useFormValidity()

  return (
    <Formik {...formikProps}>
      {(formik) => {
        const { isValid, dirty } = formik

        useEffect(() => {
          setIsFormValid(isValid && dirty)
        }, [isValid, dirty, setIsFormValid])

        return children(formik)
      }}
    </Formik>
  )
}

export default FormikWithValidation
