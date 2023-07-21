import Header from "./Header";
import { ChartComp } from "../dashboard/stats/Chart";
import Bundles from "../dashboard/stats/Bundles";
import { Line } from "../dashboard/stats/Line";
import { Table } from "../dashboard/stats/Table";

const Main = () => {
  return (
    <div className=" w-5/6">
      <Header />

      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          <Bundles />
        </div>
        <div>
          <ChartComp />
        </div>
      </section>
      <br></br>
      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          <Line />
        </div>
        <div>
          <Table />
        </div>
      </section>
    </div>
  );
};

export default Main;