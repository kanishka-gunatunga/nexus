import client from '../../../client';


export const termsAndConditions = async () => {
    const query = `
 *[_type == "termsAndConditions"]{
  hero_title,
  terms_and_conditions[]
}
  
`
    const data = await client.fetch(query)
    console.log("termsAndConditions Data:", data)
    return data;
}
