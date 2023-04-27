import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";

// con fetch, lo vamos a hacer mejor con Axios
// const getLabels = async() => {
//   const res = await fetch ('https://api.github.com/repos/facebook/react/labels')
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

// versión con axios
const getLabels = async (): Promise<Label[]> => {
  //dirección completa
  const { data } = await githubApi.get<Label[]>("/labels");
  console.log(data);
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    //esta en milésimas de segundo por lo que 1000= 1sg. Este es el tiempo que tarda en caducar la data.
    staleTime: 1000 * 3,
    // para que por defecto no recargue la petición al tocar cualquier parte de la pantalla.
    // refetchOnWindowFocus:false
    //Si usamos el initialData en vez del placeholderData y ponemos segundos lo precargado lo considera como si fuera fresco durante una hora.
    // initialData:[
    // el placeholderData debe ser un label, aunque en JS permitiría que fuera cualquier cosa. La data por defecto la sacamos de la data real.
    placeholderData: [
      {
        id: 725156255,
        node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
        name: "good first issue (taken)",
        color: "b60205",
        default: false,
      },
      {
        id: 717031390,
        node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
        name: "good first issue",
        color: "6ce26a",
        default: true,
      },
    ],
  });

  return labelsQuery;
};
