

async function useFetch (url, fn) {
  try{
      const data = await fetch(url)
      .then( res => res.json())
      .then( res => {
        if(res.cod !== 200) throw Error(res.message);
        else fn(res)
      })
      .catch(err => console.error("Ha ocurrido un problema. Intente de nuevo"))
  }catch(err){
    console.error(err)
  }
}

export default useFetch;