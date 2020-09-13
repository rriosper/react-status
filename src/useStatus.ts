import { useContext, useEffect, useState } from "react";
import context from "./context";
import {
  Actions,
  ErrorAction,
  LoadingAction,
  SetStatus,
  Status,
  StatusKey,
  TypedSuccessAction,
  UseStatus,
} from "./types";
import { getInitialStatus } from "./utils";

const useStatus = <T>(key: StatusKey, initialData?: T): UseStatus<T> => {
  const store = useContext(context);
  const [status, setStatus]: [Status, SetStatus] = useState(
    store.getData(key) || getInitialStatus(key, initialData)
  );

  function set(updateFn) {
    setStatus(updateFn);
  }

  useEffect(() => {
    store.addObserver(key, set);

    return () => {
      store.removeObserver(key, set);
    };
  });

  const success: TypedSuccessAction<T> = (data) => {
    if (!status.success) {
      store.updateData(key, {
        success: true,
        loading: false,
        error: null,
        data,
      });
    }
  };

  const error: ErrorAction = (err = new Error("Generic status error")) => {
    if (!status.error) {
      store.updateData(key, {
        ...status,
        success: false,
        loading: false,
        error: err,
      });
    }
  };

  const loading: LoadingAction = () => {
    if (!status.loading) {
      store.updateData(key, {
        ...status,
        success: false,
        loading: true,
        error: null,
      });
    }
  };

  const actions: Actions<T> = {
    success,
    error,
    loading,
  };

  return {
    status: {
      data: status.data as T,
      loading: status.loading,
      error: status.error,
      success: status.success,
    },
    actions,
  };
};

export default useStatus;
