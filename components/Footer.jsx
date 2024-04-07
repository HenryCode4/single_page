import React from "react";

export default function Footer() {
  return (
    <footer className="pt-6 pb-8 w-full h-[80px] px-4 text-center text-gray-500 bg-[#212429]">
      <small className="mb-2 block text-xs">
        &copy; 2024 Chima. All rights reserved.
      </small>
      <p className="text-xs ">
        <span className="font-bold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Vercel hosting.
      </p>
    </footer>
  );
}