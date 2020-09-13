import React from "react";
import { Provider, useStatus } from "../src";

export default {
  title: "Component",
};

type Test = {
  value: boolean;
};

const ChildComponent = ({ id }: { id: string }) => {
  const {
    status: { loading, error, success, data },
    actions,
  } = useStatus<Test[]>(id, []);

  return (
    <div>
      <h1>{`I am listen ${id} node`}</h1>
      {loading ? (
        <div>
          {`Loading
                DATA:
                 ${JSON.stringify(data)}`}
        </div>
      ) : (
        <>
          {error && <div>{error instanceof Error ? error.message : error}</div>}
          {success && (
            <div>
              {`Success
                DATA:
                 ${JSON.stringify(data)}`}
            </div>
          )}
        </>
      )}
      <br />
      <button type="button" onClick={() => actions.success([{ value: true }])}>
        Success
      </button>
      <button type="button" onClick={() => actions.error("Esto es un error")}>
        Error
      </button>
      <button type="button" onClick={() => actions.loading()}>
        Loading
      </button>
    </div>
  );
};

const ParentComponent = ({ id }: { id: string }) => {
  const {
    status: { loading, error, success },
    actions,
  } = useStatus(id);

  return (
    <div>
      <h1>{`I am listen ${id} node`}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && <div>{error instanceof Error ? error.message : error}</div>}
          {success && <ChildComponent id="test" />}
        </>
      )}
      <br />
      <button type="button" onClick={() => actions.success()}>
        Success
      </button>
      <button type="button" onClick={() => actions.error("Esto es un error")}>
        Error
      </button>
      <button type="button" onClick={() => actions.loading()}>
        Loading
      </button>
    </div>
  );
};

export const Main: React.FC<any> = () => {
  return (
    <Provider>
      <ChildComponent id="test" />
      <br />
      <ChildComponent id="test" />
      <br />
      <ChildComponent id="other.node" />

      <ParentComponent id="other.node" />
    </Provider>
  );
};
