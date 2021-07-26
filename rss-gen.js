const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const frontMatter = require('front-matter');

// blog post directory path
const blogPostDir = path.resolve(__dirname, 'data', 'blog');

// setup feed instance with some high level data
const feed = new RSS({
  title: `Sergio Barria's Blog RSS Feed`,
  description:
    'This is the RSS Feed generated for my personal website and blog portfolio',
  feed_url: `https://www.sergiobarria.com/rss.xml`,
  site_url: `https://www.sergiobarria.com`,
  managingEditor: 'Sergio Barria',
  webMaster: 'Sergio Barria',
  copyright: `${new Date().getFullYear()} Sergio Barria`,
  language: 'en',
  pubDate: new Date().toLocaleString(),
  ttl: '60',
});

// Read all the files in the blog directory
fs.readdirSync(blogPostDir)
  .map(fileName => {
    // we need the full path of the file to be able to read it
    const fullPath = path.join(blogPostDir, fileName);

    // Read the file so we can grab the front matter
    const file = fs.readFileSync(fullPath, 'utf-8');

    // For the RSS feed we don't need the html, we
    // just want the attributes
    const { attributes } = frontMatter(file);

    // console.log(attributes);
    return { ...attributes, fileName };
  })
  // sort the items by date in descending order
  .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
  .forEach(({ title, excerpt, publishedAt, author, fileName }) => {
    feed.item({
      title,
      excerpt,
      url: `https://www.sergiobarria.com/blog/${fileName.replace('.md', '')}`,
      author,
      date: publishedAt,
    });
  });

// this will generate our XML for our feed
const xml = feed.xml();

// Write file to public directory
fs.writeFileSync(path.resolve(__dirname, 'public') + '/rss.xml', xml); // eslint-disable-line
