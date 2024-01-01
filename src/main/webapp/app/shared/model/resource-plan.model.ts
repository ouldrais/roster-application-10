export interface IResourcePlan {
  id?: number;
  availability?: boolean | null;
}

export const defaultValue: Readonly<IResourcePlan> = {
  availability: false,
};
