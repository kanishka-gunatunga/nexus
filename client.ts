// client.ts
import sanityClient, { createClient } from '@sanity/client'
import { create } from 'domain'

export default createClient({
  projectId: 'pd10w17r',
  dataset: 'production',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 
})

