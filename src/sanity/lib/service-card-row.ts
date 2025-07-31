import client from '../../../client';



export const ServiceCardRowSection = async () => {
    const query = `
  
 *[_type == "serviceCards"]{
  section_title,
  "card_1_icon": card_1_icon.asset->url,
  card_1_title,
  card_1_button_link,

  "card_2_icon": card_2_icon.asset->url,
  card_2_title,
  card_2_button_link,


  "card_3_icon": card_3_icon.asset->url,
  card_3_title,
  card_3_button_link,

  "card_4_icon": card_4_icon.asset->url,
  card_4_title,
  card_4_button_link,
}
  
`
    const data = await client.fetch(query)
    console.log("Service Card Row Data:", data)
    return data;
}
