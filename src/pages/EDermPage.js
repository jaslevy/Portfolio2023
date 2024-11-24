import React from 'react';
import '../styles/EDermPage.css';
import EDerm from '../images/EDermLogo.png'; // Make sure this path matches your image location

const EDermPage = () => {
  return (
    <div className="ederm-page">
      <div className="project-header">
        <h1>AWS Serverless Architecture for Integrated Dermatology</h1>
        <img src={EDerm} alt="E-Dermatology Project" className="header-image" />
      </div>

      <div className="project-content">
        <section className="project-overview">
          <h2>Project Overview</h2>
          <p>
            As part of my graduate coursework, I designed an AWS serverless architecture for 
            Integrated Dermatology to improve post-visit bill estimation. The system predicts 
            837 claim amounts from 835 remittance data to estimate patient out-of-pocket costs 
            when insurance deductibles are unmet.
          </p>
        </section>

        <section className="architecture-diagram">
          <h2>System Architecture</h2>
          <div className="miro-embed">
            <iframe 
              title="Miro Embed"
              width="768" 
              height="432" 
              src="https://miro.com/app/embed/uXjVLA4-1GU=/?pres=1&frameId=3458764608157468031&embedId=136021202833" 
              frameBorder="0" 
              scrolling="no" 
              allow="fullscreen; clipboard-read; clipboard-write" 
              allowFullScreen
            />
          </div>
        </section>

        <section className="key-features">
          <h2>Key Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Practice Data Management</h3>
              <p>The system integrates with the practice's EHR to ingest and preprocess patient visit data, including CPT codes, billed amounts, and insurance details, via automated pipelines.</p>
            </div>
            
            <div className="feature-item">
              <h3>Database and Vector Store</h3>
              <p>MongoDB Atlas serves as the primary database and vector store, enabling efficient storage and semantic search across structured patient data and embeddings.</p>
            </div>
            
            <div className="feature-item">
              <h3>Embedding and Vector Search</h3>
              <p>Gemini embeddings power semantic searches and similarity-based retrieval for CPT codes and historical billing data, enhancing query precision and recommendations.</p>
            </div>
            
            <div className="feature-item">
              <h3>Patient Estimate Workflow</h3>
              <p>AWS Lambda computes personalized patient billing estimates by combining historical billing data and vector search results, then sends the estimates via Amazon SES.</p>
            </div>
            
            <div className="feature-item">
              <h3>Chatbot Interface</h3>
              <p>A secure Streamlit-based chatbot provides patients with access to billing information and personalized estimates, leveraging LangChain for retrieval-augmented generation.</p>
            </div>
            
            <div className="feature-item">
              <h3>Security and Compliance</h3>
              <p>The system ensures data privacy with anonymized Patient IDs, encrypted API calls, and storage of sensitive information only within the practice's infrastructure.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EDermPage;
