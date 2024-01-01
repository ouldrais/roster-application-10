export interface ITeamPlan {
  id?: number;
  availability?: boolean | null;
}

export const defaultValue: Readonly<ITeamPlan> = {
  availability: false,
};
