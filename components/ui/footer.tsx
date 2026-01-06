"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#2c3e50] text-gray-300 pt-12 pb-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Ayursutra */}
          <div className="col-span-2 lg:col-span-1">
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2">
                 <span className="text-xl font-bold text-white">AyurSutra</span>
               </div>
               <p className="text-xs text-gray-400">
                 Copyright © {new Date().getFullYear()} AyurSutra. 
                 <br />All rights reserved.
               </p>
             </div>
          </div>

          {/* For Patients */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">For Patients</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Search for Vaidyas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Search for Clinics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Search for Hospitals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Book Panckhkarma</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Read Health Articles</Link></li>
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">For Doctors</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">AyurSutra Profile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">For Clinics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ray Tab</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AyurSutra Pro</Link></li>
            </ul>
          </div>

          {/* For Hospitals */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">For Hospitals</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Insta by AyurSutra</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Qikwell by AyurSutra</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AyurSutra Profile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AyurSutra Reach</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">More</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Help</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Developers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Healthcare Directory</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Social</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook className="w-3 h-3"/> Facebook</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter className="w-3 h-3"/> Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-3 h-3"/> LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Youtube className="w-3 h-3"/> Youtube</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Github className="w-3 h-3"/> GitHub</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
