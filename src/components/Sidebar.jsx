import {
  AppstoreOutlined,
  AuditOutlined,
  BankOutlined,
  BarChartOutlined,
  BgColorsOutlined,
  DownOutlined,
  HomeOutlined,
  InstagramOutlined,
  PercentageOutlined,
  ScissorOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-container">
        {" "}
        <img
          src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbXTfDpbx17Dm1UyWrCahHzqo902mog-y7REyL1EVX~ssIEzwHiEcj6MiIHeiOkbDRFcMpt3V-MvddqZyRBHDd-J3LkmTahxCv-UGtnU09Z3J2BfloJvJ7n8-My8RcF0WYqZ6UDqdBSium9I8xL4YyFvx4xreX-agyTnc8DLipLOn6ZANnuZqbZvpSsvyo6nPQr02YzgWu2BYAX~IzuUpJyPWDgjMwbgfHvQm7gpqsVVRXVoDqHJITXGmx4iYGsyfrawR5P-RLJ4ZNnwLYic-E7LCK2GbM-tOGgZf5OIKoUZwQMm35-HaH8YZ-MFzxSXKu~EwjGP9buXyfGZwoPdMg__"
          alt="Profile-pic "
        />
        <div className="profile-name">
          <div className="profile">
            <p>Nishan</p>
            <a href="#"> Visit store</a>
          </div>

          <DownOutlined size={20} />
        </div>
      </div>
      <div className="list-container">
        <ul className="sidebar-menu">
          <li>
            {" "}
            <HomeOutlined /> <span>Home</span>
          </li>
          <li>
            {" "}
            <AuditOutlined /> <span>Orders</span>
          </li>
          <li>
            {" "}
            <AppstoreOutlined /> <span>Products</span>
          </li>
          <li>
            {" "}
            <ShoppingCartOutlined /> <span>Delivery</span>
          </li>
          <li>
            {" "}
            <InstagramOutlined /> <span>Marketing</span>
          </li>
          <li>
            {" "}
            <BarChartOutlined /> <span>Analytics</span>
          </li>
          <li>
            {" "}
            <BankOutlined /> <span>Payments</span>
          </li>
          <li>
            {" "}
            <ScissorOutlined /> <span>Tools</span>
          </li>
          <li>
            {" "}
            <PercentageOutlined /> <span>Discounts</span>
          </li>
          <li>
            {" "}
            <UsergroupAddOutlined /> <span>Audience</span>
          </li>
          <li>
            {" "}
            <BgColorsOutlined /> <span>Appearance</span>
          </li>
          <li>
            {" "}
            <ThunderboltOutlined /> <span>Plugins</span>
          </li>
        </ul>
      </div>
      <div className="credit-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
            fill="white"
          />
        </svg>
        <div>
          <p>Available credit</p>
          <p className="price">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
