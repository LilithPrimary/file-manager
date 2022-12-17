import { homedir } from 'os';
import { cd } from './cd.js';

export const toHomeDir = () => cd([homedir()]);
