import { StatusKey, Status } from "./types";

export const omit = <T>(
  keys: string[],
  object: Record<string, T>
): Record<string, T> =>
  Object.keys(object).reduce((acc, key) => {
    if (!keys.includes(key)) {
      acc[key] = object[key];
    }

    return acc;
  }, {});

export const getInitialStatus = (
  key: StatusKey,
  initialData?: unknown
): Status => ({
  key,
  loading: true,
  error: null,
  success: false,
  data: initialData,
});
