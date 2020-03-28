/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP
 *
 * GET Buscar o listar informacion del Backend
 * POST Crea una informacion en el Backend
 * PUT Altera una informacion en el Backend
 * DELET Elimina una informacion del Backend
 */

/**
 * Tipos de parametros
 *
 * Query Parms    Parametros nombrados enviados na roda a pos "?" filtros paginacion
 * http://localhost:3333/users?page=2&nome=Omar&idade=25
 *
 * Route Parms    Son utilizados para identificar recursos
 * Request Body   cuerpo de requisicion utilizado para crear o alterar recursos
 */

/**
 * Banco de datos
 *
 * DRIVER SELECT * FROM users
 * QUERY builde: table('users').select('*').where()
 */
const express = require("express");
const cors = require("cors");
const routes = require("./router");

const app = express();

app.use(
  cors()
  // si nosotros estamos hospedados en algun lugar aqui tenemos que conlocar el sitio
  //  { origin: 'http:meuapp.com' }
);
app.use(express.json());
app.use(routes);

app.listen(3333);
