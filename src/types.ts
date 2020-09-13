export type StatusKey = string;

export type StatusError = null | string | Error;

export type StatusKeys = "loading" | "success" | "error" | "data";

export type Status = {
  key: StatusKey;
  loading: boolean;
  success: boolean;
  error: null | string | Error;
  data: null | unknown;
};

export type TypedStatus<T> = Status & {
  data: T;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type SetStatus = React.Dispatch<Status>;

export type SuccessAction = (data?: unknown) => void;
export type ErrorAction = (err?: StatusError) => void;
export type LoadingAction = () => void;

export type TypedSuccessAction<T> = (data?: T) => void;

export type Actions<T> = {
  success: TypedSuccessAction<T>;
  error: ErrorAction;
  loading: LoadingAction;
};

export type UseStatus<T> = {
  actions: Actions<T>;
  status: Pick<TypedStatus<T>, StatusKeys>;
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
