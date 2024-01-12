import { Routes, Route, Navigate } from "react-router";
import "./App.scss";
import { Layout } from "./views/Layout/Layout";
import { PostsView } from "./views/PostsView/PostsView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="posts" element={<PostsView />} />
        {/* <Route path="users" element={<Profile/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
