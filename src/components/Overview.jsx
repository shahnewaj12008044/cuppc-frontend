const Overview = () => {
  return (
    <div className="bg-blue-300 shadow-lg border-2 my-4 border-blue-300 rounded-lg">
      <h1 className="text-xl text-center font-bold text-[#0A0A23] mt-2">Overview</h1>
      <div className="  p-4 flex rounded-lg flex-col md:flex-row gap-2 items-center justify-center">
        <div className="md:w-1/2">
          <p className="font-serif text-blue-950 border px-2 py-4 rounded-md border-gray-800">
            Welcome to the Chittagong University Physics Programming Club
            (CUPPC), where innovation meets exploration. CUPPC is a vibrant
            community of physics enthusiasts who are passionate about bridging
            the gap between theoretical science and practical programming. Our
            mission is to empower students with cutting-edge computational
            skills, foster collaborative problem-solving, and ignite a passion
            for coding within the realm of physics. Join us as we unlock new
            dimensions of knowledge and creativity, shaping the future of
            scientific discovery.
          </p>
        </div>
        <div className="md:w-1/2 sm:w-full">
          <img
            className="img-fluid rounded-md h-56 w-full sm:w-full"
            src="/public/pictures/image1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
