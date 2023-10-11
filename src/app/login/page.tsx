"use client";

import React, { useRef } from "react";
import authStore from "@/store/authStore";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClickk = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.token) {
          authStore.setToken(res.token);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
    // fetch("https://reqres.in/api/login1", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: emailRef.current?.value,
    //     password: passwordRef.current?.value,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    // if (res?.token) {
    //   authStore.setToken(res.token);
    //   router.push("/");
    // }
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div className="flex w-full justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-4">
            Login: {'"mor_2314"'} and password: {'"83r5^_"'}
          </p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              ref={passwordRef}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={onClickk}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Ro&lsquo;yhatdan o&lsquo;tish
            </p>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
