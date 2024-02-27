import { SearchResp } from "../../interfaces/searchQueryResp";


export const searchQueryUseCase = async (query:string, option:string) => {
   
    try {
        const resp = await fetch(`${import.meta.env.VITE_GPT_API}/search`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({query, option}),
        });
        if (!resp.ok) throw new Error("I couldn't make the request");
        const {content} = await resp.json() as SearchResp;
        return {
            ok:true, 
            message:content
        }
    } catch (error) {
        return {
            ok:false,
            message:'Device not found'
        };
    }
}   

