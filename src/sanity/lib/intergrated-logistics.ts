import client from '../../../client';


export const integratedLogistics = async () => {
    const query = `
 *[_type == "integratedLogistics"]{
  hero_title,
  heading_title,
  heading_description,
  card_1_section{
    card_1_title,
    card_1_subtitle,
    card_1_description,
    card_1_button_text,
    card_1_button_link,
    "card_1_image": card_1_image.asset->url
  },
  card_2_section{
    card_2_title,
    card_2_subtitle,
    card_2_description,
    card_2_button_text,
    card_2_button_link,
    "card_2_image": card_2_image.asset->url
  },
  card_3_section{
    card_3_title,
    card_3_subtitle,
    card_3_description,
    card_3_button_text,
    card_3_button_link,
    "card_3_image": card_3_image.asset->url
  },
  card_4_section{
    card_4_title,
    card_4_subtitle,
    card_4_description,
    card_4_button_text,
    card_4_button_link,
    "card_4_image": card_4_image.asset->url
  }
}
  
`
    const data = await client.fetch(query)
    console.log("integratedLogistics Data:", data)
    return data;
}
