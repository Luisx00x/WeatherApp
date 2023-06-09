
import useCloseModal from "@/hooks/useCloseModal";

const Details = ({close}) => {
  return (
    <div className={`modals`}>
      <div className={`modals-message`}>
        <h2>Details</h2>
        <button
        onClick={(e) => {
          e.preventDefault();
          useCloseModal(close);
        }}
        >Regresar</button>
      </div>
    </div>
  )
}

export default Details;