"use client";

import authStore from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={`/`} className="cursor-pointer">
        Bosh sahifa
      </Link>
      <div
        className="cursor-pointer"
        onClick={() => {
          authStore.removeToken();
          router.push("/login");
        }}
      >
        Log out
      </div>
    </header>
  );
};

export default Navbar;
