import { useRouter } from "../route-module";

function About() {
  const push = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => push("/")}>go Root</button>
    </div>
  );
}

export default About;
