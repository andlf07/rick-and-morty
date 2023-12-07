import { Character } from './Character';
import { PageInfo } from './PageInfo';

export interface ApiData {
  info: PageInfo;
  results: Character[];
}
