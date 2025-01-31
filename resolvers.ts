//funciones graphql
import { Collection, ObjectId } from "mongodb";
import { UsuarioModel, ConsultasFinancierasModel, ConsultasTecnologicasModel,CryptoPriceModel } from "./types.ts";
import { validar_correo,crear_contraseña,consultar_crypto } from "./utils.ts";
import { GraphQLError } from "graphql";

//siempre hay que ponerlo, proporciona acceso
type context={
    UsuariosCollection:Collection<UsuarioModel>,
    FinanzasCollection:Collection<ConsultasFinancierasModel>,
    tecnologicasCollection: Collection<ConsultasTecnologicasModel>
    CryptoPriceCollection: Collection<CryptoPriceModel>
}

//resolvers se divide por asi decirlo en 3. lo que lleva los valores, query y mutation
export const resolvers = {
    Usuario:{
        id: (parent: UsuarioModel) =>parent._id.toString()
    },
    ConsultasFinancieras:
    {
        id: (parent: ConsultasFinancierasModel)=> parent._id.toString(),
        id_usuario:async(
            parent: ConsultasFinancierasModel,
            _:unknown,
            context:context
        )=> await context.UsuariosCollection.findOne({_id:new ObjectId(parent.id_usuario)}),
        fecha:(parent:ConsultasFinancierasModel) => parent.fecha.toString()
    },
    ConsultasTecnologicas:
    {
        id: (parent: ConsultasFinancierasModel)=> parent._id.toString(),
        id_usuario:async(
            parent: ConsultasFinancierasModel,
            _:unknown,
            context:context
        )=> await context.UsuariosCollection.findOne({_id:new ObjectId(parent.id_usuario)}),
        fecha:(parent:ConsultasFinancierasModel) => parent.fecha.toString()
    },
    
    //los gets
    Query: {
        getCryptoPriceHistory: async(
            _:unknown,
            args: {symbol:string},
            context:context
        ):Promise<CryptoPriceModel> =>{
            const data= await consultar_crypto(args.symbol)
            return{
                symbol:data.symbol,
                price: data.price
            }
        }
    },
    Mutation: {

    }
}