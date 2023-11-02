export const checkLimitRange = (limit: number) => {
  return limit > 0 && limit < 21 ? true : false
}
