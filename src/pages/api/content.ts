import { NextApiRequest, NextApiResponse } from 'next';
import { getContentItemsBySlugs } from '@/lib/data-access';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { slugs } = req.query;

  if (!slugs || typeof slugs !== 'string') {
    return res.status(400).json({ message: 'Slugs must be a comma-separated string.' });
  }

  const slugArray = slugs.split(',');

  try {
    const items = await getContentItemsBySlugs(slugArray);
    return res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching content by slugs:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
