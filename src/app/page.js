'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Check } from 'lucide-react';

// --- Landing Page Components ---

const HeroSection = ({ onStartAudit }) => (
    <section className="w-full text-center py-20">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-800">Turn Vision Into Living Systems</h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-600">The intelligent layer that transforms your goals and strategies into systems that think, act, and evolve with you.</p>
            <div className="mt-8">
                <button onClick={onStartAudit} className="btn btn-primary text-lg px-8 py-4">Start Your Free Audit</button>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section id="pricing" className="w-full py-20">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Choose Your Execution Path</h2>
            <p className="text-lg text-gray-600">From personal transformation to scaling your practice—your strategy becomes a living system.</p>
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
                <a href="https://buy.stripe.com/00wbJ1ckk9j13PreZN" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full text-center">Activate Now</a>
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

// --- Main App Component ---
const Dashboard = dynamic(() => import('../components/Dashboard'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-screen w-full"><p className="text-lg text-gray-600">Loading Dashboard...</p></div>
});

export default function HomePage() {
    const [appState, setAppState] = useState('landing'); // landing, audit, scanning, report
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [blueprintData, setBlueprintData] = useState(null);

    // RESTORED: Full list of original questions
    const questions = [
        { id: 'main_goal', question: 'Before we begin — what transformation do you want to create for your clients?', type: 'textarea', placeholder: 'Describe the outcome you help people achieve...' },
        { id: 'business_model', question: 'How do you currently work with clients? (Select all that apply)', type: 'checkbox', options: [ 'One-on-one sessions (trading time for money)', 'Group programs (manual but scalable)', 'Digital products (automated but low-touch)', 'Mix of services and systems', 'Building toward automated client systems' ] },
        { id: 'scaling_challenge', question: 'What\'s your biggest challenge in scaling your expertise?', type: 'radio', options: [ 'Limited by hours in the day', 'Clients don\'t follow through between sessions', 'Hard to track client progress and results', 'Manual work that could be automated', 'Want to productize but don\'t know how' ] },
        { id: 'client_success_metric', question: 'How do you currently measure client success?', type: 'radio', options: [ 'Client feedback and testimonials', 'Completion of action items between sessions', 'Achievement of specific measurable outcomes', 'Client retention and referrals', 'Hard to measure - mostly intuitive' ] },
        { id: 'automation_vision', question: 'If you could automate one thing in your practice, what would it be?', type: 'textarea', placeholder: 'Be specific about what takes most of your time...' },
        { id: 'email', question: 'Where should we send your personalized Expert OS blueprint?', type: 'email', placeholder: 'Your primary email...' }
    ];

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => {
            const newAnswers = { ...prev };
            if (questions[currentQuestion].type === 'checkbox') {
                const currentValues = prev[questionId] || [];
                if (currentValues.includes(value)) {
                    newAnswers[questionId] = currentValues.filter(v => v !== value);
                } else {
                    newAnswers[questionId] = [...currentValues, value];
                }
            } else {
                newAnswers[questionId] = value;
            }
            return newAnswers;
        });
    };

    const handleNext = () => {
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
            setAppState('audit'); // Go back to audit on error
        }
    };

    const renderAudit = () => (
        <div className="w-full max-w-2xl bg-white/50 p-8 rounded-2xl shadow-lg border border-white/30" style={{ backdropFilter: 'blur(20px)' }}>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{questions[currentQuestion].question}</h2>
            <div className="mt-6">
                {questions[currentQuestion].type === 'textarea' && <textarea rows="4" className="form-input" placeholder={questions[currentQuestion].placeholder} onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)} value={answers[questions[currentQuestion].id] || ''} />}
                {questions[currentQuestion].type === 'email' && <input type="email" className="form-input" placeholder={questions[currentQuestion].placeholder} onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)} value={answers[questions[currentQuestion].id] || ''} />}
                {(questions[currentQuestion].type === 'radio' || questions[currentQuestion].type === 'checkbox') && (
                    <div className="space-y-3">
                        {questions[currentQuestion].options.map(option => (
                            <label key={option} className="block w-full cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-4 text-lg text-gray-700 hover:border-purple-500 transition-colors duration-200 has-[:checked]:border-purple-600 has-[:checked]:bg-purple-50">
                                <input 
                                    type={questions[currentQuestion].type} 
                                    name={questions[currentQuestion].id} 
                                    value={option} 
                                    className="hidden" 
                                    onChange={() => handleAnswer(questions[currentQuestion].id, option)}
                                    checked={
                                        questions[currentQuestion].type === 'checkbox' 
                                        ? (answers[questions[currentQuestion].id] || []).includes(option)
                                        : answers[questions[currentQuestion].id] === option
                                    }
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-8 flex justify-between items-center">
                {currentQuestion > 0 ? <button onClick={handleBack} className="btn">Back</button> : <div />}
                <span className="font-mono text-sm text-gray-500">{currentQuestion + 1} / {questions.length}</span>
                <button onClick={handleNext} className="btn btn-primary">
                    {currentQuestion === questions.length - 1 ? 'Generate My Blueprint →' : 'Next →'}
                </button>
            </div>
        </div>
    );

    const renderScanning = () => (
        <div className="text-center">
            <div className="loader mx-auto"><span className="loader-text">analyzing</span><span className="load"></span></div>
            <p className="font-mono text-gray-500 mt-6">Performing your Clarity Ritual...</p>
        </div>
    );

    const renderContent = () => {
        switch (appState) {
            case 'landing':
                return (
                    <div className="w-full container mx-auto px-6">
                        <HeroSection onStartAudit={() => setAppState('audit')} />
                        <PricingSection />
                    </div>
                );
            case 'audit': return renderAudit();
            case 'scanning': return renderScanning();
            case 'report': return <Dashboard data={blueprintData} />;
            default: return <HeroSection onStartAudit={() => setAppState('audit')} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 text-gray-800">
             <div className="fixed inset-0 opacity-30 -z-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                {renderContent()}
            </div>
        </div>
    );
}
