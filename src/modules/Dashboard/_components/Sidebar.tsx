import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid, PopCard, Message, Setting, Logout } from "@/components/Icons";
import Logo from "@/components/Icons/Logo";

const navigation = [
  {
    name: "Popcards",
    href: "javascript:void(0)",
    icon: <PopCard />,
    current: false,
  },
  {
    name: "Feedback Forms",
    href: "javascript:void(0)",
    icon: <Message />,
    current: false,
  },
];

const Configuration = [
  {
    name: "Settings",
    href: "javascript:void(0)",
    icon: <Setting />,
    current: false,
  },
  {
    name: "Logout",
    href: "javascript:void(0)",
    icon: <Logout />,
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex grow flex-col overflow-y-auto bg-white px-[2.375rem] py-10 border-r shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border-borderColor">
    {/* <ImageComponent
        src="/assets/images/logo.svg"
        fill
        figClassName="w-[9.9rem] h-[3.3rem]"
        className="object-contain flex-shrink-0"
        alt=""
      /> */}
      <Logo />
      <nav className="flex mt-2 flex-1 flex-col">
        <ul role="list" className="space-y-2">
          <li>
            <Link href="/">
              <p
                className={classNames(
                  router.pathname === "/"
                    ? "bg-hoverColor"
                    : "hover:bg-hoverColor",
                  "flex gap-x-6 rounded-md p-3 items-center text-base text-primary"
                )}
              >
                <Grid />
                Dashboard
              </p>
            </Link>
          </li>
          <li className="text-secondary text-xs !mt-4">Actions</li>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <p
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-hoverColor"
                      : "hover:bg-hoverColor",
                    "group  gap-x-6 rounded-md p-3 flex items-center text-primary text-base"
                  )}
                >
                  {item.icon}
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-2">
          <p className="text-secondary text-xs">Configuration</p>
          {Configuration?.map((item) => (
            <div key={item.name}>
              <Link href={item.href}>
                <p
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-hoverColor"
                      : "hover:bg-hoverColor",
                    "group  gap-x-3.5 rounded-md px-3 py-2 flex items-center text-primary text-lg"
                  )}
                >
                  {item.icon}
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
