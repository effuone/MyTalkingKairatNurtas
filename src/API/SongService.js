import axios from "axios";

export default class SongService
{
    static async getSongs(url)
    {
        try{
            const response = await axios.get('https://mighty-ocean-36524.herokuapp.com/')
            return response
        }catch(e){
            console.log(e)
        }
    }
}