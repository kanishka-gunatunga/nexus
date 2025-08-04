import client from '../../../client';


export const freight_quote = async () => {
    const query = `
  
  *[_type == "freight_quote"]{
    quote_form_title_1,
    quote_form_title_2,
    quote_form_subtitle_1,
    quote_form_subtitle_2,
    "quote_form_bottom_logo" : quote_form_bottom_logo.asset->url,
    quote_form_bottom_text
}
  
`
    const data = await client.fetch(query)
    console.log("Freight Quote Data:", data)
    return data;
}
