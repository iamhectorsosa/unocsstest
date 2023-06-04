export const Buttons = () => {
  return (
    <>
      <button className="rounded-md bg-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-100 ring-offset-white active:bg-neutral-900 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300">
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
