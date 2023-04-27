# React Query - Issues

1. Clonar repositorio
2. Ejecutar ``` yarn install``` o ```npm install```
3. Abrir el URL del proyecto

Instalaciones:

yarn add @tanstack/react-query
yarn add @tanstack/react-query-devtools

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
# Ojo con esta importación la que aparece por defecto da error.
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools/>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

De donde sacamos los datos.

https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28
https://github.com/facebook/react/issues
https://api.github.com/repos/facebook/react/labels

yarn add axios

Creamos api / githubApi.ts

# Inicio del URL

import axios from "axios";

export const githubApi = axios.create ({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers: {}
})

# Para usar poder conocer la configuración de Typescript podemos:
 https://quicktype.io/
 o utilizar la extensión instalada Paste JSON as Code

 Para usar la extensión en issues/interfaces/label.ts
 He copiado primero la data que aparece en postman con get https://api.github.com/repos/facebook/react/labels
 y luego abrimos ctrl+shift+p y ponemos paste json as code y de nombre Label y ya nos genera la interfaz.