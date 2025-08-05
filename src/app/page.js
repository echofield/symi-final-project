'use client';

import React, { useState, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// --- Helper Functions for Blueprint Generation ---
const generatePersonalizedResults = (answers) => {
    // This is a simplified scoring logic. You can make this as complex as you need.
    let score = 50; // Base score
    if (answers.business_model?.includes('services')) score += 10;
    if (answers.scaling_pain?.includes('Manual')) score += 15;
    if (answers.system_maturity === 'Fully documented methodology') score += 20;
    if (answers.value_leak?.includes('capture')) score -= 10;

    score = Math.max(10, Math.min(99, score)); // Clamp score between 10 and 99

    let recommendation = {
        path: 'SYMI – Business Twin Starter',
        reason: 'This is the perfect starting point to systematize your methodology and unlock initial scaling opportunities.',
        cta: 'Activate Now',
        link: 'https://buy.stripe.com/00wbJ1ckk9j13PreZN'
    };

    if (score > 75) {
        recommendation = {
            path: 'SYMI OS – Complete System',
            reason: 'Your sophisticated model requires a comprehensive infrastructure to scale effectively.',
            cta: 'Explore SYMI OS',
            link: 'mailto:contact@symi.system?subject=SYMI%20OS%20Inquiry'
        };
    }

    return {
        score,
        recommendation,
        kpis: {
            timeSavings: score > 60 ? '15-20h' : '8-12h',
            clientSuccess: score > 70 ? '+40%' : '+30%',
            timeline: score > 75 ? '6 wks' : '4 wks'
        }
    };
};


// --- Page Components ---

const Header = ({ onStartAudit, showPricingLink }) => (
    <header className="absolute top-0 left-0 p-6 w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
            <span className="font-semibold text-gray-800">Symi System</span>
            <div className="flex items-center space-x-4">
                {showPricingLink && (
                    <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors hidden md:inline-block">
                        Pricing
                    </a>
                )}
                <button onClick={onStartAudit} className="btn btn-primary">Start Audit</button>
            </div>
        </div>
    </header>
);

const HeroSection = ({ onStartAudit }) => (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center -mt-16">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-purple-200 rounded-full opacity-40 blur-3xl" />
        </div>
        <div className="relative z-10 px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900">
                Turn Vision Into Living Systems
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-600">
                The intelligent layer that transforms your goals and strategies into systems that think, act, and evolve with you.
            </p>
             <div className="mt-8">
                <button onClick={onStartAudit} className="btn btn-primary text-lg px-8 py-4">
                    Generate My Blueprint
                </button>
            </div>
        </div>
    </section>
);


const PricingSection = () => (
    <section id="pricing" className="w-full py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Execution Path</h2>
                <p className="text-lg text-gray-600">
                    From personal transformation to scaling your practice—your strategy becomes a living system.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                <div className="price-card">
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2">Business Twin Starter</h3>
                        <p className="text-gray-600 mb-6">Your strategy, fully executed through an intelligent system.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">€1,200</span>
                            <span className="text-lg text-gray-500"> one-time setup</span>
                            <div className="text-lg text-gray-500 mt-2">+ <span className="font-bold text-gray-800">€60/month</span></div>
                        </div>
                        <ul className="space-y-3 mb-8 text-left">
                            <li className="feature-item"><Check className="checkmark" /><span><b>Core Process Mapping & Blueprint</b></span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Personalized Client Dashboard</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span><b>1 Key Workflow Automation</b> (e.g., Onboarding)</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Pre-built automations to save hours/week</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Basic Analytics & Progress Tracking</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Email & Chat Support</span></li>
                        </ul>
                    </div>
                    <a href="https://buy.stripe.com/00wbJ1ckk9j13PreZN" target="_blank" rel="noopener noreferrer"
                       className="btn btn-primary w-full text-center">Activate Now</a>
                </div>
                <div className="price-card recommended">
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2">SYMI OS</h3>
                        <p className="text-gray-600 mb-6">The complete infrastructure to scale your practice with peace of mind.</p>
                        <div className="mb-6"><span className="text-4xl font-bold">From €2,500</span></div>
                        <ul className="space-y-3 mb-8 text-left">
                            <li className="feature-item"><Check className="checkmark" /><strong>Everything in Starter, plus:</strong></li>
                            <li className="feature-item"><Check className="checkmark" /><span>A-to-Z Automated Client Journey</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Advanced Multi-Step Automations</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Client Portal with Personalized Access</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span><b>Integration with 2 External Tools</b> (e.g., Calendar, Email)</span></li>
                            <li className="feature-item"><Check className="checkmark" /><span>Dedicated System Architect Support</span></li>
                        </ul>
                    </div>
                    <a href="mailto:contact@symi.system?subject=SYMI%20OS%20Inquiry" className="btn w-full text-center">Explore SYMI OS</a>
                </div>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
    const faqItems = [
        { q: "What exactly is a \"living system\"?", a: "Unlike static documents or to-do lists, SYMI creates intelligent systems that adapt, remind, optimize, and evolve based on your progress and changing needs. It's an active partner in your execution." },
        { q: "How is this different from project management tools?", a: "Project management tracks tasks. SYMI creates intelligence—systems that understand your objectives, anticipate needs, and optimize execution automatically. Think of it as the brain, while a PM tool is the to-do list." },
        { q: "What technology do you use?", a: "We build on top of powerful, no-code platforms like Airtable and Softr, which allows for rapid development, robust security, and infinite scalability without the overhead of custom-coded applications." },
        { q: "Is this for solo consultants or for teams?", a: "Both. The Business Twin Starter is perfect for solo experts looking to productize their service. SYMI OS is designed for growing teams that need a scalable infrastructure to ensure consistent delivery and client experience." },
        { q: "Can I cancel or modify my system?", a: "Yes. The monthly hosting and maintenance fee can be paused or canceled anytime. Your system is built to be flexible and can be modified or expanded as your business strategy evolves. We build for growth, not lock-in." },
    ];
    return (
        <section id="faq" className="w-full py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <details key={index} className="faq-item bg-white/50 rounded-2xl border border-white/30 transition">
                            <summary>
                                <span>{item.q}</span>
                                <ChevronDown className="faq-icon w-5 h-5" />
                            </summary>
                            <div className="faq-content">{item.a}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ResultsSection = ({ results, onRestart }) => (
    <section id="results" className="w-full py-20 blueprint-reveal">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-xl">
                <h2 className="text-sm uppercase tracking-widest text-purple-600">Your Personalized Blueprint</h2>
                <div className="my-8">
                    <div className="inline-block relative">
                        <div className="text-7xl font-bold text-gray-800">{results.score}</div>
                        <div className="absolute -top-2 -right-8 text-2xl font-bold text-purple-500">/100</div>
                    </div>
                    <p className="text-lg text-gray-600 mt-2">System Readiness Score</p>
                </div>

                <div className="text-left bg-purple-50 rounded-lg p-6 my-8">
                    <h3 className="font-bold text-lg text-gray-800">Recommended Path: {results.recommendation.path}</h3>
                    <p className="text-gray-700 mt-2">{results.recommendation.reason}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center my-8">
                    <div>
                        <p className="text-3xl font-bold text-purple-600">{results.kpis.timeSavings}</p>
                        <p className="text-sm text-gray-600">Weekly Time Saved</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-purple-600">{results.kpis.clientSuccess}</p>
                        <p className="text-sm text-gray-600">Client Success Rate</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-purple-600">{results.kpis.timeline}</p>
                        <p className="text-sm text-gray-600">Implementation Time</p>
                    </div>
                </div>

                <a href={results.recommendation.link} className="btn btn-primary w-full md:w-auto text-lg px-8 py-4">
                    {results.recommendation.cta}
                </a>
            </div>
             <button onClick={onRestart} className="text-sm text-gray-600 mt-8 hover:text-purple-600">
                Or, start a new audit
            </button>
        </div>
    </section>
);


// --- Main App Component ---
export default function HomePage() {
    const [appState, setAppState] = useState('landing'); // 'landing', 'audit', 'scanning', 'report'
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);

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

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const validateEmail = (email) => {
        if (!email) return false;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleNext = () => {
        const currentQ = questions[currentQuestion];
        if (!answers[currentQ.id] || answers[currentQ.id].length === 0) return;
        if (currentQ.type === 'email' && !validateEmail(answers[currentQ.id])) return;
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    };

    const handleSubmit = () => {
        setAppState('scanning');
        const generatedResults = generatePersonalizedResults(answers);
        setResults(generatedResults);
        
        setTimeout(() => {
            setAppState('report');
        }, 2500);
    };
    
    const handleRestart = () => {
        setAnswers({});
        setCurrentQuestion(0);
        setResults(null);
        setAppState('landing');
    };

    const renderAudit = () => (
        <div className="audit-container">
            <div className="w-full max-w-2xl mx-auto bg-white/50 p-6 md:p-8 rounded-2xl shadow-lg border border-white/30 question-fade-in"
                 style={{ backdropFilter: 'blur(20px)' }}>
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
                            placeholder={questions[currentQuestion].placeholder}
                            onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)}
                            value={answers[questions[currentQuestion].id] || ''}
                            autoFocus
                        />
                    )}
                    {questions[currentQuestion].type === 'email' && (
                        <input
                            type="email"
                            className="form-input"
                            placeholder={questions[currentQuestion].placeholder}
                            onChange={e => handleAnswer(questions[currentQuestion].id, e.target.value)}
                            value={answers[questions[currentQuestion].id] || ''}
                            autoFocus
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
                                            setTimeout(handleNext, 250);
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
                        <button onClick={handleBack} className="btn nav-button">← Back</button>
                    ) : <div />}
                    <span className="question-counter">{currentQuestion + 1} / {questions.length}</span>
                    <button
                        onClick={handleNext}
                        className="btn btn-primary nav-button"
                        disabled={!answers[questions[currentQuestion].id] || answers[questions[currentQuestion].id].length === 0}
                    >
                        {currentQuestion === questions.length - 1 ? 'Generate Blueprint →' : 'Next →'}
                    </button>
                </div>
            </div>
        </div>
    );
    
    const renderScanning = () => (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="loader">
                <span className="loader-text">analyzing</span>
                <span className="load"></span>
            </div>
            <p className="font-mono text-gray-500 mt-6">Creating your personalized blueprint...</p>
        </div>
    );

    const renderContent = () => {
        switch (appState) {
            case 'audit':
                return renderAudit();
            case 'scanning':
                return renderScanning();
            case 'report':
                return <ResultsSection results={results} onRestart={handleRestart} />;
            case 'landing':
            default:
                return (
                    <div className="w-full">
                        <Header onStartAudit={() => setAppState('audit')} showPricingLink={true} />
                        <main>
                            <HeroSection onStartAudit={() => setAppState('audit')} />
                            <div className="container mx-auto px-6">
                               <PricingSection />
                               <FaqSection />
                            </div>
                        </main>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="fixed inset-0 opacity-30 -z-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
             <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
