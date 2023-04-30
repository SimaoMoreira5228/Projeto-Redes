import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-6xl cursor-default hover:animate-shake p-8 bg-fourth text-primary shadow-2xl">
        Oops! Algo está errado.
      </h1>
      <Link to="/" className="mt-8 px-4 py-2 bg-fourth text-white rounded-md">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default ErrorPage;
