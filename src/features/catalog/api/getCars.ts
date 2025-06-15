import { api } from "$shared/api"
import { CarsResponseType } from "../model/types"

export const getCars = (queryString: string = "") => {
  const res = api
    .get<CarsResponseType>(`cars${queryString ? `?${queryString}` : ""}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw error
    })

  return res
}
