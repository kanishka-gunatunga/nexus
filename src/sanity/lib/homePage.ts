import client from '../../../client';


export const homePage = async () => {
  const query = `
  *[_type == "homepage"]{
  heroTitle,
  heroDescription,
  hero_button_text,
  hero_button_link,
  icon_card_1{
   
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  icon_card_2{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  icon_card_3{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  icon_card_4{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  icon_card_5{
    title,
    description,
    "card_icon": card_icon.asset->url
  },
  section_2_title,
  "section_2_image": section_2_image.asset->url,
  section_2_badge_text_row_1,
  section_2_badge_text_row_2,
  section_2_badge_text_row_3,
  section_2_badge_text_row_4,
  section_2_badge_text_row_5,
  section_2_description,
  section_2_subtitle,
  section_2_button_text,
  section_2_button_link,
  section_3_title,
  section_3_column_1_count,
  section_3_column_1_text,
  section_3_column_2_count,
  section_3_column_2_text,
  section_3_column_3_text_1,
  section_3_column_3_text_2,
  section_4_title,
  section_4_description,
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
  section_5{
    
    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt
    
  },
  section_6{

    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt
    
  },

  testimonial_section_title,
  testimonial_section_title_description,
  testimonial_details_section[]->{
    
    testimonial_comment,
    person_name,
    person_designation,
    "person_image": person_image.asset->url,
   
  }
}
  `

  const data = await client.fetch(query)
  console.log("Home Page Data:", data)
  return data;
}