import * as React from "react";

import { ClearCacheProvider, useClearCacheCtx } from "react-clear-cache";

const App = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx();
  return (
    <div>
      <h1>React clear cache</h1>
      {!isLatestVersion && (
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              emptyCacheStorage();
            }}
          >
            Update version
          </a>
        </p>
      )}
    </div>
  );
};

export default App;
