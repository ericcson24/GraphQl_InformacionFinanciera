export const typeDefs = `#graphql
    type Usuario {
        id: ID!
        nombre: String!
        telefono: String!
        correo: String!
        direccion: String!
    }
    
    type ConsultasFinancieras {
        id: ID!
        id_usuario: Usuario!
        tipo_consulta: String!
        parametros: String!
        result: String!
        fecha: String!
    }
    
    type ConsultasTecnologicas {
        id: ID!
        id_usuario: Usuario!
        tipo_consulta: String!
        parametros: String!
        result: String!
        fecha: String!
    }

    type CryptoPrice {
        symbol: String!
        price: Float!
    }

    type Query{
        getCryptoPriceHistory(symbol:String!):CryptoPrice!

    }
    type Mutation{
        addUser(nombre:String!, telefono:String!,correo:String!,direccion:String!):Usuario!


    }
`