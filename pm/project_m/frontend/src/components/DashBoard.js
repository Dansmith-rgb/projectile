import React, { useEffect } from "react";
import Sidebar from "./SideBar";
import "../../static/css/Dashboard.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import { Icon, InlineIcon } from "@iconify/react";
import moreHorizontal from "@iconify/icons-akar-icons/more-horizontal";

const ganttChart = () => {
  var tasks = [
    {
      id: "Task 1",
      name: "Redesign website",
      start: "2021-11-14",
      end: "2021-12-17",
      progress: 20,
      dependencies: null,
    },
    {
      id: "Task 2",
      name: "YESSSSSS",
      start: "2022-3-28",
      end: "2022-5-12",
      progress: 90,
      dependencies: null,
    },
  ];
  var gantt = new Gantt("#gantt", tasks, {
    view_mode: "Month",
    date_format: "YYYY-MM-DD",
  });
};

const DashBoard = () => {
  React.useEffect(() => ganttChart());
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-container-header">
        <div>
          <h2 className="welcome-home">Welcome Back Michal</h2>
          <h6 className="subtitle-home">
            Here's whats happening with your projects today
          </h6>
        </div>
        <div className="cards-section-home">
          <div className="home-cards">
            <Link className="card-link" to="/active-projects">
              <Card text="Active Projects" number="2" />
            </Link>
            <Link className="card-link" to="/past-projects">
              <Card text="Past Projects" number="3" />
            </Link>
            <Card text="Future Projects" number="4" />
          </div>
        </div>
        <div className="gantt-chart-container">
          <div className="gantt-chart-header">
            <h4 className="gantt-chart-title">Projects</h4>
            <Link className="more-gantt-chart" to="/">
              <Icon
                icon={moreHorizontal}
                style={{ color: "#000000", fontSize: "24px" }}
              />
            </Link>
          </div>
          <svg id="gantt"></svg>
        </div>
        <div className="Upcoming-projects-table-section">
          <div className="upcoming-projects-header">
            <h4 className="upcoming-projects-table-title">Upcoming Projects</h4>
            <Link className="more-upcoming-projects-table" to="/">
              <Icon
                icon={moreHorizontal}
                style={{ color: "#000000", fontSize: "24px" }}
              />
            </Link>
          </div>

          <table className="upcoming-projects-table">
            <thead>
              <tr className="upcoming-projects-subtitle">
                <th>Project</th>
                <th>Contract-end</th>
                <th>Work</th>
                <th>Person</th>
              </tr>
            </thead>
            <tbody className="upcoming-projects-body">
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
              <tr>
                <td>Cancer Research UK</td>
                <td
                  style={{
                    paddingTop: "2.7%",
                    paddingBottom: "2.7",
                  }}
                >
                  <p style={{ margin: "0" }}>17th July, 21</p>
                  <div
                    className="closeness"
                    style={{
                      width: "55px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "16px",
                      zIndex: 12,
                    }}
                  ></div>
                </td>
                <td>Virtual Screening</td>
                <td>Colin Smith</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
