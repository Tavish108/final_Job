"use client";

import React from "react";
import Link from "next/link";

const pdfFiles = [
  {
    id: 1,
    title: "Android Developer Resume",
    fileName: "android-developer-1559034496.pdf",
  },
  { id: 2, title: "Data Scientist Resume", fileName: "data-scientist.pdf" },
  { id: 3, title: "UI/UX Resume", fileName: "UIUX_Resume1.pdf" },
  { id: 4, title: "Data Scientist 2", fileName: "Data_Scientist2.pdf" },
  {
    id: 5,
    title: "Financial Anaylyst Resume",
    fileName: "financialanalyst .pdf",
  },
  { id: 6, title: "Graphic_designer", fileName: "Graphic_designer.pdf" },
  { id: 7, title: "IOS Resume", fileName: "IOS1.pdf" },
];

const page = () => {
  return (
    <div className="container">
      <h1 className="title">Sample Resumes</h1>
      <p className="description">
        Browse and download professional sample resumes tailored for various job
        roles.
      </p>

      <div className="resume-list">
        {pdfFiles.map((resume) => (
          <div key={resume.id} className="resume-card">
            <h2>{resume.title}</h2>
            <Link href={`/${resume.fileName}`} legacyBehavior>
              <a download className="download-button">
                Download
              </a>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .resume-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .resume-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .resume-card h2 {
          margin-bottom: 0.5rem;
        }

        .download-button {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .download-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default page;
