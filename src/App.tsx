/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper, 
  Search, 
  Clock, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RefreshCcw, 
  ChevronRight,
  AlertCircle,
  Keyboard
} from 'lucide-react';
import { EXHIBITS, RANKS } from './constants';
import { GameState, Difficulty, GameMode, Origin, Exhibit, Rank } from './types';

// --- Components ---

const Masthead = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="w-full border-b-4 border-ink pb-6 mb-12">
      <div className="flex justify-between items-end text-xs font-mono uppercase tracking-widest mb-4">
        <span>Late Edition</span>
        <span>Human or Not Press Bureau</span>
        <span>{today}</span>
      </div>
      <div className="text-center py-4 border-y-2 border-ink">
        <h1 className="text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none">
          Human or Not
        </h1>
        <p className="mt-2 text-sm md:text-base italic font-serif">
          “A special newspaper game about spotting manufactured culture”
        </p>
      </div>
      <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest mt-4">
        <span>Vol. 1, No. 15</span>
        <span className="max-w-[200px] text-right">Special Examination: Pre-AI Truth vs Machine Imitation</span>
        <span>Up to 15 exhibits</span>
      </div>
    </header>
  );
};

const Card = ({ children, className = "", onClick, active = false }: { children: React.ReactNode, className?: string, onClick?: () => void, active?: boolean, key?: React.Key }) => (
  <div 
    onClick={onClick}
    className={`
      relative p-6 border-2 transition-all duration-300 cursor-pointer overflow-hidden
      ${active ? 'border-news-red bg-news-red/5' : 'border-ink/20 hover:border-ink'}
      ${className}
    `}
  >
    {active && (
      <div className="absolute top-0 right-0 w-8 h-8 bg-news-red text-white flex items-center justify-center">
        <CheckCircle2 size={16} />
      </div>
    )}
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = "" }: { children: React.ReactNode, onClick: () => void, variant?: 'primary' | 'secondary', className?: string }) => (
  <button
    onClick={onClick}
    className={`
      px-8 py-4 font-serif font-bold text-xl uppercase tracking-wider transition-all duration-300
      ${variant === 'primary' ? 'bg-ink text-paper hover:bg-news-red' : 'border-2 border-ink text-ink hover:bg-ink hover:text-paper'}
      ${className}
    `}
  >
    {children}
  </button>
);

// --- Main App ---

export default function App() {
  const [state, setState] = useState<GameState>({
    screen: 'landing',
    difficulty: 'Medium',
    mode: 'Standard',
    currentExhibitIndex: 0,
    score: 0,
    correctCount: 0,
    history: [],
    timeLeft: 30,
    isGameOver: false,
  });

  const [currentGuess, setCurrentGuess] = useState<Origin | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Filter exhibits based on difficulty
  const filteredExhibits = useMemo(() => {
    return EXHIBITS.filter(e => e.difficulty === state.difficulty);
  }, [state.difficulty]);

  const currentExhibit = filteredExhibits[state.currentExhibitIndex];

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.screen === 'playing' && state.mode === 'Timed' && !showFeedback) {
      timer = setInterval(() => {
        setState(prev => {
          if (prev.timeLeft <= 0) {
            clearInterval(timer);
            handleGuess(null); // Timeout counts as wrong or skipped
            return prev;
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.screen, state.mode, showFeedback]);

  const handleStart = () => {
    setState(prev => ({
      ...prev,
      screen: 'playing',
      currentExhibitIndex: 0,
      score: 0,
      correctCount: 0,
      history: [],
      timeLeft: state.mode === 'Timed' ? 15 : 0,
      isGameOver: false,
    }));
  };

  const handleGuess = (guess: Origin | null) => {
    if (showFeedback) return;
    
    const isCorrect = guess === currentExhibit.origin;
    const points = isCorrect ? (state.mode === 'Timed' ? 100 + state.timeLeft * 5 : 100) : 0;

    setCurrentGuess(guess);
    setShowFeedback(true);
    
    setState(prev => ({
      ...prev,
      score: prev.score + points,
      correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
      history: [...prev.history, { exhibitId: currentExhibit.id, guess: guess as Origin, correct: isCorrect }]
    }));
  };

  const handleNext = () => {
    setShowFeedback(false);
    setCurrentGuess(null);
    
    if (state.currentExhibitIndex >= filteredExhibits.length - 1) {
      setState(prev => ({ ...prev, screen: 'results', isGameOver: true }));
    } else {
      setState(prev => ({ 
        ...prev, 
        currentExhibitIndex: prev.currentExhibitIndex + 1,
        timeLeft: state.mode === 'Timed' ? 15 : 0
      }));
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (state.screen === 'playing' && !showFeedback) {
        if (e.key.toLowerCase() === 'a') handleGuess('ai');
        if (e.key.toLowerCase() === 'h') handleGuess('human');
      } else if (showFeedback && e.key === 'Enter') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.screen, showFeedback, currentExhibit]);

  const getRank = (score: number): Rank => {
    return [...RANKS].reverse().find(r => score >= r.minScore) || RANKS[0];
  };

  return (
    <div className="min-h-screen paper-texture px-4 py-8 md:px-12 md:py-12 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        
        {/* LANDING SCREEN */}
        {state.screen === 'landing' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <Masthead />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <section className="space-y-4">
                  <h2 className="text-4xl font-serif font-bold uppercase border-b-2 border-ink inline-block pb-1">
                    Front Page Investigation
                  </h2>
                  <h3 className="text-2xl font-serif italic text-news-red">
                    Can You Read the Difference?
                  </h3>
                  <p className="text-lg leading-relaxed text-ink/80">
                    In an era of synthetic culture, the ability to distinguish between human creation and machine imitation is the ultimate investigative skill. 
                    Some exhibits in this collection are authentic pre-AI artifacts; others are sophisticated machine-made counterfeits. 
                    Your task is to examine the evidence and deliver a verdict.
                  </p>
                </section>

                <div className="bg-ink text-paper p-8 space-y-6">
                  <h4 className="text-xl font-mono uppercase tracking-widest border-b border-paper/30 pb-2">
                    Case Brief: Protocol 101
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold uppercase text-xs text-news-red mb-1">Goal</h5>
                      <p className="text-sm">Correctly identify the origin of 4-15 exhibits.</p>
                    </div>
                    <div>
                      <h5 className="font-bold uppercase text-xs text-news-red mb-1">Format</h5>
                      <p className="text-sm">Examine text snippets and visual artifacts.</p>
                    </div>
                    <div>
                      <h5 className="font-bold uppercase text-xs text-news-red mb-1">Scoring</h5>
                      <p className="text-sm">Base points per correct verdict. Bonus for speed in Timed mode.</p>
                    </div>
                    <div>
                      <h5 className="font-bold uppercase text-xs text-news-red mb-1">Tip</h5>
                      <div className="flex items-center gap-2 text-sm">
                        <Keyboard size={14} />
                        <span>A: AI | H: Human | Enter: Next</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="space-y-8 border-l-2 border-ink/10 pl-8">
                <div className="space-y-4">
                  <h4 className="font-mono uppercase text-xs font-bold tracking-widest text-news-blue">
                    Select Difficulty
                  </h4>
                  <div className="space-y-3">
                    {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
                      <Card 
                        key={d} 
                        active={state.difficulty === d}
                        onClick={() => setState(prev => ({ ...prev, difficulty: d }))}
                        className="p-4"
                      >
                        <h5 className="font-serif font-bold">{d}</h5>
                        <p className="text-xs text-ink/60 mt-1">
                          {d === 'Easy' && "Clear tells, obvious fakes, lighter warm-up."}
                          {d === 'Medium' && "Balanced investigation, believable AI vs ordinary human work."}
                          {d === 'Hard' && "Ambiguous evidence, deceptive AI, suspiciously synthetic real content."}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono uppercase text-xs font-bold tracking-widest text-news-blue">
                    Select Mode
                  </h4>
                  <div className="space-y-3">
                    {(['Standard', 'Timed'] as GameMode[]).map(m => (
                      <Card 
                        key={m} 
                        active={state.mode === m}
                        onClick={() => setState(prev => ({ ...prev, mode: m }))}
                        className="p-4"
                      >
                        <div className="flex items-center gap-2">
                          {m === 'Timed' ? <Clock size={14} /> : <Target size={14} />}
                          <h5 className="font-serif font-bold">{m}</h5>
                        </div>
                        <p className="text-xs text-ink/60 mt-1">
                          {m === 'Standard' && "Careful reading, no countdown pressure."}
                          {m === 'Timed' && "Live countdown pushing toward instinctive calls."}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-ink">
                  <p className="text-xs font-mono uppercase mb-4">
                    Current Assignment: <br/>
                    <span className="text-news-red font-bold">{state.difficulty} Edition — {state.mode} Mode</span>
                  </p>
                  <Button onClick={handleStart} className="w-full">
                    Begin Investigation
                  </Button>
                </div>
              </aside>
            </div>
          </motion.div>
        )}

        {/* GAMEPLAY SCREEN */}
        {state.screen === 'playing' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center border-b-2 border-ink pb-4 mb-8">
              <div className="flex items-center gap-6">
                <div className="text-xs font-mono uppercase">
                  Exhibit <br/>
                  <span className="text-2xl font-serif font-bold">
                    {state.currentExhibitIndex + 1} / {filteredExhibits.length}
                  </span>
                </div>
                <div className="text-xs font-mono uppercase">
                  Score <br/>
                  <span className="text-2xl font-serif font-bold text-news-red">
                    {state.score}
                  </span>
                </div>
              </div>
              
              {state.mode === 'Timed' && (
                <div className={`text-center px-6 py-2 border-2 ${state.timeLeft < 5 ? 'border-news-red animate-pulse' : 'border-ink'}`}>
                  <div className="text-[10px] font-mono uppercase">Time Remaining</div>
                  <div className={`text-3xl font-serif font-bold ${state.timeLeft < 5 ? 'text-news-red' : ''}`}>
                    {state.timeLeft}s
                  </div>
                </div>
              )}

              <div className="text-right">
                <div className="text-xs font-mono uppercase">Status</div>
                <div className="text-sm font-serif italic">
                  {state.difficulty} Investigation
                </div>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExhibit.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="bg-white p-1 shadow-sm border border-ink/10">
                    <div className="border-4 border-ink p-8 md:p-12 relative overflow-hidden">
                      {/* Decorative corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ink/20" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ink/20" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ink/20" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ink/20" />

                      <div className="max-w-2xl mx-auto space-y-6">
                        <div className="text-center space-y-2 mb-8">
                          <span className="text-xs font-mono uppercase tracking-[0.2em] text-news-blue">Evidence File #{currentExhibit.id}</span>
                          <h4 className="text-3xl font-serif font-bold leading-tight">{currentExhibit.headline}</h4>
                        </div>

                        {currentExhibit.type === 'text' ? (
                          <div className="text-xl md:text-2xl font-serif leading-relaxed italic text-ink/90 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                            {currentExhibit.content}
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <img 
                              src={currentExhibit.content} 
                              alt="Evidence" 
                              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border-2 border-ink"
                              referrerPolicy="no-referrer"
                            />
                            <p className="text-xs font-mono uppercase text-center text-ink/60 italic">
                              [ Photographic Artifact — Digital Scan ]
                            </p>
                          </div>
                        )}

                        <div className="pt-8 mt-8 border-t border-ink/10 flex justify-between items-end">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase text-news-red block">Desk Note:</span>
                            <p className="text-sm font-serif italic text-ink/70">{currentExhibit.deskNote}</p>
                          </div>
                          <div className="text-[10px] font-mono uppercase text-ink/40">
                            Ref: {state.difficulty.toLowerCase()}_pool_v1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!showFeedback ? (
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <button
                        onClick={() => handleGuess('ai')}
                        className="group relative h-24 border-2 border-ink hover:bg-ink hover:text-paper transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
                      >
                        <span className="text-xs font-mono uppercase tracking-widest mb-1 group-hover:text-news-red">Verdict A</span>
                        <span className="text-2xl font-serif font-bold uppercase">AI-Generated</span>
                        <div className="absolute bottom-2 right-2 text-[10px] font-mono opacity-30 group-hover:opacity-100">Press [A]</div>
                      </button>
                      <button
                        onClick={() => handleGuess('human')}
                        className="group relative h-24 border-2 border-ink hover:bg-ink hover:text-paper transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
                      >
                        <span className="text-xs font-mono uppercase tracking-widest mb-1 group-hover:text-news-red">Verdict B</span>
                        <span className="text-2xl font-serif font-bold uppercase">Human-Made</span>
                        <div className="absolute bottom-2 right-2 text-[10px] font-mono opacity-30 group-hover:opacity-100">Press [H]</div>
                      </button>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-ink text-paper p-8 space-y-6 relative overflow-hidden"
                    >
                      {/* Background watermark */}
                      <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12">
                        {currentGuess === currentExhibit.origin ? <CheckCircle2 size={160} /> : <XCircle size={160} />}
                      </div>

                      <div className="flex items-start justify-between relative z-10">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            {currentGuess === currentExhibit.origin ? (
                              <div className="bg-green-600 text-white px-3 py-1 text-xs font-mono uppercase font-bold">Correct Verdict</div>
                            ) : (
                              <div className="bg-news-red text-white px-3 py-1 text-xs font-mono uppercase font-bold">Incorrect Verdict</div>
                            )}
                            <span className="text-sm font-mono uppercase text-paper/60">Verification Result</span>
                          </div>
                          <h4 className="text-3xl font-serif font-bold">
                            This exhibit was <span className="text-news-red uppercase">{currentExhibit.origin === 'ai' ? 'AI-Generated' : 'Human-Made'}</span>
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono uppercase text-paper/40 block">Source</span>
                          <span className="text-sm font-serif italic">{currentExhibit.source}</span>
                        </div>
                      </div>

                      <div className="border-t border-paper/20 pt-4 relative z-10">
                        <p className="text-lg font-serif leading-relaxed text-paper/90">
                          <span className="font-bold text-news-red mr-2">Editorial Note:</span>
                          {currentExhibit.hint}
                        </p>
                      </div>

                      <div className="flex justify-end pt-2 relative z-10">
                        <button 
                          onClick={handleNext}
                          className="flex items-center gap-2 bg-paper text-ink px-6 py-3 font-serif font-bold uppercase hover:bg-news-red hover:text-paper transition-all group"
                        >
                          Next Exhibit <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* RESULTS SCREEN */}
        {state.screen === 'results' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4 border-b-4 border-ink pb-8">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-news-red">Final Investigation Report</div>
              <h2 className="text-6xl md:text-7xl font-serif font-black uppercase tracking-tighter">
                {getRank(state.score).title}
              </h2>
              <p className="text-xl font-serif italic text-ink/70 max-w-xl mx-auto">
                "{getRank(state.score).description}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-news-blue font-bold">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-ink/10 pb-1">
                      <span className="font-serif">Total Score</span>
                      <span className="text-3xl font-serif font-bold text-news-red">{state.score}</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-ink/10 pb-1">
                      <span className="font-serif">Correct Verdicts</span>
                      <span className="text-2xl font-serif font-bold">{state.correctCount} / {filteredExhibits.length}</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-ink/10 pb-1">
                      <span className="font-serif">Accuracy Rate</span>
                      <span className="text-2xl font-serif font-bold">{Math.round((state.correctCount / filteredExhibits.length) * 100)}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-news-blue font-bold">Investigation Scope</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-ink/10">
                      <div className="text-[10px] font-mono uppercase text-ink/40">Difficulty</div>
                      <div className="font-serif font-bold">{state.difficulty}</div>
                    </div>
                    <div className="p-4 border-2 border-ink/10">
                      <div className="text-[10px] font-mono uppercase text-ink/40">Mode</div>
                      <div className="font-serif font-bold">{state.mode}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border-2 border-ink shadow-xl space-y-6">
                <h4 className="text-xl font-serif font-bold border-b-2 border-ink pb-2">Statistical Breakdown</h4>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono uppercase">
                      <span>Text Exhibits</span>
                      <span>{state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'text' && h.correct).length} Correct</span>
                    </div>
                    <div className="h-2 bg-ink/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'text' && h.correct).length / state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'text').length) * 100}%` }}
                        className="h-full bg-ink"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono uppercase">
                      <span>Image Exhibits</span>
                      <span>{state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'image' && h.correct).length} Correct</span>
                    </div>
                    <div className="h-2 bg-ink/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'image' && h.correct).length / state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.type === 'image').length) * 100}%` }}
                        className="h-full bg-ink"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono uppercase">
                      <span>AI Spotted</span>
                      <span>{state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'ai' && h.correct).length} Correct</span>
                    </div>
                    <div className="h-2 bg-ink/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'ai' && h.correct).length / state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'ai').length) * 100}%` }}
                        className="h-full bg-news-red"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono uppercase">
                      <span>Humans Cleared</span>
                      <span>{state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'human' && h.correct).length} Correct</span>
                    </div>
                    <div className="h-2 bg-ink/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'human' && h.correct).length / state.history.filter(h => filteredExhibits.find(e => e.id === h.exhibitId)?.origin === 'human').length) * 100}%` }}
                        className="h-full bg-news-blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button onClick={() => setState(prev => ({ ...prev, screen: 'landing' }))} variant="secondary" className="flex items-center gap-2">
                <RefreshCcw size={20} /> New Investigation
              </Button>
              <Button onClick={handleStart} className="flex items-center gap-2">
                <ArrowRight size={20} /> Replay Current Pool
              </Button>
            </div>
          </motion.div>
        )}

      </div>

      {/* Footer */}
      <footer className="mt-24 w-full max-w-5xl border-t border-ink/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-ink/40">
        <div className="flex items-center gap-2">
          <Newspaper size={14} />
          <span>Established 2024 — Human or Not Press Bureau</span>
        </div>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Editorial Standards</span>
        </div>
        <div>
          &copy; 2026 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
