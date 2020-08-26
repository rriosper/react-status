import {
  AddStoreObserver,
  Data,
  GetStoreData,
  Observers,
  RemoveStoreObserver,
  SetStatus,
  Status,
  StatusKey,
  Store,
} from "./types";
import { getInitialStatus } from "./utils";

const createStore = (): Store => {
  const observers: Observers = {};
  const data: Data = {};

  const getData: GetStoreData = (key: StatusKey): Status => {
    return data[key];
  };

  const updateObservers = (key: StatusKey) => {
    const status = data[key];
    observers[key].forEach((set) => {
      set(status);
    });
  };

  const addObserver: AddStoreObserver = (key: StatusKey, set: SetStatus) => {
    if (!observers[key]) {
      observers[key] = [];
      data[key] = getInitialStatus(key);
    }

    observers[key].push(set);
  };

  const removeObserver: RemoveStoreObserver = (
    key: StatusKey,
    set: SetStatus
  ) => {
    observers[key] = observers[key].filter((observer) => observer !== set);
  };

  const updateData = (key: StatusKey, status: Partial<Status>) => {
    data[key] = { ...data[key], ...status };
    updateObservers(key);
  };

  return {
    addObserver,
    removeObserver,
    updateData,
    getData,
  };
};

export default createStore;
