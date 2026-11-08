
export const LoadStatus = {
  LOADING: 'LOADING',
  READY: 'READY',
} as const;


export type LoadStatusType = 'LOADING' | 'READY';


export type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};