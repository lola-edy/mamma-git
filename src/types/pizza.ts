export type Category = "fromage" | "viande"|"legume" |"sauce" |"autre";

export type Ingredient ={
    id:string;
    name:string;
    emoji:string;
    category: Category;
    price: number;
};

export type Pizza ={
    id:string;
    name:string;
    description:string;
    ingredientIds: string[];
    price: number;
};

export type EasterEgg ={
    id:string;
    title:string;
    message:string;
    requiredIds: string[];
    exact?: boolean;
    effect: "glitter" | "flames"|"cry" |"cursed" |"zen";
};
