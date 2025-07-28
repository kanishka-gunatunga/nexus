import client from '../../../client';


export const leadership = async () => {
    const query = `
 *[_type == "leadership"]{
  hero_title,
  Page_subtitle,
  terms_member_1{
    
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_2{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_3{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_4{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_5{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_6{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_7{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_8{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  },
  terms_member_9{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
  }
}
  
`
    const data = await client.fetch(query)
    console.log("leadership Data:", data)
    return data;
}
