import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface Tab {
  id: string;
  name: string;
  component: any;
  active: boolean;
  route: string;
  key: string;
  label?: string;
  icon?: IconDefinition;
  closable?: boolean;
  selected?: boolean;
  params?: string[];
}

