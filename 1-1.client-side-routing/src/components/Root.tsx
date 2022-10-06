import { useRouter } from "../route-module";

function Root() {
  const push = useRouter();
  return (
    <div>
      <h1>Root</h1>
      <button onClick={() => push("/about")}>go About</button>
    </div>
  );
}

export default Root;
