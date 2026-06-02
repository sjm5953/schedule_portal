function Home() {
  return (
    <div>
      <div className="bg-base-100 shadow-md rounded-lg px-8 py-10 bg-linear-to-bl from-[#f3f520] to-[#4DB900] text-base-100 from-10% flex flex-col gap-2">
        <h1 className="uppercase font-bold text-3xl">
          Welcome, <span>Username</span>
        </h1>
        <h2 className="font-semibold uppercase text-sm">
          Access Workstudy Scheduling, Inventory Management and more
        </h2>
      </div>
      {/* main grid */}
      <div className="grid xl:grid-cols-[2fr_1fr] gap-8 mt-8">
        {/* left column */}
        <div className="grid grid-cols-2 gap-8 min-w-0">
          {/* WS stats */}
          <div className="stats shadow-md">
            <div className="stat bg-base-100 relative">
              <div className="stat-title uppercase">Active Workstudies</div>
              <div className="stat-value text-4xl">00</div>
              <div className="absolute top-6 right-6 opacity-20 text-sm">
                <i className="fi fi-br-arrow-up-right"></i>
              </div>
            </div>
            <div className="stat bg-base-100 relative">
              <div className="stat-title uppercase">Current Applicants</div>
              <div className="stat-value text-4xl">00</div>
              <div className="absolute top-6 right-6 opacity-20 text-sm">
                <i className="fi fi-br-arrow-up-right"></i>
              </div>
            </div>
          </div>
          {/* Inventory stats */}
          <div className="stats shadow-md">
            <div className="stat bg-base-100 relative">
              <div className="stat-title uppercase">Low Stock</div>
              <div className="stat-value text-4xl">00</div>
              <div className="absolute top-6 right-6 opacity-20 text-sm">
                <i className="fi fi-br-arrow-up-right"></i>
              </div>
            </div>
            <div className="stat bg-base-100 relative">
              <div className="stat-title uppercase">Active Orders</div>
              <div className="stat-value text-4xl">00</div>
              <div className="absolute top-6 right-6 opacity-20 text-sm">
                <i className="fi fi-br-arrow-up-right"></i>
              </div>
            </div>
          </div>
          {/* todays schedule */}
          <div className="bg-base-100 shadow-md rounded-lg flex flex-col col-span-2">
            <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-100">
              <h1 className="text-md uppercase font-bold">Today's Schedule</h1>
              <a className="btn btn-xs btn-circle bg-primary text-base-100">
                +
              </a>
            </div>
            <div class="flex flex-col"></div>
            <div className="inset-shadow-sm px-8 py-4">
              <a className="text-xs font-bold uppercase text-primary">
                View Calendar
              </a>
            </div>
          </div>
          {/* low stock */}
          <div className="bg-base-100 shadow-md rounded-lg flex flex-col col-span-2">
            <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-100">
              <h1 className="text-md uppercase font-bold">Low Stock</h1>
            </div>

            <div className="flex flex-col"></div>

            <div className="inset-shadow-sm px-8 py-4 flex gap-6">
              <a className="text-xs font-bold uppercase text-primary">
                View Inventory
              </a>

              <a className="text-xs font-bold uppercase text-primary">
                View Orders
              </a>
            </div>
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-col gap-8">
          {/* to do card*/}
          <div className="bg-base-100 shadow-md rounded-lg flex flex-col">
            <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-100">
              <h1 className="text-md uppercase font-bold">My To-Dos</h1>
              <a className="btn btn-xs btn-circle bg-primary text-base-100">
                +
              </a>
            </div>
            <div className="flex flex-col">
              <div className="px-8 py-4 flex items-center gap-4">
                <h1 className="uppercase font-bold text-sm flex-1">
                  List Item
                </h1>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded-full"
                />
              </div>
            </div>
          </div>
          {/* announcements */}
          <div className="bg-base-100 shadow-md rounded-lg flex flex-col">
            <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-100">
              <h1 className="text-md uppercase font-bold">
                Latest Announcements
              </h1>
              <a className="btn btn-xs btn-circle bg-primary text-base-100">
                +
              </a>
            </div>
            <div class="px-8 py-4 flex flex-col"></div>
            <div className="inset-shadow-sm px-8 py-4">
              <a className="text-xs font-bold uppercase text-primary">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
