import { Routes, Route, NavLink } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="bg-base-100 py-4 px-8 shadow-md z-10">
        <div className="flex gap-1 items-center">
          <i className="fi fi-br-e-learning pt-1 text-lg text-primary"></i>
          <h1 className="font-black uppercase">Schedule Portal</h1>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="bg-base-100 flex w-60 pt-8 shadow-md">
          <ul className="menu p-0 w-full space-y-2">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "navItem navActive" : "navItem"
                }
              >
                <i className="fi fi-br-apps pt-1"></i>
                Dashboard
              </NavLink>
            </li>
            <li>
              <a className="navItem">
                <i className="fi fi-br-megaphone-sound-waves pt-1"></i>
                Announcements
              </a>
            </li>
            <li>
              <details>
                <summary className="navItem">
                  <i className="fi fi-br-calendar-day pt-1"></i>Schedule
                </summary>
                <div className="bg-neutral-100 py-4">
                  <li>
                    <NavLink
                      to="/calendar"
                      className={({ isActive }) =>
                        isActive ? "navItemSub navSubActive" : "navItemSub"
                      }
                    >
                      Calendar
                    </NavLink>
                  </li>
                  <li>
                    <a className="navItemSub">Scheduled Shifts</a>
                  </li>
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary className="navItem">
                  <i className="fi fi-br-users pt-1"></i>Employees
                </summary>
                <div className="bg-neutral-100 py-4">
                  <li>
                    <a className="navItemSub">Active</a>
                  </li>
                  <li>
                    <a className="navItemSub">Applicants</a>
                  </li>
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary className="navItem">
                  <i className="fi fi-br-inventory-alt pt-1"></i>Inventory
                </summary>
                <div className="bg-neutral-100 py-4">
                  <li>
                    <a className="navItemSub">Inventory List</a>
                  </li>
                  <li>
                    <a className="navItemSub">orders</a>
                  </li>
                </div>
              </details>
            </li>
            <li>
              <a className="navItem">
                <i className="fi fi-br-document pt-1"></i>Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
