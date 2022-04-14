import * as React from "react";

import { useClearCache } from "react-clear-cache";

const App = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCache();
  console.log("islatestversion", isLatestVersion);
  console.log("empty", emptyCacheStorage);
  return (
    <div>
      <h1>React cache update test update</h1>
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
