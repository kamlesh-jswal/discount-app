"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import CategoryButton from "@/components/common/Button/CategoryButton";
import { APP_MODULES } from "@/constants/app";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {APP_MODULES.map((module) => (
        <Link key={module.id} href={module.path}>
          <CategoryButton
            title={module.title}
            icon={module.icon}
            selected={pathname === module.path}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
