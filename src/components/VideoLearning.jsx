import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './videoLearning.css'

export default function VideoLearning({ videoUrl, onBack }) {
  const [videoId, setVideoId] = useState('')
  const [activeTab, setActiveTab] = useState('chapters')
  const [activeToolTab, setActiveToolTab] = useState('chat')
  const [autoScroll, setAutoScroll] = useState(true)
  const [videoTitle, setVideoTitle] = useState('Sorting - Part 1 | Selection Sort, Bubble Sort, Insertion Sort | Strivers A2Z DSA Course')

  useEffect(() => {
    // Extract video ID from YouTube URL
    const extractVideoId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      return (match && match[2].length === 11) ? match[2] : null
    }

    if (videoUrl) {
      const id = extractVideoId(videoUrl)
      setVideoId(id)
    }
  }, [videoUrl])

  const chapters = [
    { time: '00:03', title: 'Introduction to Sorting Algorithms' },
    { time: '02:15', title: 'Selection Sort Explanation' },
    { time: '08:45', title: 'Bubble Sort Algorithm' },
    { time: '15:30', title: 'Insertion Sort Deep Dive' },
    { time: '22:10', title: 'Time Complexity Analysis' },
    { time: '28:45', title: 'Practical Examples' },
    { time: '35:20', title: 'Code Implementation' },
    { time: '42:10', title: 'Space Complexity Discussion' },
  ]

  const transcriptSegments = [
    { time: '00:03', text: 'Welcome to this comprehensive guide on sorting algorithms. In this video, we will explore three fundamental sorting techniques that every programmer should know.' },
    { time: '00:15', text: 'Today we will cover Selection Sort, Bubble Sort, and Insertion Sort. These are the building blocks of understanding more complex algorithms.' },
    { time: '00:30', text: "Let's start with Selection Sort, one of the simplest sorting algorithms. The basic idea is to find the minimum element and place it at the beginning." },
    { time: '02:15', text: 'Selection Sort works by dividing the array into sorted and unsorted parts. We repeatedly select the smallest element from the unsorted part.' },
    { time: '08:45', text: 'Moving on to Bubble Sort, this algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.' },
  ]

  return (
    <div className="video-learning-container">
      {/* Top Header Bar */}
      <header className="video-learning-header">
        <div className="header-left">
          <button className="hamburger-btn" onClick={onBack} aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          
          <Link to="/" className="header-logo">
            <img src="/logo.png" alt="MindSync" />
          </Link>
          
          <div className="header-title">
            <span className="title-text">{videoTitle}</span>
          </div>
        </div>

        <div className="header-actions">
          <button className="upgrade-btn-header">
            <span>Upgrade</span>
          </button>
          <button className="share-btn-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Interactive Tabs Below Header */}
      <div className="tool-tabs-container">
        <div className="tool-tabs">
          <button 
            className={`tool-tab ${activeToolTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('chat')}
          >
            <span className="tab-indicator"></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat
          </button>
          <button 
            className={`tool-tab ${activeToolTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('flashcards')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Flashcards
          </button>
          <button 
            className={`tool-tab ${activeToolTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('quizzes')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Quizzes
          </button>
          <button 
            className={`tool-tab ${activeToolTab === 'podcast' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('podcast')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
            Podcast
          </button>
          <button 
            className={`tool-tab ${activeToolTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('summary')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Summary
          </button>
          <button 
            className={`tool-tab ${activeToolTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveToolTab('notes')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Notes
          </button>
          <button className="tool-tab-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button className="tool-tab-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="video-learning-main">
        {/* Left: Video Player */}
        <div className="video-container">
          <div className="video-player-wrapper">
            <div className="video-player">
              {videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="play-button-large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                  </div>
                  <div className="video-branding">
                    <span>STRIVER'S A2Z DSA COURSE</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Player Controls */}
            <div className="video-player-controls">
              <button className="watch-youtube-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </button>
              
              <div className="video-controls-right">
                <button className="video-control-btn" title="Watch Later">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </button>
                <button className="video-control-btn" title="Share">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Chapters/Transcripts Section Below Video */}
          <div className="content-tabs-section">
            {/* Tab Buttons */}
            <div className="tabs-header">
              <div className="tabs-buttons">
                <button 
                  className={`tab-button ${activeTab === 'chapters' ? 'active' : ''}`}
                  onClick={() => setActiveTab('chapters')}
                >
                  <span className="tab-dot"></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Chapters
                </button>
                <button 
                  className={`tab-button ${activeTab === 'transcripts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('transcripts')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Transcripts
                </button>
              </div>
              
              {/* Auto Scroll Toggle */}
              <label className="auto-scroll-toggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="17 11 12 6 7 11" />
                  <polyline points="17 18 12 13 7 18" />
                </svg>
                Auto Scroll
                <input 
                  type="checkbox" 
                  checked={autoScroll} 
                  onChange={(e) => setAutoScroll(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            {/* Tab Content */}
            <div className="tabs-content">
              {activeTab === 'chapters' && (
                <div className="chapters-list">
                  <div className="current-chapter-indicator">
                    <span className="current-time">00:03</span>
                    <span className="current-title">Introduction to Sorting Algorithms</span>
                  </div>
                  {chapters.map((chapter, index) => (
                    <button key={index} className="chapter-item">
                      <span className="chapter-time">{chapter.time}</span>
                      <span className="chapter-title">{chapter.title}</span>
                      <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" opacity="0.2" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'transcripts' && (
                <div className="transcripts-list">
                  <div className="current-chapter-indicator">
                    <span className="current-time">00:03</span>
                    <span className="current-title">Introduction to Sorting Algorithms</span>
                  </div>
                  {transcriptSegments.map((segment, index) => (
                    <div key={index} className="transcript-item">
                      <span className="transcript-time">{segment.time}</span>
                      <p className="transcript-text">{segment.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: AI Tutor Sidebar */}
        <aside className="ai-tutor-panel">
          <div className="ai-tutor-header">
            <div className="ai-tutor-header-top">
              <div className="ai-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2>Learn with the AI Tutor</h2>
            </div>
            <div className="ai-tutor-header-actions">
              <button 
                className="ai-tutor-action-btn" 
                title="New Chat"
                onClick={() => console.log('New chat')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <button 
                className="ai-tutor-action-btn" 
                title="History Search"
                onClick={() => console.log('History search')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </button>
            </div>
          </div>

          <div className="tutor-modes-grid">
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Quiz
            </button>
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m6.24 6.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m6.24-6.24l4.24-4.24" />
              </svg>
              Mind Map
            </button>
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              </svg>
              Voice Mode
            </button>
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Flashcards
            </button>
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search
            </button>
            <button className="tutor-mode-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Timeline
            </button>
          </div>

          <div className="chat-section">
            <div className="chat-input-wrapper">
              <div className="chat-input-left">
                <button className="context-dropdown">
                  Auto
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <button className="add-context-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  @ Add Context
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Learn anything" 
                className="chat-input"
              />
              <div className="chat-input-right">
                <button className="chat-attach-btn" title="Attach file">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                <button className="chat-mic-btn" title="Voice input">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                </button>
                <button className="chat-voice-btn">
                  Voice
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
