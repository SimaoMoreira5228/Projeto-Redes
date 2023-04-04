import React from "react";

function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-6xl cursor-default hover:animate-shake p-8 bg-fourth text-primary shadow-2xl">
        Oops! Algo está errado.
      </h1>
    </div>
  );
}

export default ErrorPage;
