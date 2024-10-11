import {NavigationProp} from '@react-navigation/native';
import {ReactNode} from 'react';

export interface primaryButtonI {
  onpress?: () => void;
  children?: ReactNode;
}

export interface ErrorObject {
  name?: string;
  email?: string;
  password?: string;
}

export interface IFieldContainer {
  field: string;
  value: string;
}

export interface IPriorities {
  High: string;
  Medium: string;
  Low: string;
}
