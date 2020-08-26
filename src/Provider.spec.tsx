import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Provider from "./Provider";
import { StatusKey } from "./types";
import useStatus from "./useStatus";

type ChildComponentProps = {
  id: string;
  nodeKey: StatusKey;
};

const ChildComponent: React.FC<ChildComponentProps> = ({
  id,
  nodeKey,
}: ChildComponentProps) => {
  const { status, actions } = useStatus(nodeKey);
  const error =
    status.error instanceof Error ? status.error.message : status.error;
  return (
    <div>
      <p>{`ID: ${id} success: ${status.success} error: ${error} loading: ${status.loading}`}</p>
      <button onClick={() => actions.success()} type="button">
        {`button-success-${id}`}
      </button>
      <button onClick={() => actions.loading()} type="button">
        {`button-loading-${id}`}
      </button>
      <button type="button" onClick={() => actions.error()}>
        {`button-error-${id}`}
      </button>
    </div>
  );
};

test("Provider", () => {
  const NODES = ["node1", "node1", "node1", "node2", "node2", "node3"];
  const children = NODES.map((node: string, idx: number) => (
    <ChildComponent
      id={idx.toString()}
      nodeKey={node}
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
    />
  ));
  const { getByText } = render(<Provider>{children}</Provider>);

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 1 - Success
  fireEvent.click(getByText("button-success-0"));

  expect(
    getByText("ID: 0 success: true error: null loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: true error: null loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: true error: null loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 1 - Error
  fireEvent.click(getByText("button-error-0"));

  expect(
    getByText("ID: 0 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 1 - Loading
  fireEvent.click(getByText("button-loading-0"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 2 - Success
  fireEvent.click(getByText("button-success-3"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: true error: null loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: true error: null loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 2 - Error
  fireEvent.click(getByText("button-error-3"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 2 - Loading
  fireEvent.click(getByText("button-loading-3"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();

  // NODE: 3 - Success
  fireEvent.click(getByText("button-success-5"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: true error: null loading: false")
  ).toBeInTheDocument();

  // NODE: 3 - Error
  fireEvent.click(getByText("button-error-5"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: Generic status error loading: false")
  ).toBeInTheDocument();

  // NODE: 3 - Loading
  fireEvent.click(getByText("button-loading-5"));

  expect(
    getByText("ID: 0 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 1 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 2 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 3 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 4 success: false error: null loading: true")
  ).toBeInTheDocument();
  expect(
    getByText("ID: 5 success: false error: null loading: true")
  ).toBeInTheDocument();
});
