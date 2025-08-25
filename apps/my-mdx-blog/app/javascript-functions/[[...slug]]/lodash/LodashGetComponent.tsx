
import LodashGetDocument from './LodashGetDocument.mdx';

declare global {
  interface Array<T> {
    myFilter(
      callback: (value: T, index: number, array: T[]) => boolean,
      callBackContext?: unknown
    ): T[];
  }
}


export default function LodashGetComponent() {
  Lodash_Get_execution();

  return (
    <div>
      <LodashGetDocument />
    </div>
  )
}
function Lodash_Get_execution() {
  function get(object: null, path: unknown, defaultValue: unknown) {
    // Handle null/undefined object
    if (object == null) {
      return defaultValue;
    }

    // Convert path to array if it's a string
    const pathArray = Array.isArray(path) ? path : stringToPath(path);

    // Traverse the object following the path
    let current = object;

    for (let i = 0; i < pathArray.length; i++) {
      const key = pathArray[i];

      // Check if current is null/undefined or if key doesn't exist
      if (current == null || !(key in current)) {
        return defaultValue;
      }

      current = current[key];
    }

    // Return the found value or defaultValue if the result is undefined
    return current === undefined ? defaultValue : current;
  }

  // Helper function to convert string path to array
  function stringToPath(path: string) {
    // Handle empty string
    if (!path) return [];

    // Convert string path to array of keys
    // This regex handles:
    // - Dot notation: 'a.b.c' -> ['a', 'b', 'c']
    // - Bracket notation: 'a[0].b[1]' -> ['a', '0', 'b', '1']
    // - Mixed notation: 'a[0].b.c[1]' -> ['a', '0', 'b', 'c', '1']
    const result = [];

    // Replace brackets with dots and split, then clean up
    const cleanPath = path
      .replace(/\[(\w+)\]/g, '.$1') // Convert [key] to .key
      .replace(/^\./, ''); // Remove leading dot

    // Split by dots and filter out empty strings
    return cleanPath.split('.').filter(key => key !== '');
  }

  // Alternative more robust stringToPath implementation
  function stringToPathRobust(path: string) {
    if (!path) return [];

    const result = [];
    let current = '';
    let inBrackets = false;
    let inQuotes = false;
    let quoteChar = '';

    for (let i = 0; i < path.length; i++) {
      const char = path[i];

      if (!inQuotes && (char === '"' || char === "'")) {
        inQuotes = true;
        quoteChar = char;
      } else if (inQuotes && char === quoteChar) {
        inQuotes = false;
        quoteChar = '';
      } else if (!inQuotes && char === '[') {
        if (current) {
          result.push(current);
          current = '';
        }
        inBrackets = true;
      } else if (!inQuotes && char === ']') {
        if (current) {
          result.push(current);
          current = '';
        }
        inBrackets = false;
      } else if (!inQuotes && char === '.' && !inBrackets) {
        if (current) {
          result.push(current);
          current = '';
        }
      } else {
        current += char;
      }
    }

    if (current) {
      result.push(current);
    }

    return result;
  }
}