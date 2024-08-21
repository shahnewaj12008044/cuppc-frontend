const Aspiration = () => {
  return (
    <div className="mt-6 py-2">
      <h1 className="text-center text-2xl underline font-bold font-exo my-2 text-[#0A0A23] ">
        Our Aspiration
      </h1>
      <div className=" flex md:flex-row flex-col gap-3">
        <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
          <div className="card-body">
            <p className="text-[#0A0A23] font-serif font-semibold">
              Learning Necessary Programming and Technical skills to thrive in
              careers
            </p>
          </div>
        </div>
        <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
          <div className="card-body ">
            <p className="text-[#0A0A23] font-serif font-semibold">
              Integrating computer science into physics for world-class research
            </p>
          </div>
        </div>
        <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
          <div className="card-body ">
            <p className="text-[#0a1823] font-serif font-semibold">
              Digitalization of the Physics Department
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aspiration;
