import client from '../../../client';


export const insights = async () => {
    const query = `
 *[_type == "Insights"]{
  heroTitle,
  Page_subtitle,
  main_post->{
    
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  main_post_button_text,
  right_section_post_1->{
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  right_section_post_2->{
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  latest_insights_title[]->{
   postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },

  trending_insights_title[]->{
   postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  }
}
  
`
    const data = await client.fetch(query)
    console.log("Insights Data:", data)
    return data;
}
