import client from '../../../client';


export const whyNexus = async () => {
    const query = `
*[_type == "whyNexus"]{
  hero_title,
  heading_title,
  heading_description,
  "heading_image": heading_image.asset->url,
  section_1_title,
  cards_section_1{
    card_1_title,
    card_1_description,
    card_2_title,
    card_2_description,
    card_3_title,
    card_3_description
  },
  cards_section_2{
    card_1_title,
    card_1_description,
    card_2_title,
    card_2_description,
    card_3_title,
    card_3_description
  },
  cards_section_3{
    card_title,
    card_description
  },
  section_2_title,
  section_2_description,
  "section_3_image": section_3_image.asset->url,
  section_3_title_1,
  section_3_description_1,
  section_3_main_title,
  section_3_title_2,
  section_3_description_2,
  section_4_title_1,
  section_4_title_2,
  section_4_description_1,
  testimonial_details_section[]->{
   
    testimonial_comment,
    person_name,
    person_designation,
    "person_image": person_image.asset->url,
    
  },
  section_5_card{
    card_title,
    card_subtitle,
    card_description,
    "card_image": card_image.asset->url
  },
  accordian_section_title,
  "accordian_section_image": accordian_section_image.asset->url,
  accordian_1{
    accordian_title,
    accordian_description
  },
  accordian_2{
    accordian_title,
    accordian_description
  },
  accordian_3{
    accordian_title,
    accordian_description
  },
  accordian_4{
    accordian_title,
    accordian_description
  },
  accordian_5{
    accordian_title,
    accordian_description
  },
  "section_7_image": section_7_image.asset->url,
  "section_7_image_for_mobile": section_7_image_for_mobile.asset->url,
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
    console.log("WhyNexus Data:", data)
    return data;
}
