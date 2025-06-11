import React from "react";
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function DirectionsPage() {
  const tabs = [
    { name: '회사연혁', path: '/history' },
    { name: '오시는길', path: '/directions' },
  ];

  return (
    <div className="font-sans">
      <Header />
      {/* Hero or Banner */}
      <section
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/company.png')" }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-5xl font-bold">회사소개</h2>
          <p className="text-white mt-10 text-lg md:text-xl font-medium">
            사람과 환경을 생각하는 자원순환 에너지 전문기업
          </p>
        </div>

        <div className="w-full bg-black/50 flex justify-center px-40">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `text-lg px-8 py-4 transition-colors duration-300 text-center flex-1
                ${isActive ? 'text-gray-800 bg-white' : 'text-gray-200 hover:bg-blue-500'}`
              }
            >
              {tab.name}
            </NavLink>
          ))}
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
        <h2 className="text-4xl font-bold mb-6">오시는길</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mt-10">
          <LeafletMap />
          <div className="text-left mt-10 md:mt-0 space-y-4 text-gray-800 text-lg leading-relaxed">
            <p className="text-2xl font-semibold text-black">
              <span className="text-blue-600 font-bold">주일에코텍</span>은 폐기물 업계를<br/> 선도하는 자원순환 전문 기업입니다.
            </p>
            <hr className="border-t border-gray-300 my-4" />
            <p>
              <strong>주소</strong> <br />
              경남 함안군 대산면 대부로 398
            </p>
            <p>
              <strong>TEL.</strong> 055-585-1272
            </p>
            <p>
              <strong>FAX.</strong> 055-585-1271
            </p>
            <p>
              <strong>E-MAIL.</strong> juil2017@naver.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}