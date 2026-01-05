import "../../Styles/User/user.css";
import {
  Users,
  UserCheck,
  Activity,
  Search,
  Download,
  ChevronDown,
  ArrowDownUp,
  Edit,
  MessageCircle,
  Ban,
  Trash,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
export default function User() {
  const database = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      verified: true,
      subscription: "Premium",
      location: "New York, USA",
      registered: "2024-01-15",
      lastActive: "2 hours ago",
      totalSpent: 1250,
      age: 32,
      gender: "Male",
      activityScore: 95,
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "Manager",
      status: "Active",
      verified: true,
      subscription: "Premium",
      location: "London, UK",
      registered: "2024-02-20",
      lastActive: "5 hours ago",
      totalSpent: 890,
      age: 28,
      gender: "Female",
      activityScore: 88,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Customer",
      status: "Active",
      verified: false,
      subscription: "Free",
      location: "Toronto, Canada",
      registered: "2024-03-10",
      lastActive: "1 day ago",
      totalSpent: 450,
      age: 35,
      gender: "Male",
      activityScore: 72,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Customer",
      status: "Inactive",
      verified: true,
      subscription: "Trial",
      location: "Sydney, Australia",
      registered: "2024-04-05",
      lastActive: "1 week ago",
      totalSpent: 120,
      age: 24,
      gender: "Female",
      activityScore: 45,
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      role: "Customer",
      status: "Banned",
      verified: true,
      subscription: "Free",
      location: "Berlin, Germany",
      registered: "2024-05-12",
      lastActive: "2 weeks ago",
      totalSpent: 0,
      age: 41,
      gender: "Male",
      activityScore: 12,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa@example.com",
      role: "Manager",
      status: "Active",
      verified: true,
      subscription: "Premium",
      location: "Tokyo, Japan",
      registered: "2024-06-18",
      lastActive: "3 hours ago",
      totalSpent: 2100,
      age: 29,
      gender: "Female",
      activityScore: 92,
    },
    {
      id: 7,
      name: "Tom Brown",
      email: "tom@example.com",
      role: "Customer",
      status: "Active",
      verified: false,
      subscription: "Free",
      location: "Paris, France",
      registered: "2024-07-22",
      lastActive: "6 hours ago",
      totalSpent: 320,
      age: 38,
      gender: "Male",
      activityScore: 68,
    },
    {
      id: 8,
      name: "Anna Martinez",
      email: "anna@example.com",
      role: "Customer",
      status: "Active",
      verified: true,
      subscription: "Premium",
      location: "Madrid, Spain",
      registered: "2024-08-30",
      lastActive: "1 hour ago",
      totalSpent: 1540,
      age: 27,
      gender: "Female",
      activityScore: 85,
    },
  ];

  return (
    <>
      <div className="user-container-wrapper">
        <div className="header">
          <p className="first-p">User Management</p>
          <p className="second-p">Manage all users,roles and permissions</p>
        </div>
        <div className="container">
          <div className="pc">
            <div className="icon">
              <Users />
            </div>
            <p className="product">Total User</p>
            <div className="text">
              <p>6,000</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-available">
              <UserCheck />
            </div>
            <p className="product">Active User</p>
            <div className="text">
              <p>6,000</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-trash">
              <UserCheck />
            </div>
            <p className="pro">New user</p>
            <div className="text">
              <p>6,000</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Growth Of User</p>
            <div className="text">
              <p>13.5%</p>
            </div>
          </div>
        </div>

        <div className="searchContainer">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search User By Name..."
            className="Search"
          />
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select className="select">
              <option value="All Roles">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select className="select">
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
              <option value="Banned">Banned</option>
            </select>
          </div>

          <button className="button">
            <Download className="btn-icon" />
            Export CSV
          </button>
        </div>

        <div className="table-Container">
          <table className="products-table">
            <thead>
              <tr>
                <th className="User">User</th>
                <th className="Role">Role</th>
                <th className="Status">Status</th>
                <th className="Subscription">
                  Subscription
                  <ArrowDownUp className="arrow" />
                </th>
                <th className="Location"> Location</th>
                <th className="Registered"> Registered</th>
                <th className="Active">Last Active</th>
                <th className="Spent">Total Spent</th>
                <th className="Action">Actions</th>
              </tr>
            </thead>
            <tbody>
              {database.map((data, index) => (
                <tr key={data.id}>
                  <td>
                    <div className="info">
                      <div className="shortName">
                        {data.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="name-email">
                        <span className="name">{data.name}</span>
                        <span className="email">{data.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="role-container">
                      <span className={`role role-${data.role.toLowerCase()}`}>
                        {data.role}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="role-container">
                      <span
                        className={`status status-${data.status.toLowerCase()}`}
                      >
                        {data.status}
                      </span>
                    </div>
                  </td>
                  <td className="subscription">
                    <div className="role-container">
                      <span
                        className={`subscription subscription-${data.subscription.toLowerCase()}`}
                      >
                        {data.subscription}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="location-container">
                      <MapPin className="location-icon" />
                      <div className="location">
                        <span>{data.location}</span>
                      </div>
                    </div>
                  </td>
                  <td className="registered">
                    <span className="date">{data.registered}</span>
                  </td>
                  <td>
                    <div className="clock-container">
                      <Clock className="clock" />
                      <span>{data.lastActive}</span>
                    </div>
                  </td>
                  <td>
                    <div className="Active">
                      <DollarSign className="dollarSign" />
                      {data.totalSpent.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <div className="button-container">
                      <div className="edit-container">
                        <button className="edit-button edt">
                          <Edit className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button className="msg-button message">
                          <MessageCircle className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button className="ban-button ban">
                          <Ban className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button className="trash-button delete">
                          <Trash className="edt-btn" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
