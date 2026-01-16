import "./User.css";
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
  X,
} from "lucide-react";

import "./Email.css";
import emailjs from "@emailjs/browser";

import { user_data } from "./UserData";
import { useEffect, useState } from "react";
import Email from "./Email";
export default function User() {
  const [search, setSearch] = useState("");
  const [selectRole, setSelectRole] = useState("All");
  const [selectStatus,setSelectStatus] = useState("All");
  const [selectSubscription, setSelectSubscription] = useState("All");

  const [userData, setDataBase] = useState(() => {
    const saveData = localStorage.getItem("userData");
    return saveData ? JSON.parse(saveData) : user_data;
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_qn8wb6d";
    const templateId = "template_knu7h8c";
    const publicKey = "wmfaLuIEnDJ9JEUP6";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((Response) => {
        alert("email sent successfully");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      });
  };

  const handleData = (Id) => {
    if (window.confirm(`Are you sure you want to delete ?`)) {
      setDataBase(userData.filter((order) => order.id != Id));
    }
  };

  const handleBanUser = (Id) => {
    if (window.confirm(`Are you sure you want to ban the user ?`)) {
      setDataBase((Data) =>
        Data.map((user) =>
          user.id === Id ? { ...user, status: "Banned" } : user
        )
      );
    }
  };

  const exportToCSV = () => {
    const headers = [
      "UserName",
      "Email",
      "Role",
      "Status",
      "Subscription",
      "Location",
      "Registered",
      "Last Active",
      "Total spent",
    ];
    const rows = userData.map((u) => [
      u.name,
      u.email,
      u.role,
      u.subscription,
      u.location,
      u.status,
      u.registered,
      u.lastActive,
      u.totalSpent,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "User Data";
    a.click();
  };


  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const totalUser = 30;
  const activeUser = userData.filter((u) => u.status === "Active").length;
  const newUser = userData.filter(
    (u) => new Date(u.registered) > new Date("2023-12-31")
  ).length;
  const growthOfUser = ((newUser / totalUser) * 100).toFixed(1);


  const filterdProducts = userData.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchRole = selectRole === "All" || p.role === selectRole;
    const matchStatus = selectStatus === "All" || p.status === selectStatus;
    const matchSubscription =
      selectSubscription === "All" || p.subscription === selectSubscription;


    return matchSearch && matchRole && matchStatus && matchSubscription;
  });



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
              <p>{totalUser}</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-available">
              <UserCheck />
            </div>
            <p className="product">Active User</p>
            <div className="text">
              <p>{activeUser}</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-trash">
              <UserCheck />
            </div>
            <p className="pro">New user</p>
            <div className="text">
              <p>{newUser}</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Growth Of User</p>
            <div className="text">
              <p>{growthOfUser}%</p>
            </div>
          </div>
        </div>

        <div className="searchContainer">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search User By Name..."
            className="userSearch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select
              className="select"
              onChange={(e) => setSelectRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select
              className="select"
              onChange={(e) => setSelectStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
              <option value="Banned">Banned</option>
            </select>
          </div>
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select
              className="select"
              onChange={(e) => setSelectSubscription(e.target.value)}
            >
              <option value="All">Subscription</option>
              <option value="Premium"> Premium</option>
              <option value="Free">Free</option>
              <option value="Trial">Trial</option>
            </select>
          </div>

          <button className="button" onClick={exportToCSV}>
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
                <th className="Subscription">Subscription</th>
                <th className="Location"> Location</th>
                <th className="Registered"> Registered</th>
                <th className="Active">Last Active</th>
                <th className="Spent">Total Spent</th>
                <th className="Action">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterdProducts.map((data, index) => (
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
                        <button
                          className="edit-button edt"
                          title="view details"
                          onClick={() => {
                            setSelectedUser(data);
                            setShowModel(true);
                          }}
                        >
                          <Edit className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button
                          className="msg-button message"
                          title="send message"
                          onClick={() => setShowEmail(true)}
                        >
                          <MessageCircle className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button
                          className="ban-button ban"
                          title="ban_user"
                          onClick={() => handleBanUser(data.id)}
                        >
                          <Ban className="edt-btn" />
                        </button>
                      </div>
                      <div>
                        <button
                          className="trash-button delete"
                          title="delete user"
                          onClick={() => handleData(data.id)}
                        >
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
      {/*  */}
      {showModel && selectedUser && (
        <div className="model-overlay" onClick={() => setShowModel(false)}>
          <div className="model-container" onClick={(e) => e.stopPropagation()}>
            <div className="model-header">
              <h2 className="modal-title">User Details</h2>
              <button className="close-btn" onClick={() => setShowModel(false)}>
                <X style={{ width: "1.5", height: "1.5" }} />
              </button>
            </div>
            <div className="modal-body">
              <div className="user-detail-grid">
                <div className="detail-row">
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">{selectedUser.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{selectedUser.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Age</span>
                  <span className="detail-value">{selectedUser.age}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Gender</span>
                  <span className="detail-value">{selectedUser.gender}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{selectedUser.role}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{selectedUser.location}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Register</span>
                  <span className="detail-value">
                    {selectedUser.registered}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status</span>
                  <span className="detail-value">{selectedUser.status}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Last Active</span>
                  <span className="detail-value">
                    {selectedUser.lastActive}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Age</span>
                  <span className="detail-value">{selectedUser.age}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Verified</span>
                  <span className="detail-value">
                    {selectedUser.verified === true ? "Yes" : "No"}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Subscription</span>
                  <span className="detail-value">
                    {selectedUser.subscription}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total Spent</span>
                  <span className="detail-value">
                    {selectedUser.totalSpent}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEmail && (
        <div className="model-overlay" onClick={() => setShowEmail(false)}>
          <div className="model-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="email-header">
                  <h2 className="modal-title">Email Section</h2>
                  <button
                    className="close-btn"
                    onClick={() => setShowEmail(false)}
                  >
                    <X style={{ width: "1.5", height: "1.5" }} />
                  </button>
                </div>
                <div className="user-detail-grid">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="your name"
                    className="detail-row"
                    value={formData.from_name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="your email"
                    name="from_email"
                    className="detail-row"
                    value={formData.from_email}
                    onChange={handleChange}
                  />
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={formData.message}
                    className="detail-row"
                    onChange={handleChange}
                  ></textarea>
                  <div className="button-container">
                    <button type="submit" className="detail-button">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
