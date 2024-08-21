import Aspiration from "./components/Aspiration";
import Footer from "./components/Footer";
import Overview from "./components/overview";
import Poster from "./components/Poster";
import RecentActivities from "./components/RecentActivities";

const Home = () => {
  return (
    <div >
     <div className="md:mx-8 sm:mx-4">
     <Poster></Poster>
      <Overview></Overview>
      <Aspiration></Aspiration>
      <RecentActivities></RecentActivities>
      <div className="bg-slate-200 border-2 border-blue-400 rounded-lg shadow-lg  px-4 py-8 my-4">
        <h1 className="text-2xl sm:text-xl font-exo  font-bold text-center title-text">
          Our Vision Is to Transform Our Physics Department into a
          Research-Oriented Hub of Academic Excellence by Harnessing the Power
          of Computer Science
        </h1>
      </div>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
