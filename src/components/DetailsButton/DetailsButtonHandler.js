import { details } from "@/hooks/consts";

export function cityDetails (cityId, cities, setModal) {
  
  const result = cities.find(city => city.id === cityId);

  setModal( prev => {
    return {
      ...prev,
      state: true, 
      name: details, 
      details: result
    }
  });

}