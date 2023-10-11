"use client";

import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { UserType } from "@/interfaces";
import User from "@/components/user";
import authStore from "@/store/authStore";

const Home = observer(() => {
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<UserType[]>();
  const router = useRouter();

  useEffect(() => {
    if (!authStore.token) {
      router.push("login");
    }
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-20">
            <section className="flex flex-col space-y-12">
              <h1 className="text-5xl font-bold text-center">MY PRODUCTS</h1>
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {users &&
                  users.map((user) => {
                    return <User key={user.id} user={user} />;
                  })}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
});

export default Home;
