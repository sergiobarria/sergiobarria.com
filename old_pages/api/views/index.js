import db from '@/lib/planetscale';

export default async function handler(_, res) {
  try {
    const [rows] = await db.query(`
      SELECT SUM(count) as total
      FROM views;
    `);

    const { total } = rows[0];

    return res.status(200).json({ total });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
