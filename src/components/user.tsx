"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserType } from "@/interfaces";
import noimg from "../../public/noimg.png";

const User: FC<{ user: UserType }> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/users/${user.id}`}>
      <div className="h-96 flex flex-col p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 border">
        <div className="relative flex-1 max-h-80">
          <Image
            src={user?.image || noimg}
            alt={user?.title || "Mahsulot nomi"}
            fill
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {user.category || "Category"}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 line-clamp-1">
          {user.title || "Chichen Itza"}
        </h2>
        <p className="leading-relaxed text-base line-clamp-3">
          {user.description ||
            "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche"}
        </p>
      </div>
    </Link>
  );
};

export default User;
