'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Check, ChevronDown } from 'lucide-react';

// --- Composants de la Page d'Accueil ---

const Header = ({ onStartAudit, showPricing = false }) => (
    <header className="p-6 w-full">
        <div className="container mx-auto flex justify-between items-center">
            <span className="font-mono text-sm font-semibold">SYMI</span>
            <div className="flex items-center space-x-4">
                <a 
                    href="#pricing" 
                    className={`btn header-pricing ${showPricing ? 'visible' : 'hidden'} hidden md:inline-flex`}
                >
                    Pricing
                </a>
                <button onClick={onStartAudit} className="btn btn-primary">Start Audit</button>
            </div>
        </div>
    </header>
);

const HeroSection = ({ onStartAudit }) => (
    <section className="w-full text-center py-20">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-800">
                Stop Guessing. Start Systemizing.
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-600">
                The intelligent layer that transforms your goals and strategies into systems that think, act, and evolve with you.
            </p>
            <div className="mt-8">
                <button onClick={onStartAudit} className="btn btn-primary text-lg px-8 py-4">
                    Start Your Free Audit
                </button>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section id="pricing" className="w-full py-20">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Choose Your Execution Path</h2>
            <p className="text-lg text-gray-600">
                From personal transformation to scaling your practice—your strategy becomes a living system.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <div className="price-card">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">SYMI – Business Twin Starter</h3>
                    <p className="text-gray-600 mb-6">Your strategy, fully executed through an intelligent system.</p>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">€1,200</span>
                        <span className="text-lg text-gray-500"> one-time setup</span>
                        <div className="text-lg text-gray-500 mt-2">+ <span className="font-bold text-gray-800">€60/month</span></div>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="feature-item"><Check className="checkmark" /><span>Personalized dashboard tailored to your strategy</span></li>
                        <li className="feature-item"><Check className="checkmark" /><span>Pre-built automations to save hours/week</span></li>
                    </ul>
                </div>
                <a href="https://buy.stripe.com/00wbJ1ckk9j13PreZN" target="_blank" rel="noopener noreferrer" 
                   className="btn btn-primary w-full text-center">Activate Now</a>
            </div>
            <div className="price-card recommended">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">SYMI OS – Complete System</h3>
                    <p className="text-gray-600 mb-6">The complete infrastructure to scale your practice with peace of mind.</p>
                    <div className="mb-6"><span className="text-4xl font-bold">From €2,500</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="feature-item"><Check className="checkmark" /><strong>Everything in Starter, plus:</strong></li>
                        <li className="feature-item"><Check className="checkmark" /><span>A-to-Z automated client journey</span></li>
                        <li className="feature-item"><Check className="checkmark" /><span>Personalized client space & dashboard</span></li>
                    </ul>
                </div>
                <a href="#" className="btn w-full text-center">Explore SYMI OS</a>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
    const faqItems = [
        { q: "What exactly is a \"living system\"?", a: "Unlike static documents or to-do lists, SYMI creates intelligent systems that adapt, remind, optimize, and evolve based on your progress and changing needs." },
        { q: "How is this different from project management tools?", a: "Project management tracks tasks. SYMI creates intelligence—systems that understand your objectives, anticipate needs, and optimize execution automatically." },
        { q: "Can I cancel or modify my system?", a: "Yes. Monthly hosting can be paused anytime, and systems can be modified as your needs evolve. We build for growth, not lock-in." },
    ];
    return (
        <section id="faq" className="w-full py-20">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                    <details key={index} className="faq-item bg-white/50 rounded-2xl border border-white/30" 
                             style={{ backdropFilter: 'blur(20px)' }}>
                        <summary>
                            <span>{item.q}</span>
                            <ChevronDown className="faq-icon w-5 h-5" />
                        </summary>
                        <div className="faq-content">{item.a}</div>
                    </details>
                ))}
            </div>
        </section>
    );
};

// --- Composant Principal de l'Application ---
const Dashboard = dynamic(() => import('../components/Dashboard'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-screen w-full">
        <p className="text-lg text-gray-600">Loading Dashboard...</p>
    </div>
});

export default function HomePage() {
    const [appState, setAppState] = useState('landing');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [blueprintData, setBlueprintData] = useState(null);
    const [showPricingButton, setShowPricingButton] = useState(false);

    // 9-QUESTION FRAMEWORK
    const questions = [
        { id: 'main_goal', question: 'In one sentence, what legacy do you want to create through your work?', type: 'textarea', placeholder: 'The impact I want to have is...' },
        { id: 'business_model', question: 'How do you currently monetize your expertise?', type: 'radio', options: ['Trading time for money (1:1 services)', 'Group programs/cohorts', 'Digital products/courses', 'Hybrid model (services + products)', 'Building automated client systems'] },
        { id: 'scaling_pain', question: 'What keeps you awake at night about scaling?', type: 'radio', options: ['Client results aren\'t consistent at scale', 'Manual processes eating profitability', 'Can\'t break time-for-money constraints', 'Growth requires unsustainable personal effort', 'Don\'t know how to productize my methodology'] },
        { id: 'transformation_type', question: 'What transformation do clients experience with you?', type: 'radio', options: ['Strategic clarity & decision-making', 'Leadership/team performance', 'Business model innovation', 'Personal breakthrough & mindset', 'Technical skill mastery'] },
        { id: 'system_maturity', question: 'How systematized is your approach today?', type: 'radio', options: ['Fully documented methodology', 'Partial documentation (inconsistent)', 'Know what works but not documented', 'Still refining core methodology', 'Need help defining the system'] },
        { id: 'value_leak', question: 'Where do you lose most opportunity today?', type: 'radio', options: ['Can\'t capture all client value delivered', 'Underselling transformative outcomes', 'Pricing resistance despite results', 'Clients don\'t see full transformation arc', 'Results aren\'t measurable/visible'] },
        { id: 'automation_target', question: 'If we could automate one thing tomorrow, what would create the biggest impact?', type: 'textarea', placeholder: 'Be specific about your highest-leverage opportunity...' },
        { id: 'success_metric', question: 'What would change everything if achieved?', type: 'radio', options: ['3X clients without time increase', '90%+ client completion rate', 'Recurring revenue > $50K/mo', 'Productized offerings > 50% revenue', 'CEO-level focus on vision work'] },
        { id: 'email', question: 'Where should we send your System Blueprint?', type: 'email', placeholder: 'Your best email address...' }
    ];

    // Global Enter key handling
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if (e.key === 'Enter' && appState === 'audit') {
                const currentQ = questions[currentQuestion];
                if (currentQ.type === 'radio' || (answers[currentQ.id] && answers[currentQ.id].length > 0)) {
                    handleNext();
                }
            }
        };
        
        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, [currentQuestion, answers, appState]);

    // Show pricing button when report is displayed
    useEffect(() => {
        if (appState === 'report') {
            setShowPricingButton(true);
        }
    }, [appState]);

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleNext = () => {
        const currentQ = questions[currentQuestion];
        // Validate current answer before moving
        if (!answers[currentQ.id] || answers[currentQ.id].length === 0) {
            return; // Don't advance if no answer
        }
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };
    
    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = async () => {
        setAppState('scanning');
        try {
            const response = await fetch('/api/generate-blueprint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            });
            if (!response.ok) throw new Error('API request failed');
            const data = await response.json();
            setBlueprintData(JSON.parse(data.blueprint));
            setAppState('report');
        } catch (error) {
            console.error("Failed to generate blueprint:", error);
            // Fallback to show report with mock data if API fails
            setBlueprintData({ mock: true });
            setAppState('report');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && (questions[currentQuestion].type === 'textarea' || questions[currentQuestion].type === 'email')) {
            if (!e.shiftKey) {
                e.preventDefault();
                handleNext();
            }
        }
    };

    const renderAudit = () => (
        <div className="audit-container">
            <div className="w-full max-w-2xl mx-auto bg-white/50 p-6 md:p-8 rounded-2xl shadow-lg border border-white/30 question-fade-in" 
                 style={{ backdropFilter: 'blur(20px)' }}>
                {/* Progress bar */}
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                </div>
                
                <h2 className="question-text">{questions[currentQuestion].question}</h2>
                <div className="mt-6">
                    {questions[currentQuestion].type === 'textarea' && (
                        <textarea 
                            rows="4" 
                            className="form-textarea" 
                            onKeyDown={handleKeyDown} 
                            placeholder={questions[currentQuestion].placeholder} 
                            onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)} 
                            value={answers[questions[currentQuestion].id] || ''} 
                        />
                    )}
                    {questions[currentQuestion].type === 'email' && (
                        <input 
                            type="email" 
                            className="form-input" 
                            onKeyDown={handleKeyDown} 
                            placeholder={questions[currentQuestion].placeholder} 
                            onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)} 
                            value={answers[questions[currentQuestion].id] || ''} 
                        />
                    )}
                    {questions[currentQuestion].type === 'radio' && (
                        <div className="space-y-3">
                            {questions[currentQuestion].options.map(option => (
                                <label 
                                    key={option} 
                                    className={`radio-option ${answers[questions[currentQuestion].id] === option ? 'selected' : ''}`}
                                >
                                    <input 
                                        type="radio"
                                        name={questions[currentQuestion].id} 
                                        value={option} 
                                        className="sr-only" 
                                        onChange={() => {
                                            handleAnswer(questions[currentQuestion].id, option);
                                            setTimeout(handleNext, 250); // Auto-advance on radio select
                                        }}
                                        checked={answers[questions[currentQuestion].id] === option}
                                    />
                                    <span className="flex-1">{option}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-8 flex justify-between items-center">
                    {currentQuestion > 0 ? (
                        <button onClick={handleBack} className="btn nav-button">
                            ← Back
                        </button>
                    ) : <div />}
                    <span className="question-counter">{currentQuestion + 1} / {questions.length}</span>
                    <button 
                        onClick={handleNext} 
                        className="btn btn-primary nav-button"
                        disabled={!answers[questions[currentQuestion].id] || answers[questions[currentQuestion].id].length === 0}
                    >
                        {currentQuestion === questions.length - 1 ? 'Generate My Blueprint →' : 'Next →'}
                    </button>
                </div>
            </div>
        </div>
    );

    const renderScanning = () => (
        <div className="text-center blueprint-loading">
            <div className="loader mx-auto">
                <span className="loader-text">analyzing</span>
                <span className="load"></span>
            </div>
            <p className="font-mono text-gray-500 mt-6">Creating your personalized blueprint...</p>
        </div>
    );

    const renderContent = () => {
        return (
            <div className="state-transition w-full">
                {(() => {
                    switch (appState) {
                        case 'landing':
                            return (
                                <div className="w-full">
                                    <Header onStartAudit={() => setAppState('audit')} showPricing={showPricingButton} />
                                    <main className="container mx-auto px-6">
                                        <HeroSection onStartAudit={() => setAppState('audit')} />
                                        <PricingSection />
                                        <FaqSection />
                                    </main>
                                </div>
                            );
                        case 'audit': 
                            return renderAudit();
                        case 'scanning': 
                            return renderScanning();
                        case 'report': 
                            return (
                                <div className="w-full">
                                    <Header showPricing={true} />
                                    <div className="blueprint-reveal">
                                        <Dashboard data={blueprintData} />
                                    </div>
                                </div>
                            );
                        default: 
                            return <div />;
                    }
                })()}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 text-gray-800">
            <div className="fixed inset-0 opacity-30 -z-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-7xl mx-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
