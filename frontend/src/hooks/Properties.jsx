import React from 'react'
import { useQuery } from 'react-query'

const Properties = () => {
    const {data, isLoading, isError, refetch} = useQuery(
         'allProperties', getAllProperties, {
            refettechOnWindowFocus: false
         }
    )

  return (
    data, isError, isLoading, refetch
  )
}

export default Properties
