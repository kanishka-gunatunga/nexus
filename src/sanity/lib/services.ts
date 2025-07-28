import client from '../../../client';


export const services = async () => {
    const query = `
 *[_type == "services"]{
  heroTitle,
  section_1_title,
  section_1_description,
  service_card_1{
    
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_2{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_3{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_4{
   card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  bottom_banner{
    
    banner_title,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  }
}
  
`
    const data = await client.fetch(query)
    console.log("services Data:", data)
    return data;
}
