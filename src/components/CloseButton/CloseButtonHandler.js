

export function closeHandler (cities, setCities, id) {
  let result = cities.filter( city => city.id !== id);
  setCities( prev => {
    return [...result]
  })
}