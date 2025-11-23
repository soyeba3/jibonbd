"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex overflow-hidden relative justify-center items-center min-h-screen bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)]" />

      <div className="overflow-hidden absolute inset-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full to-transparent rounded-full blur-3xl animate-pulse bg-linear-to-br from-emerald-100/40" />
        <div className="absolute -right-1/2 -bottom-1/2 w-full h-full to-transparent rounded-full blur-3xl delay-1000 animate-pulse bg-linear-to-tl from-blue-100/40" />
      </div>

      <main className="flex flex-col gap-2 justify-center items-center px-4 py-4 text-center">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <Image
              src="/assets/images/logo/jibonBD-logo.png"
              alt="Jibon BD Logo"
              width={300}
              height={300}
              priority
              className="object-contain w-40 h-40 sm:w-52 sm:h-52 md:w-40 md:h-40"
            />
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-6xl font-bold tracking-tight bg-linear-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent sm:text-7xl md:text-8xl lg:text-9xl animate-gradient bg-size-[200%_auto] pb-2">
              Jibon BD
            </h1>
            <div className="mx-auto w-32 h-1.5 from-transparent via-emerald-500 to-transparent rounded-full bg-linear-to-r opacity-80" />
          </div>

          <div className="mx-auto space-y-4 max-w-2xl">
            <p className="text-2xl font-light tracking-wide text-slate-800 sm:text-3xl md:text-4xl">
              Something extraordinary is coming
            </p>
            <p className="text-base font-light leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              We are crafting a digital experience that will redefine your
              expectations.
              <br className="hidden sm:block" />
              Stay tuned for the grand reveal.
            </p>
          </div>

          <div className="flex gap-3 mt-8">
            <div
              className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}
