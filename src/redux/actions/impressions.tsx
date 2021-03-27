import { GET_IMPRESSIONS } from './types';
import axios from "axios";

export async function getImpressions() {
    
    const response = await axios.get(`${process.env.API_URL}/api/impressions`)

    return {
        type: GET_IMPRESSIONS,
        content: response.data.impressions
    }; 
}
