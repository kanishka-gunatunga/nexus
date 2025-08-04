import client from '../../../client';


export const termsAndConditions = async () => {
    const query = `
 *[_type == "termsAndConditions"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  terms_and_conditions[],

  
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
    console.log("termsAndConditions Data:", data)
    return data;
}
