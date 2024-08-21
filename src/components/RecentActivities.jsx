const RecentActivities = () => {
    return (
      <div className="mt-6 py-2">
        <h1 className="text-center text-2xl underline font-bold font-exo my-2 text-[#0A0A23] ">
          Recent Activities
        </h1>
        <div className=" flex md:flex-row flex-col gap-3">
          <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
            <div className="card-body py-auto">
              <p className="text-[#0A0A23] font-serif font-semibold">
              Gathering 15 Enthusiastic Programming Students

              </p>
            </div>
          </div>
          <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
            <div className="card-body">
              <p className="text-[#0A0A23] font-serif font-semibold">
              Teaching Basic Python Programming to Over 30 Students

              </p>
            </div>
          </div>
          <div className="card glass w-96 bg-gradient shadow-lg shadow-blue-950">
            <div className="card-body ">
              <p className="text-[#0A0A23] font-serif font-semibold">
              Data Analysis Research Collaboration with Esteemed Teachers

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecentActivities;
  