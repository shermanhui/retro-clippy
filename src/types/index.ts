type retroNote = {
  author: {
    name: string;
    email: string;
  };
  content: string;
  group: string;
  votes: number;
  date: string;
  comment: string[];
};

export type retroJSON = {
  [key: string]: retroNote[];
};
