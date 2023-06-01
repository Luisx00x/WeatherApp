import useFetch from "@/hooks/useFetch";

export function inputHandler(e, set){
  set( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}

export function submitHandler(e, city, apiKey, setNewCity){
  e.preventDefault();
  useFetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    (newCity => {
      setNewCity( prev => {
        if(!prev.find(city => city.id === newCity.id)) return [...prev, newCity]
        else return prev
      })
    }))

}