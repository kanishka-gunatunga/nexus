import client from '../../../client';


export const privacyPolicy = async () => {
    const query = `
 *[_type == "privacyPolicy"]{
  hero_title,
  privacy_policy[]
}
  
`
    const data = await client.fetch(query)
    console.log("privacyPolicy Data:", data)
    return data;
}
