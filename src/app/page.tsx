export default function Page() {
  return (
    <figure className="flex flex-col items-center justify-center text-center bg-slate-100 rounded-xl p-8 dark:bg-slate-800 space-y-4">
      <img
        src="/Abdullah.jpg"
        alt="Abdullah"
        className="w-36 h-36 rounded-full object-cover shadow-md"
      />
      
      <div className="space-y-4 max-w-xl">
        <blockquote>
          <p className="text-lg font-medium dark:text-slate-200">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It's easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Abdullah</div>
          <div className="text-slate-700 dark:text-slate-400">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}