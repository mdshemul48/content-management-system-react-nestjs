import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import categories from "./reducers/categories";

export default configureStore({
  reducer: { auth, categories },
});
