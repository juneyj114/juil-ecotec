import React from "react";
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function ContactPage() {

  return (
    <div className="font-sans">
      <Header />
      {/* Hero or Banner */}
      <section
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/company.png')" }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-5xl font-bold">문의</h2>
          <p className="text-white mt-10 text-lg md:text-xl font-medium">
            사람과 환경을 생각하는 자원순환 에너지 전문기업
          </p>
        </div>
      </section>

      {/* Directions Content */}
      <section className="text-center py-16 px-6 md:px-20">
        {/* 로고 이미지 */}
        <img
          src="/logo2.png"
          alt="로고 아이콘"
          className="mx-auto mb-4 w-14"
        />
        <h2 className="text-4xl font-bold mb-6">문의</h2>
        <p className="text-xl">아직 준비 중입니다.</p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mt-10">
        </div>  
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}