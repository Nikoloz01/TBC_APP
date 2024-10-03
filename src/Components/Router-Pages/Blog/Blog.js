import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="main-title">
        <h1>What's new in the tech world for 2024
        </h1>
      </div>
      <div className="grid-container">
        <div className="grid-card">
          <h2>Artificial Intelligence</h2>
          <p>AI continues to advance, with more sophisticated generative models enhancing creativity in fields like art, writing, and music. AI-driven tools are also improving productivity and automation across industries.</p>
        </div>
        <div className="grid-card">
          <h2>Quantum Computing</h2>
          <p>Progress in quantum computing is accelerating, with companies exploring practical applications in cryptography, drug discovery, and complex problem-solving..</p>
        </div>

        <div className="grid-card">
          <h2>5G and Beyond</h2>
          <p>The rollout of 5G is expanding, enabling faster, more reliable internet connections. Research into 6G technology is also underway, promising even greater speeds and lower latency.</p>
        </div>

        <div className="grid-card">
          <h2>Sustainability Tech</h2>
          <p> There's a growing focus on green technologies, including energy-efficient computing, carbon capture, and sustainable supply chains. Companies are prioritizing eco-friendly practices.</p>
        </div>


        <div className="grid-card">
          <h2>Augmented and Virtual Reality:</h2>
          <p>AR and VR technologies are becoming more mainstream, with applications in gaming, education, and remote work. New hardware, like lightweight headsets, is making these experiences more accessible.</p>
        </div>

        <div className="grid-card">
          <h2>Cybersecurity Innovations</h2>
          <p>As cyber threats evolve, companies are investing in advanced cybersecurity measures, including AI-driven threat detection and zero-trust architectures.</p>
        </div>

        <div className="grid-card">
          <h2>Blockchain and Decentralized Finance (DeFi)</h2>
          <p> Blockchain technology continues to grow, with innovations in DeFi, NFTs, and smart contracts, pushing the boundaries of finance and digital ownership.  </p>
        </div>
        <div className="grid-card">
          <h2>Robotics and Automation:</h2>
          <p>Advances in robotics are leading to greater automation in manufacturing, logistics, and even healthcare, enhancing efficiency and safety.</p>
        </div>
        <div className="grid-card">
          <h2>Edge Computing</h2>
          <p> As IoT devices proliferate, edge computing is becoming more important, allowing data processing closer to the source and reducing latency.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog;
