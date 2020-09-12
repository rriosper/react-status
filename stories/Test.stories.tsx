import React from "react";
import { Provider, useStatus } from "../src";

export default {
  title: "Component",
};

const ChildComponent = ({ id }: { id: string }) => {
  const {
    status: { loading, error, success, data },
    actions,
  } = useStatus(id, "Initial data");

  return (
    <div>
      <h1>{`I am listen ${id} node`}</h1>
      {loading ? (
        <>
          <div>Loading...</div>
          <div>
            InitialData:
            {data}
          </div>
        </>
      ) : (
        <>
          {error && <div>{error instanceof Error ? error.message : error}</div>}
          {success && (
            <div>
              {`Success
                DATA:
                 ${data}`}
            </div>
          )}
        </>
      )}
      <br />
      <button
        type="button"
        onClick={() => actions.success("This is the DATA!!!")}
      >
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
