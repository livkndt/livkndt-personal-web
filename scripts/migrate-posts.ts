import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), 'import_data/posts');
const outputDir = join(process.cwd(), 'src/content/blog');

// Get all markdown files
const files = readdirSync(postsDir).filter(
  (file) => file.endsWith('.markdown') || file.endsWith('.md')
);

console.log(`Found ${files.length} posts to migrate...\n`);

files.forEach((file) => {
  const filePath = join(postsDir, file);
  const content = readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  // Extract slug from filename (remove date prefix and extension)
  // Format: YYYY-MM-DD-slug.markdown
  const slugMatch = file.match(/\d{4}-\d{2}-\d{2}-(.+)\.(markdown|md)/);
  const slug = slugMatch ? slugMatch[1] : file.replace(/\.(markdown|md)$/, '');

  // Convert date to pubDate
  const pubDate = data.date ? new Date(data.date) : new Date();

  // Convert tags from string to array
  let tags: string[] = [];
  if (data.tags) {
    if (typeof data.tags === 'string') {
      tags = data.tags.split(/\s+/).filter((tag: string) => tag.length > 0);
    } else if (Array.isArray(data.tags)) {
      tags = data.tags;
    }
  }

  // Convert image_url to image
  const image = data.image_url || data.image || undefined;

  // Create description from first paragraph if not provided
  let description = data.description || '';
  if (!description && body) {
    const firstParagraph = body
      .split('\n\n')
      .find((p: string) => p.trim().length > 0 && !p.trim().startsWith('#'));
    if (firstParagraph) {
      description = firstParagraph
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links
        .replace(/\*\*/g, '') // Remove bold
        .replace(/\*/g, '') // Remove italic
        .trim()
        .substring(0, 160); // Limit to 160 chars
    }
  }

  // Clean up the body content
  // Remove Jekyll-specific syntax like {:target="_blank"}
  let cleanedBody = body.replace(/\{:target="_blank"\}/g, '');

  // Create new frontmatter
  const newFrontmatter = {
    title: data.title || 'Untitled',
    description: description || 'No description',
    pubDate: pubDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
    author: 'Olivia Knoedt',
    ...(image && { image }),
    tags: tags.length > 0 ? tags : [],
    draft: false,
  };

  // Write new file
  const outputPath = join(outputDir, `${slug}.md`);
  const newContent = `---\n${Object.entries(newFrontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map((v) => `'${v}'`).join(', ')}]`;
      }
      if (typeof value === 'string') {
        return `${key}: '${value.replace(/'/g, "''")}'`;
      }
      return `${key}: ${value}`;
    })
    .join('\n')}\n---\n\n${cleanedBody}`;

  writeFileSync(outputPath, newContent, 'utf-8');
  console.log(`✓ Migrated: ${slug}.md`);
});

console.log(`\n✅ Migration complete! Migrated ${files.length} posts.`);

