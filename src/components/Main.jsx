import React from "react";
import Header from "./Header";
import arrow from "../assets/icons/arrow.png";
import Stats from "./Stats";
import search from "../assets/icons/search.png";
import sort from "../assets/icons/Sort.png";
import download from "../assets/icons/download.png";
import { Table } from "antd";

const Main = () => {
  const data = [
    {
      orderId: 1,
      orderDate: "2024-01-09",
      orderAmount: 100.0,
      transactionFees: 5.0,
    },
    {
      orderId: 2,
      orderDate: "2024-01-10",
      orderAmount: 75.5,
      transactionFees: 3.5,
    },
    {
      orderId: 1,
      orderDate: "2024-01-09",
      orderAmount: 100.0,
      transactionFees: 5.0,
    },
    {
      orderId: 2,
      orderDate: "2024-01-10",
      orderAmount: 75.5,
      transactionFees: 3.5,
    },
    {
      orderId: 1,
      orderDate: "2024-01-09",
      orderAmount: 100.0,
      transactionFees: 5.0,
    },
    {
      orderId: 2,
      orderDate: "2024-01-10",
      orderAmount: 75.5,
      transactionFees: 3.5,
    },
    {
      orderId: 1,
      orderDate: "2024-01-09",
      orderAmount: 100.0,
      transactionFees: 5.0,
    },
    {
      orderId: 2,
      orderDate: "2024-01-10",
      orderAmount: 75.5,
      transactionFees: 3.5,
    },
    {
      orderId: 1,
      orderDate: "2024-01-09",
      orderAmount: 100.0,
      transactionFees: 5.0,
    },
    {
      orderId: 2,
      orderDate: "2024-01-10",
      orderAmount: 75.5,
      transactionFees: 3.5,
    },
    // Add more data as needed
  ];

  const columns = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    {
      title: "Order Date",
      align: "center",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Order Amount",
      dataIndex: "orderAmount",
      key: "orderAmount",
      align: "right",
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Transaction Fees",
      dataIndex: "transactionFees",
      key: "transactionFees",
      align: "right",
      render: (fees) => `$${fees.toFixed(2)}`,
    },
  ];
  return (
    <div className="main-container">
      <Header />
      <div className="main-body">
        <div className="overview">
          <p>Overview</p>
          <div className="drop-down">
            {" "}
            <p>Last Month</p> <img src={arrow} alt="drop-down" />
          </div>
        </div>

        <div className="stats-container">
          <Stats title={"Online orders"} number={"231"} />
          <Stats title={"Amount received"} number={"₹23,92,312.19"} />
        </div>

        <div className="transactions-title">
          <p>Transactions | This Month</p>
        </div>

        <div className="table-container">
          <div className="filter">
            <div className="filter-search">
              <img src={search} alt="search-icon" />
              <input type="text" placeholder="Search by order ID..." />
            </div>
            <div className="download-container">
              <button>
                Sort
                <img src={sort} alt="sort" />
              </button>
              <img src={download} alt="download-icon" />
            </div>
          </div>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          bordered={false}
          pagination={false} // Set to true if you want pagination
        />
      </div>
    </div>
  );
};

export default Main;
