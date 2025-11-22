"use client";

import { Construction } from "lucide-react";

export default function Home() {
  return (
    <div className="flex overflow-hidden relative justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="overflow-hidden absolute inset-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full to-transparent rounded-full blur-3xl animate-pulse bg-linear-to-br from-emerald-500/20" />
        <div className="absolute -right-1/2 -bottom-1/2 w-full h-full to-transparent rounded-full blur-3xl delay-1000 animate-pulse bg-linear-to-tl from-blue-500/20" />
      </div>

      <main className="flex relative z-10 flex-col gap-12 justify-center items-center px-4 py-16 text-center">
        <div className="flex flex-col gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 from-emerald-400 to-blue-500 rounded-full opacity-50 blur-2xl animate-pulse bg-linear-to-r" />
            <div className="relative p-8 rounded-full border shadow-2xl backdrop-blur-sm bg-white/10 border-white/20">
              <Construction className="w-16 h-16 text-emerald-400 animate-bounce" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight bg-linear-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent sm:text-7xl md:text-8xl lg:text-9xl animate-gradient bg-size-[200%_auto]">
              Jibon BD
            </h1>
            <div className="mx-auto w-32 h-1 from-transparent via-emerald-400 to-transparent rounded-full bg-linear-to-r" />
          </div>

          <div className="space-y-3">
            <p className="text-xl font-light text-slate-300 sm:text-2xl md:text-3xl">
              This website is under construction
            </p>
            <p className="text-sm text-slate-400 sm:text-base md:text-lg">
              We&apos;re working hard to bring you something amazing
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-blue-400 rounded-full delay-200 animate-pulse" />
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-400" />
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
