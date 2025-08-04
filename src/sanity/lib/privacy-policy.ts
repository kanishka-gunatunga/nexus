import client from '../../../client';


export const privacyPolicy = async () => {
    const query = `
 *[_type == "privacyPolicy"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  privacy_policy[]

  
  seo{
    page,
    title,
    description,
    keywords [],
    ogTitle,
    ogDescription,
    "ogImage": ogImage.asset->url,
    canonicalUrl
  }
}
  
`
    const data = await client.fetch(query)
    console.log("privacyPolicy Data:", data)
    return data;
}
