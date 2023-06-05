

async function useFetch (url, fn, error) {
  try{
      const data = await fetch(url)
      .then( res => res.json())
      .then( res => {
        if(res.cod !== 200) throw Error(res.message);
        else fn(res)
      })
      .catch(err => {
        console.error("Ha ocurrido un problema: " + err.message);
        error( prev => true )
      })
  }catch(err){
    console.error(err)
  }
}

export default useFetch;