import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";
import AppContainer from "../pages/app-container/AppContainer";
import NotFound from "../pages/not-found/NotFound";
import { PATH } from "../constants/Path";

const SearchItems = lazy(() => import("../pages/search-items/SearchItems"));
const ItemDetail = lazy(() => import("../pages/item-detail/ItemDetail"));

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path={PATH.MAIN_LAYOUT} element={<AppContainer />}>
        <Route index element={<Navigate to={PATH.SEARCH_ITEMS} />} />
        <Route
          path={PATH.SEARCH_ITEMS}
          element={
            <Suspense fallback={<Loader />}>
              <SearchItems />
            </Suspense>
          }
        />
        <Route
          path={PATH.ITEM_DETAIL}
          element={
            <Suspense fallback={<Loader />}>
              <ItemDetail />
            </Suspense>
          }
        />
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  )
}