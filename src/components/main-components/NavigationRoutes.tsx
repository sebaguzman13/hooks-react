import {
  Route,
  Routes,
} from "react-router-dom";
import UseCallback from "../UseCallback";
import UseContext from "../UseContext";
import UseDebugValue from "../UseDebugValue";
import UseDeferredValue from "../UseDeferredValue";
import UseEffect from "../UseEffect";
import UseId from "../UseId";
import UseImperativeHandle from "../UseImperativeHandle";
import UseInsertionEffect from "../UseInsertionEffect";
import UseLayoutEffect from "../UseLayoutEffect";
import UseMemo from "../UseMemo";
import UseReducer from "../UseReducer";
import UseRef from "../UseRef";
import UseState from "../UseState";
import UseSynxExternalStore from "../UseSynxExternalStore";
import UseTransition from "../UseTransition";
import Index from "./Index";

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/use-reducer" element={<UseReducer />} />
      <Route path="/use-callback" element={<UseCallback />} />
      <Route path="/use-memo" element={<UseMemo />} />
      <Route path="/use-ref" element={<UseRef />} />
      <Route path="/use-imperative-handle" element={<UseImperativeHandle />} />
      <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
      <Route path="/use-debug-value" element={<UseDebugValue />} />
      <Route path="/use-deferred-value" element={<UseDeferredValue />} />
      <Route path="/use-transition" element={<UseTransition />} />
      <Route path="/use-id" element={<UseId />} />
      <Route path="/use-sync-external-store" element={<UseSynxExternalStore />} />
      <Route path="/use-insertion-effect" element={<UseInsertionEffect />} />
    </Routes>
  )
}