export interface IArticle {
  id: number;
  title: string;
  ed: (i:number) => void;
  del: (i:number) => void;
}
