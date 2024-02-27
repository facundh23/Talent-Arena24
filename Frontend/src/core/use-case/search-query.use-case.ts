import { SearchResp } from "../../interfaces/searchQueryResp";


export const searchQueryUseCase = async (name:string, type:string, id:string) => {
   debugger
    try {
        const resp = await fetch(`http://localhost:3000/device`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, type, id}),
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

