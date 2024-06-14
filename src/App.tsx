import { Fragment } from "react/jsx-runtime";
import TopStories from "./components/StoryNews/TopStories";

function App() {
  return (
    <Fragment>
      <header className="sticky top-0 -z-10 mix-blend-overlay bg-stone-100">
        <h1 className="font-serif font-black lg:leading-[25rem] text-center text-fs-post">
          POSTS
        </h1>
      </header>
      <div className=" bg-stone-100 min-h-screen">
        <TopStories />
      </div>
    </Fragment>
  );
}

export default App;
