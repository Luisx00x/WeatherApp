
export default function useCloseModal(setModal){

    setModal( prev => {
    return {
      name: "",
      state: false,
      details: null
    }
  });

}