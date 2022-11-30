import Remote from "remote/Remote";
import ErrorBoundary from "./ErrorBoundary";

const Host = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Host</h1>
        <ErrorBoundary>
          <Remote isRemote />
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default Host;
