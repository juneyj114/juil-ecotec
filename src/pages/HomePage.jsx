import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LeafletMap from "../components/LeafletMap";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = ["회사소개", "회사연혁", "오시는길", "문의"];

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="font-sans h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="flex flex-col h-screen snap-start">
        {/* Header */}
        <header className="flex justify-between items-center h-16 p-12 border-b shadow-md px-12">
        <div className="flex items-center cursor-pointer">
          {/* 로고 이미지 */}
          <img
            src="/logo.png"
            alt="주일에코텍 로고"
            className="h-10 w-auto mr-3"
          />
          {/* 기존 회사명 링크 */}
          <a href="/" className="text-gray-800 text-4xl font-bold">
            주일에코텍
          </a>
        </div>
          <nav className="hidden md:flex space-x-20">
            {menuItems.map((item) => (
              <a href="#" className="hover:text-blue-600 text-lg" key={item}>
                {item}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu}>
            {/* {menuOpen ? <X /> : <Menu />} */}
          </button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden p-4 border-b">
            {menuItems.map((item) => (
              <a href="#" className="block py-2 border-b" key={item}>
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Hero Section */}
        {/* <section
          className="bg-cover bg-center flex-grow flex items-center justify-center text-white text-3xl font-bold"
          style={{ backgroundImage: 'url(/hero.png)' }}
        >
          People and Environment <br /> 사람과환경
        </section> */}
        <section
          className="relative flex-grow bg-cover text-white flex items-center"
          style={{ backgroundImage: "url('/hero1.jpg')" }} // public 폴더에 background.jpg 저장
        >
          {/* <div className="px-4 md:px-60">
            <h1 className="text-4xl md:text-7xl font-light">People and Environment</h1>
            <h2 className="text-3xl md:text-6xl font-bold mt-6">주일에코텍</h2>
            <p className="mt-10 text-lg md:text-xl font-medium">
            사업장 폐기물을 친환경 에너지로 전환하는 자원순환 전문기업<br />
            </p>
            <button className="mt-10 py-6 px-10 border border-white text-white hover:bg-white hover:text-black transition tracking-wide">
              COMPANY OVERVIEW
            </button>
          </div> */}
          <div className="px-4 md:px-60">
    {/* h2: 왼쪽 → 오른쪽 */}
    <motion.h2
      className="text-3xl md:text-6xl font-bold mt-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      주일에코텍
    </motion.h2>

    {/* p: 왼쪽 → 오른쪽, h2 다음에 살짝 딜레이 */}
    <motion.p
      className="mt-10 text-lg md:text-xl font-medium"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      사업장 폐기물을 친환경 에너지로 전환하는 자원순환 전문기업<br />
    </motion.p>

    {/* 버튼: 아래 → 위로 */}
    <motion.button
      className="mt-10 py-6 px-10 border border-white text-white hover:bg-white hover:text-black tracking-wide"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      COMPANY OVERVIEW
    </motion.button>
  </div>

          {/* Scroll icon */}
          <div className="absolute bottom-6 flex justify-center w-full">
            <div className="animate-bounce cursor-pointer" onClick={handleScrollDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>
      </div>

      {/* Links */}
      {/* <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 my-8 px-40 my-20">
        <div className="w-full h-32 border rounded flex items-center justify-center">
          <img src="/gs_icon.png" alt="강산환경" className="h-full object-contain" />
        </div>
        <div className="w-full h-32 border rounded flex items-center justify-center">
          <img src="/gs_icon.png" alt="남동환경" className="h-full object-contain" />
        </div>
        <div className="w-full h-32 border rounded flex items-center justify-center">
          <img src="/gs_icon.png" alt="남동환경" className="h-full object-contain" />
        </div>
      </section> */}

      {/* Business Area */}
      <section className="grid grid-cols-1 md:grid-cols-3 h-screen snap-start">
        {[
          {
            src: "/area1.jpg",
            title: "폐합성수지·고무 수집운반",
            desc: "폐기물을 수거하여 처리장으로 운반",
          },
          {
            src: "/area2.png",
            title: "파분쇄·열소각",
            desc: "폐기물을 파분쇄한 및 열 소각하여 에너지 추출",
          },
          {
            src: "/area3.jpg",
            title: "신재생 에너지 변환",
            desc: "신재생 에너지로 변환하여 납품",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-screen overflow-hidden"
          >
            {/* 배경 이미지 */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* 제목 + 설명 + 버튼 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl font-bold transition-all duration-500 text-center px-4">
              {/* 제목 */}
              <span className="text-4xl transition-colors duration-500 group-hover:text-blue-400">
                {item.title}
              </span>

              {/* 설명 */}
              <p className="text-base font-normal mt-5 transition-opacity duration-500 group-hover:opacity-90 text-white">
                {item.desc}
              </p>

              {/* LEARN MORE 버튼 */}
              <div className="relative mt-10 h-16 w-64 overflow-hidden">
                <button
                  className="text-lg absolute inset-0 opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-500 ease-out border border-white text-white bg-transparent py-6 flex items-center justify-center"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>


      {/* Directions */}
      <section className="text-center mt-16 snap-start">
        <h2 className="text-5xl font-bold">DIRECTIONS</h2>
        <p className="text-gray-600 my-5 text-lg">
          <span className="text-blue-500 font-bold">주일에코텍</span>은 사업장 폐기물을 <span className="text-green-500 font-bold">친환경 에너지</span>로 바꾸는 지속가능한 자원순환 파트너입니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 my-20">
          <LeafletMap />
          <div className="text-left space-y-4 text-gray-800 text-[17px] leading-relaxed">
            <p className="text-2xl font-medium text-black leading-relaxed">
              <span className="text-blue-600 font-bold">주일에코텍</span>은 폐기물업체를<br/> 선도하는 기업입니다.
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
              <strong>E-MAIL.</strong> juli2017@naver.com
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-sm px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <p>
                상호명 : (주)주일에코텍&nbsp;&nbsp;&nbsp;
                대표자 : 박준규&nbsp;&nbsp;&nbsp;
                사업자등록번호 : 784-87-00507&nbsp;&nbsp;&nbsp;
                전화 : 055-585-1272&nbsp;&nbsp;&nbsp;
                팩스 : 055-585-1271
              </p>
              <p className="mt-1">
                주소 : 경남 함안군 대산면 대부로 398&nbsp;&nbsp;&nbsp;
                이메일 : juli2017@naver.com
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Copyright ⓒ (주)주일에코텍. All rights reserved.
            </div>
          </div>
        </footer>
      </section>

      
    </div>
  );
}