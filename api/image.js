export default async function handler(req, res) {
  const imageUrl = req.query.url;

  if (!imageUrl) {
    res.status(400).send("No image url");
    return;
  }

  const response = await fetch(imageUrl, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const buffer = await response.arrayBuffer();
  res.setHeader("Content-Type", "image/jpeg");
  res.send(Buffer.from(buffer));
}
