import client from '../../../client';


export const footer = async () => {
    const query = `
  *[_type == "footer"]{
  footer_description,
  footer_button_text,
  footer_button_link,
  "footer_logo": footer_logo.asset->url,
  footer_logo_alt,
  footer_sub_description,
  footer_column_1_title,
  footer_links_column_1[]->{
    nav_item_name,
    nav_item_link,
  },
  footer_column_2_title,
  footer_links_column_2[]->{
   nav_item_name,
    nav_item_link,
  }
}
  `

    const data = await client.fetch(query)
    console.log("Footer Data:", data)
    return data;
}