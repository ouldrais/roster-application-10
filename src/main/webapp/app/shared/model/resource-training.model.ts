import dayjs from 'dayjs';

export interface IResourceTraining {
  id?: number;
  status?: string | null;
  level?: string | null;
  trainer?: string | null;
  activeFrom?: dayjs.Dayjs | null;
  activeto?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IResourceTraining> = {};
