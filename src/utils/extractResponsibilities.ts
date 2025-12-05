/**
 * Extracts responsibilities from markdown content
 */
export function extractResponsibilities(content: string): string[] {
  const responsibilities: string[] = [];

  // Try different section headers (handle #, ##, ###)
  const responsibilitiesMatch =
    content.match(/#{1,3} Role & Responsibilities\s*\n(.*?)(?=\n#{1,3} |$)/s) ||
    content.match(/#{1,3} Responsibilities\s*\n(.*?)(?=\n#{1,3} |$)/s);

  if (responsibilitiesMatch) {
    const responsibilitiesText = responsibilitiesMatch[1];
    // Split by lines starting with - or *
    const lines = responsibilitiesText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('-') || line.startsWith('*'));

    responsibilities.push(
      ...lines.map((line) => line.replace(/^[-*]\s+/, '').trim()).filter((line) => line.length > 0)
    );
  }

  // If no responsibilities section found, try to extract bullet points from entire content
  if (responsibilities.length === 0) {
    const allLines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => (line.startsWith('-') || line.startsWith('*')) && line.length > 3);

    responsibilities.push(
      ...allLines
        .map((line) => line.replace(/^[-*]\s+/, '').trim())
        .filter((line) => line.length > 0 && !line.startsWith('#'))
    );
  }

  return responsibilities;
}

