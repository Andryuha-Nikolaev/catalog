"use client"

import { SearchParamsNames } from "$shared/constants/searchParamsNames"
import useGetQueryParams from "$shared/hooks/query-params/useGetQueryParams"
import { ReactSelect } from "$shared/ui/fields/select"
import { OptionType, SortSelectProps } from "../model/types"
import useChangeQueryParams from "$shared/hooks/query-params/useChangeQueryParams"

export const SortSelect = ({ options }: SortSelectProps) => {
  const params = useGetQueryParams()

  const handleChangeParams = useChangeQueryParams()

  const sort = params.get(SearchParamsNames.SORT)
  const order = params.get(SearchParamsNames.ORDER)

  const sortQuery =
    sort && order ? `${SearchParamsNames.SORT}=${sort}&${SearchParamsNames.ORDER}=${order}` : ""

  // const value: OptionType = isSort ?  {
  //   value: order,
  //   sortCategory: sort,
  //   label:

  // }

  const value = options.find((item) => item.value === sortQuery) || null

  const handleChange = (value: unknown) => {
    const option = value as OptionType

    if (!option.value) {
      params.delete(SearchParamsNames.SORT)
      params.delete(SearchParamsNames.ORDER)
    } else {
      params.set(SearchParamsNames.SORT, option.sort)
      params.set(SearchParamsNames.ORDER, option.order)
    }

    handleChangeParams(String(params))
  }

  return (
    <ReactSelect
      placeholder="Сортировка"
      options={options}
      value={value}
      onChange={(value) => handleChange(value)}
      isClearable={false}
    />
  )
}
