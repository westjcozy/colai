export interface Drawing {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

export type Category = {
  id: string;
  name: string;
  value: string;
};
