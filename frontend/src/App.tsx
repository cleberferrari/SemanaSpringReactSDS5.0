import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";


function App() {
  return (
    <>

      <NavBar />
      <div className="container">
        <h1 className="text-primary">DashBoard de vendas - by Cleber Ferrari</h1>

        <div className="row px-3" >
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">todas vendas</h5>
            <DonutChart />
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas vendas</h2>
          </div>

          <DataTable />
        </div>
      </div>
      
      <Footer /></>

  );
}

export default App;
