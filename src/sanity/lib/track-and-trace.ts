import client from '../../../client';


export const trackAndTrace = async () => {
    const query = `
 *[_type == "trackAndTrace"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  section_1_title,
  section_1{
   
    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt,
    reverseOrder,
  },
  section_2_title,
  section_2_description,
  "section_2_image": section_2_image.asset->url,
  IconCard_1{
    
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  IconCard_2{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  IconCard_3{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  IconCard_4{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  IconCard_5{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
  IconCard_6{
    card_title,
    card_description,
    "card_icon": card_icon.asset->url
  },
 contact_first_text,
 underline_text,
 alert_message,
 middle_text,
 contact_number,
 underline_text_2,
 contact_link,
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
    console.log("trackAndTrace Data:", data)
    return data;
}
