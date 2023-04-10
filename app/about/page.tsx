const Me = {
  name: "Tommy",
  lastName: "Björk",
};

export default function About() {
  return (
    <>
      <div className="text-xl font-thin text-white text bg-slate-500 py-10 mt-4">
        About page
      </div>
      <div className="text-white pt-2">
        {Me.name} {Me.lastName}
      </div>
    </>
  );
}
