export const GENERATE_HAIKU = "GENERATE_HAIKU";

export const generateHaiku = (lines) => {
  
  const haiku = {
    firstLine: "1",
    secondLine: "2",
    thirdLine: "3"
  }
  
  return {
    type: GENERATE_HAIKU,
    payload: haiku
  }
}