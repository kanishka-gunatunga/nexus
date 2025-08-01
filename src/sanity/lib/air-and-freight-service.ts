import client from '../../../client';


export const airAndFreightService = async () => {
  const query = `*[_type == "airAndFreight"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
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
    card_3_subtitle_1,
    card_3_description_1,
    card_3_subtitle_2,
    card_3_description_2,
    card_3_button_text,
    card_3_button_link,
    "card_3_image": card_3_image.asset->url
  },
  bottom_banner{
    banner_title,
    button_text,
    button_link,
    "image": image.asset->url, // Project the image URL
    imageAlt
  }
}`

  const data = await client.fetch(query)
  console.log("4--------------", data)
  return data;
}
