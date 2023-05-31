
export function inputHandler(e, set){
  set( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}