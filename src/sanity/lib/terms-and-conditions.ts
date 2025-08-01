import client from '../../../client';


export const termsAndConditions = async () => {
    const query = `
 *[_type == "termsAndConditions"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  terms_and_conditions[]
}
  
`
    const data = await client.fetch(query)
    console.log("termsAndConditions Data:", data)
    return data;
}
