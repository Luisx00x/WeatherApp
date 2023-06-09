
export default function useCloseModal(setModal){

    setModal( prev => {
    return {
      ...prev,
      name: "",
      state: false
    }
  });

}