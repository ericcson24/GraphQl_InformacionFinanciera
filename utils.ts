import { GraphQLError } from "graphql"
import { API_Correo, API_Contraseña,API_CryptoPrice } from "./types.ts";

const API_KEY = Deno.env.get("API_KEY")

export const validar_correo=async(correo:string)=>{
    
    if(!API_KEY) throw new GraphQLError("Error en la api_key")
    
    const url_api=`https://api.api-ninjas.com/v1/validateemail?email=${correo}`

    const data=await fetch(url_api,{
        headers: {
            'X-Api-Key': API_KEY
          }
    })
    if (data.status!==200) throw new GraphQLError("error en la api")
    const result:API_Correo=await data.json()
    if(!result.is_valid){
        throw new GraphQLError("error en con el correo")
    }
    return{
        is_valid: result.is_valid
    }
}

export const consultar_crypto =async(symbol:string)=>{
    
    if(!API_KEY)throw new GraphQLError("Error en la api_Key")
    const url_api=`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`
    const data=await fetch(url_api,{
        headers: {
            'X-Api-Key': API_KEY
        }

    })
    if(data.status!==200) {
        const errorText = await data.text();
        throw new GraphQLError(`Error en API: ${data.status} - ${errorText}`);
    }
    const result= await data.json()
    return{
        symbol:result.symbol,
        price:result.price
    }

}
export const crear_contraseña =async(symbol:string)=>{
    
}