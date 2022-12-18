import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getCurrentDir = () => dirname(fileURLToPath(import.meta.url));
