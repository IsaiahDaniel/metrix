import React from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/shared/Card/Card";
import IconBadge from "../components/shared/Badge/IconBadge";
import { icons } from "../constants";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
        <Card classNames="p-3">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <IconBadge
                Icon={icons.TbChartInfographic}
                classNames="bg-[#5570F1]"
              />
              <p className="text-gray-400">This week</p>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div>
                <h2>Sales</h2>
                <p>4000000.00</p>
              </div>

              <div>
                <h2>Volume</h2>
                <p>450 +20.00</p>
              </div>
            </div>
          </div>
        </Card>

        <Card classNames="p-3">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <IconBadge
                Icon={icons.TbChartInfographic}
                classNames="bg-[#5570F1]"
              />
              <p className="text-gray-400">This week</p>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div>
                <h2>Sales</h2>
                <p>4000000.00</p>
              </div>

              <div>
                <h2>Volume</h2>
                <p>450 +20.00</p>
              </div>
            </div>
          </div>
        </Card>

        <Card classNames="p-3">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <IconBadge
                Icon={icons.TbChartInfographic}
                classNames="bg-[#5570F1]"
              />
              <p className="text-gray-400">This week</p>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div>
                <h2>Sales</h2>
                <p>4000000.00</p>
              </div>

              <div>
                <h2>Volume</h2>
                <p>450 +20.00</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      

    </Layout>
  );
};

export default Dashboard;
