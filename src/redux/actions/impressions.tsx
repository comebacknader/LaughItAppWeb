import { GET_IMPRESSIONS, CREATE_IMPRESSION } from './types';
import axios from "axios";

export async function getImpressions() {

    // const response = await axios.get(`${process.env.API_URL}/api/impressions`)
    const response = { data: { impressions: ['Adolf Hitler', 'Dave Chapelle'] } }
    return {
        type: GET_IMPRESSIONS,
        content: response.data.impressions
    }; 
}

export async function createImpression(nameOfImpersonated: string) {
    
    // const response = await axios.post(`${process.env.API_URL}/api/impressions/${nameOfImpersonated}`)

    return {
        type: CREATE_IMPRESSION,
        content: nameOfImpersonated
    }; 
}
