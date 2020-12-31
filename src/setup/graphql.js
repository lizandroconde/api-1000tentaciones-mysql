// Imports
import graphqlHTTP from 'express-graphql'
import jwt from 'jsonwebtoken'
// App Imports
import config from '../config/config.json'
import schema from '../schema'
import express from 'express'
// Setup GraphQL
/*const auth = jwt({
  secret: process.env.JWT_SECRET||'example',
  credentialsRequired: false
})*/
export default function (server) {
  //console.info('SETUP - GraphQL...')

  const rutasProtegidas = express.Router(); 
  rutasProtegidas.use((req, res, next) => {
    const token = req.headers.authorization;
 
    //console.log(req.headers)
    if (token) {
      let mytoken = token.split(" ",2);

      jwt.verify(mytoken[1], server.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

  server.post('/autenticar', (req, res) => {
    //console.log(req.body)
  
    if(req.body.usuario === "Hakutravel2020" && req.body.contrasena === "Hakutravel2020.") {
      
    const payload = {
      check:  true
      };
      const token = jwt.sign(payload, server.get('llave'));
      res.json({
        mensaje: 'Autenticación correcta',
        token: token
      });
      } else {
          res.json({ mensaje: "Usuario o contraseña incorrectos"})
      }
  })

  // API (GraphQL on route `/api`)
  server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty
  })))
 



}