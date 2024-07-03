// CUSTOM HOOK PARA OBTENER LOS DATOS DE LOS EVENTOS
// PARA SER USADO EN COMPONENTES POR ESO -useState-

import { useEffect, useState } from "react";
import eventsJsonData from "../services/events.json";

const useEventsData = () => {
  // PERSONAL HOOK PARA LOS ESTADOS DE LOS EVENTOS
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // _embedded: { events } - THIS PART IS SAYING "GO INTO THE _embedded PROPERTY OF THE DATA OBJECT, AND THEN GO INTO ITS EVENTS PROPERTY". DESTRUCTURING.
  // const { _embedded: { events } } = data;
  // const events = data._embedded.events;

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(eventsJsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, []); // ARRAY VACÍO PARA QUE SOLO SE EJECUTE UNA VEZ

  return {
    events: data?._embedded?.events || [], // ENCADENAMIENTO OPCIONAL SI NO HAY DATA O _EMBEDDED O EVENTS RETORNA UN ARRAY VACÍO
    loading,
    error,
  };
};

export default useEventsData;
