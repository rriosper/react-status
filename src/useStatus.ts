import { useContext, useEffect, useState } from "react";

import context from "./context";
import {
  Actions,
  ErrorAction,
  SetStatus,
  Status,
  StatusKey,
  SuccessAction,
  UseStatus,
  LoadingAction,
} from "./types";
import { omit, getInitialStatus } from "./utils";

const useStatus = (key: StatusKey): UseStatus => {
  const store = useContext(context);
  const [status, setStatus]: [Status, SetStatus] = useState(
    store.getData(key) || getInitialStatus(key)
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

  const success: SuccessAction = () => {
    if (!status.success) {
      store.updateData(key, { success: true, loading: false, error: null });
    }
  };

  const error: ErrorAction = (err = new Error("Generic status error")) => {
    if (!status.error) {
      store.updateData(key, { success: false, loading: false, error: err });
    }
  };

  const loading: LoadingAction = () => {
    if (!status.loading) {
      store.updateData(key, { success: false, loading: true, error: null });
    }
  };

  const actions: Actions = {
    success,
    error,
    loading,
  };

  const filteredStatus = omit(["key"], status);

  return { status: filteredStatus, actions };
};

export default useStatus;
