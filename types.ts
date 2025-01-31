import { ObjectId, OptionalId } from "mongodb";

export type UsuarioModel =OptionalId<{
    nombre:string,
    telefono:string,
    correo:string,
    direccion:string
}>

export type ConsultasFinancierasModel =OptionalId<{
    id_usuario:ObjectId,
    tipo_consulta:string,
    parametros:string,
    result:string,
    fecha:Date;
}>

export type ConsultasTecnologicasModel =OptionalId<{
    id_usuario:ObjectId,
    tipo_consulta:string,
    parametros:string,
    result:string,
    fecha:Date;
}>

export type CryptoPriceModel ={
    symbol: string,
    price: number,
}
//https://api.api-ninjas.com/v1/validateemail?email={}
export type API_Correo ={
    is_valid:boolean
}
//https://api.api-ninjas.com/v1/passwordgenerator?length={}
export type API_Contraseña ={
    password:string
}
//https://api.api-ninjas.com/v1/cryptoprice?symbol={}
export type API_CryptoPrice ={
    symbol:string,
    price:number
}

