//eslint-disable-next-line
import axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    requireAuth?: boolean;
    mediaUpload?: boolean;
    displayError?: boolean;
  }
}
