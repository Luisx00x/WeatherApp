import CityNotFound from "@/components/Modals/CityNotFound/CityNotFound";
import Details from "@/components/Modals/Details/Details";
import { details, notFound } from "./consts";

export default function useModal(type, setStatus){
  switch(type){
    case notFound:
      return (<CityNotFound accept={setStatus} />);
    case details:
      return <Details />;
    default:
      return console.error("error")
  }
}