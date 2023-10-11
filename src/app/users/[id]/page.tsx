"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { UserType } from "@/interfaces";
import authStore from "@/store/authStore";
import noimg from "../../../../public/noimg.png";

const UserDetailedPage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      {!authStore.token ? (
        router.push("/login")
      ) : (
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="mt-12">
              <section className="flex flex-col space-y-12 mt-20">
                <h1 className="text-3xl font-bold text-center text-blue-600">
                  {user?.title || "Title"}
                </h1>
                <div className="flex w-full space-x-6 px-32">
                  <div className="flex w-1/2">
                    <Image
                      src={user?.image || noimg}
                      alt={user?.title || "Title"}
                      width={400}
                      height={1000}
                      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        isLoading
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                      }`}
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                  </div>
                  <div className="flex w-1/2 flex-col">
                    <h1 className="text-1xl font-bold mb-8 text-blue-900">
                      {user?.id || "id"}
                    </h1>
                    <h1 className="text-1xl font-bold mb-8 text-blue-900">
                      Category: {user?.category}
                    </h1>
                    <h1 className="text-1xl font-bold mb-8 text-blue-900">
                      {user?.description || "Mahsulot haqida qisqacha"}
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserDetailedPage;
