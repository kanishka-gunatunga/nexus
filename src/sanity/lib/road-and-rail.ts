import client from '../../../client';


export const roadAndRail = async () => {
    const query = `
*[_type == "roadAndRail"]{
  hero_title,
  heading_title,
  heading_description,
  card_1_section{
    card_1_title,
    card_1_subtitle,
    card_1_description,
    card_1_description_2,
    card_1_button_text,
    card_1_button_link,
    "card_1_image": card_1_image.asset->url
  },
  card_2_section{
    card_2_title,
    card_2_subtitle,
    card_2_description,
    card_2_description_2,
    card_2_button_text,
    card_2_button_link,
    "card_2_image": card_2_image.asset->url
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
    console.log("roadAndRail Data:", data)
    return data;
}
