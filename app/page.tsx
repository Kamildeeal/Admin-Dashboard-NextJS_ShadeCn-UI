import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Dashboard />
    </div>
  );
};

export default HomePage;
