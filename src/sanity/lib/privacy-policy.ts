import client from '../../../client';


export const privacyPolicy = async () => {
    const query = `
 *[_type == "privacyPolicy"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  privacy_policy[]
}
  
`
    const data = await client.fetch(query)
    console.log("privacyPolicy Data:", data)
    return data;
}
