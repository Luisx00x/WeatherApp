import useFetch from "@/hooks/useFetch";

export function inputHandler(e, set){
  set( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}

export function submitHandler(e, city, apiKey, setNewCity, error){
  e.preventDefault();
  useFetch(`${NEXT_PUBLIC_API_URL}/weather?q=${city}&appid=${apiKey}&units=metric`,
    (newCity => {
      setNewCity( prev => {
        if(!prev.find(city => city.id === newCity.id)) return [...prev, newCity]
        else return prev
      })
    }), 
    error)

}