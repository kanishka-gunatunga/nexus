import client from '../../../client';


export const contactUs = async () => {
    const query = `
 *[_type == "contactUs"]{
 hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  contact_form_title,
  contact_form_description_1,
  contact_form_description_2,
  contact_item_1{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  contact_item_2{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  contact_item_3{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  x_link,
  linkedin_link,
  facebook_link,
  instagram_link,
  map_link,

  
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
    console.log("contactUs Data:", data)
    return data;
}
