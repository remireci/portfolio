// app/page.tsx (or app/home/page.tsx if following the app directory structure)

import React from 'react';
import Header from './components/Header';
import Head from 'next/head';
import Typewriter from './components/Typewriter';

const getText = async (): Promise<string[]> => {
  const preRenderedText = [
    'javascript, typescript, python',
    'search engine optimization (SEO)',
    'algorithms, data structures',
    'debugging, refactoring',
    'databases, analysis',
    'testing, automation',
    'machine learning',
  ];

  return preRenderedText;
}

const Home = async () => {
  const typedText = await getText();

  return (
    <div className="minimal">
      <div
        style={{ backgroundImage: "url('/images/index.jpg')" }}
        className="hero-full-container background-image-container white-text-container"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="hero-full-wrapper">
                <Typewriter typedText={typedText} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener("DOMContentLoaded", function (event) {
          type();
          movingBackgroundImage();
        });
      `}} />
    </div>
  );
}

export default Home;
