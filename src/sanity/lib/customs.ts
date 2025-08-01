import client from '../../../client';


export const customs = async () => {
    const query = `
  
  *[_type == "customs"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  accordian_section_title,
  accordian_section_description,
  "accordian_section_image": accordian_section_image.asset->url,
  accordian_section_image_alt,
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
  accordian_6{
    accordian_title,
    accordian_description
  },
  accordian_7{
    accordian_title,
    accordian_description
  },
  accordian_8{
    accordian_title,
    accordian_description
  },
  accordian_section_subtitle,
  accordian_section_bottom_description,
  accordian_section_button_text,
  card_section{
    card_title,
    card_subtitle,
    card_description,
    card_button_text,
    card_button_link,
    "card_image": card_image.asset->url
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
    console.log("Customs Data:", data)
    return data;
}
