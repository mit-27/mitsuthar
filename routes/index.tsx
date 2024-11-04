import Introduction from "../components/introduction.tsx";
import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col border border-red-500">
      <div className="h-[250px]"></div>
      <div className="container px-5 mx-auto mt-5 flex flex-col gap-5">
        <Introduction />
        <Projects />
      </div>
    </div>
  );
}
