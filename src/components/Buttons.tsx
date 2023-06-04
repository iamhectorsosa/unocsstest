export const Buttons = () => {
  return (
    <>
      <button className="rounded-md text-sm font-medium px-5 py-2.5 bg-neutral-700 text-neutral-100 hover:bg-neutral-800 active:bg-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2">
        Get Started
      </button>
      <button
        bg="transparent hover:neutral-200 active:neutral-300"
        focus-visible="outline-none ring-2 ring-slate-300 ring-offset-2"
        text="sm text-neutral-900"
        font="medium"
        p="x-4 y-2.5"
        rounded="md"
      >
        Learn More
      </button>
    </>
  );
};
