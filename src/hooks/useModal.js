import CityNotFound from "@/components/Modals/CityNotFound/CityNotFound";
import Details from "@/components/Modals/Details/Details";
import { details, notFound } from "./consts";

export default function useModal(type, setStatus, cityId){
  switch(type){
    case notFound:
      return (<CityNotFound accept={setStatus} />);
    case details:
      return <Details confirm={setStatus} cityId={cityId} />;
    default:
      return console.error("error")
  }
}