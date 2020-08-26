export type StatusKey = string;

export type StatusError = null | string | Error;

export type Status = {
  key: StatusKey;
  loading: boolean;
  success: boolean;
  error: null | string | Error;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type SetStatus = React.Dispatch<Status>;

export type SuccessAction = () => void;
export type ErrorAction = (err?: StatusError) => void;
export type LoadingAction = () => void;

export type Actions = {
  success: SuccessAction;
  error: ErrorAction;
  loading: LoadingAction;
};

export type UseStatus = {
  actions: Actions;
  status: Partial<Status>;
};

export type Observers = Record<string, SetStatus[]>;
export type Data = Record<string, Status>;

export type GetStoreData = (key: StatusKey) => Status;
export type AddStoreObserver = (key: StatusKey, set: SetStatus) => void;
export type RemoveStoreObserver = (key: StatusKey, set: SetStatus) => void;
export type UpdateStoreData = (key: StatusKey, data: Partial<Status>) => void;

export type Store = {
  getData: GetStoreData;
  addObserver: AddStoreObserver;
  removeObserver: RemoveStoreObserver;
  updateData: UpdateStoreData;
};

export type Context = React.Context<Store>;
