"use client";

import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="Pubali Enterprise Logo"
          width={140}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-base font-bold text-slate-900">
          Pubali Enterprise
        </span>
        <span className="text-xs font-medium text-slate-500">
          Heavy Cargo & Barge Logistics
        </span>
      </div>
    </div>
  );
}
