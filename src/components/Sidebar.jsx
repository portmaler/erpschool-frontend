import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Teachers", // New item
    href: "/teachers",
    icon: UserCircleIcon,
    subItems: [
      {
        name: "All Teachers",
        href: "/teachers/allteachers",
      },
      {
        name: "Add Teacher",
        href: "/teachers/addteacher",
      },
    ],
  },
  {
    name: "All Students",
    href: "/allstudents",
    icon: UsersIcon,
    subItems: [
      {
        name: "All Students",
        href: "/students/allstudents",
      },
      {
        name: "Add Student",
        href: "/students/addstudent",
      },
    ],
  },
  {
    name: "New Admission",
    href: "/newadmission",
    icon: UserPlusIcon,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: ShieldCheckIcon,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: ShieldCheckIcon,
  },
];

function Sidebar() {
  const [collapsedItems, setCollapsedItems] = useState({});
  const [activeParent, setActiveParent] = useState(null);

  const toggleCollapse = (itemName) => {
    setCollapsedItems({
      ...collapsedItems,
      [itemName]: !collapsedItems[itemName],
    });
  };

  const handleItemClick = (parentName, parentHref) => {
    setActiveParent((prevParent) => (prevParent === parentName ? null : parentName));
    sidebarLinks.forEach((item) => {
      if (item.name === parentName) {
        item.href = parentHref; // Update parent href to the clicked subitem's href
      }
    });
  };

  return (
    <div className="sticky top-0 flex h-screen w-full flex-col justify-between border-r border-gray-200 bg-blue-900 px-1 py-5 xl:py-12 xl:px-2">
      <div className="ie-logo px-3 py-0 text-center xl:text-left">
        <div className="text-xl font-medium text-gray-900 xl:px-3 xl:text-2xl">
          <span className="block xl:hidden">AD</span>
          <span className="hidden xl:block">Admin</span>
        </div>
      </div>
      <div className="ie-menu mt-8 h-full">
        <div className="flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
          {sidebarLinks.map((item) => {
            const isCollapsed = collapsedItems[item.name];
            return (
              <React.Fragment key={item.name}>
                <NavLink
                  to={item.href}
                  className="group"
                  onClick={() => {
                    toggleCollapse(item.name);
                    handleItemClick(item.name, item.href); // Pass parent href to the function
                  }}
                >
                  {({ isActive }) => (
                    <span
                      className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${
                        isActive ? "bg-gray-100" : "group-hover:bg-gray-50"
                      }`}
                    >
                      <item.icon
                        className={`h-5 stroke-2 ${
                          isActive
                            ? "stroke-blue-700"
                            : "text-white group-hover:stroke-blue-700"
                        }`}
                      />
                      <span
                        className={`hidden c font-semibold xl:block ${
                          isActive
                            ? "text-gray-900"
                            : "text-white group-hover:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.subItems && (
                        <span className="ml-auto">
                          {isCollapsed ? (
                            <ChevronRightIcon
                              className={`h-5  ${
                                isActive
                                  ? "text-blue-700 "
                                  : "text-white group-hover:text-blue-700 hover:ml-auto"
                              }`}
                            />
                          ) : (
                            <ChevronDownIcon
                              className={`h-5 ${
                                isActive
                                  ? "text-blue-700"
                                  : "text-white group-hover:text-blue-700"
                              }`}
                            />
                          )}
                        </span>
                      )}
                    </span>
                  )}
                </NavLink>
                {item.subItems && !isCollapsed && (
                  <div className="pl-6">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.href}
                        className="group"
                        onClick={() => handleItemClick(item.name, subItem.href)}
                      >
                        {({ isActive }) => (
                          <span
                            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all`}
                          >
                            <span
                              className={`text-sm font-semibold xl:block ${
                                isActive
                                  ? "text-gray-400"
                                  : "text-white group-hover:text-gray-400"
                              }`}
                            >
                              {subItem.name}
                            </span>
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="ie-user hidden items-center gap-2 px-3 xl:flex">
        <UserCircleIcon className="h-12 stroke-white stroke-1 group-hover:stroke-blue-700" />
        <div className="ie-userDetails">
          <div className="flex justify-between gap-2">
            <span className="text-base font-semibold text-white">Admin</span>
            <div className="group flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-2 py-1 transition-all hover:bg-gray-50">
              <ArrowLeftOnRectangleIcon className="h-4 stroke-gray-700 stroke-[1.5] group-hover:stroke-red-700" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-red-700">
                Logout
              </span>
            </div>
          </div>
          <span className="mt-1 block text-sm font-medium  text-white">
            Logged in as Admin
          </span>
        </div>
      </div>
      <div className="ie-userMobile p-1 xl:hidden">
        <span className="flex flex-col items-center rounded-md bg-gray-50 px-3 py-2">
          <ArrowLeftOnRectangleIcon className="h-5 stroke-gray-700 stroke-2 group-hover:stroke-red-700" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
