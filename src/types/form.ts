export type BasicInformationValue = {
  title: string;
  description: string;
  categories: string[];
};

export type BasicInformationErrors = {
  title?: string;
  description?: string;
  categories?: string;
};

export type DetailsValue = {
  cookTime: string;
  servings: string;
  difficulty: string;
};

export type DetailsErrors = {
  cookTime?: string;
  servings?: string;
  difficulty?: string;
};
