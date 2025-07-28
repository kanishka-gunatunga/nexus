import client from '../../../client';


export const linkedInSection = async () => {
    const query = `
  
 *[_type == "linkedInSection"]{
  section_title,
  section_description,
  button_link
}
  
`
    const data = await client.fetch(query)
    console.log("linkedInSection Data:", data)
    return data;
}
