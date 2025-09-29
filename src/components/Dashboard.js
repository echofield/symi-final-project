'use client';

import React, { useState } from 'react';
import { Check, ChevronRight, Clock, Users, Target, Zap, BarChart, Lightbulb, ArrowRight } from 'lucide-react';

const Dashboard = ({ data, onNavigate }) => {
    // Default data if none is provided, to prevent errors on initial render or API failure
    const safeData = data || {
        userGoal: "Define Your Legacy",
        businessModel: "",
        coreDiagnosis: { challenge: "Awaiting analysis...", impact: "...", opportunity: "..." },
        kpis: { timeSavings: "0h", clientSuccess: "+0%", agents: "0", timeline: "0 wks" },
        timeline: [],
        components: [],
        recommendation: { plan: "N/A", reason: "" }
    };

    const { userGoal, businessModel, coreDiagnosis, kpis, timeline, components, recommendation } = safeData;

    // Swiss system palette for the chart
    const chartColors = ['#1B4332', '#000000', '#4B5563', '#6B7280', '#111827'];

    const systemComponents = components.map((name, index) => ({
        name,
        value: 100 / (components.length || 1), // Distribute value evenly, avoid division by zero
        color: chartColors[index % chartColors.length]
    }));

    // Function to calculate paths for the donut chart segments
    const createDonutPath = (value, offset) => {
        const radius = 80;
        const innerRadius = 50;
        const angle = (value / 100) * Math.PI * 2;
        const largeArcFlag = angle >= Math.PI ? 1 : 0;
        
        const x1 = 100 + radius * Math.cos(offset - Math.PI / 2);
        const y1 = 100 + radius * Math.sin(offset - Math.PI / 2);
        const x2 = 100 + radius * Math.cos(offset + angle - Math.PI / 2);
        const y2 = 100 + radius * Math.sin(offset + angle - Math.PI / 2);
        
        const ix1 = 100 + innerRadius * Math.cos(offset - Math.PI / 2);
        const iy1 = 100 + innerRadius * Math.sin(offset - Math.PI / 2);
        const ix2 = 100 + innerRadius * Math.cos(offset + angle - Math.PI / 2);
        const iy2 = 100 + innerRadius * Math.sin(offset + angle - Math.PI / 2);
        
        return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix1} ${iy1} Z`;
    };
    let cumulativeOffset = 0;

    return (
        <div className="min-h-screen bg-white">
            <header className="p-6 w-full bg-white sticky top-0 z-10 border-b border-black">
                <div className="container mx-auto flex justify-between items-center">
                    <button onClick={() => onNavigate && onNavigate('landing')} className="font-mono text-sm font-medium hover:opacity-80">
                        SYMI
                    </button>
                    <button onClick={() => onNavigate && onNavigate('pricing')} className="btn btn-primary">
                        View Pricing & Plans
                    </button>
                </div>
            </header>

            <main className="container mx-auto p-4 md:p-8">
                {/* DYNAMIC: Vision/Goal Section */}
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-wide text-[var(--forest-green)] mb-4">Your Personalized System Blueprint</p>
                    <h2 className="text-3xl md:text-4xl font-light text-black">Your Vision: "{userGoal}"</h2>
                    <p className="text-lg text-black mt-2 max-w-3xl mx-auto">Here's the strategic blueprint to bridge the gap between your current state and your ultimate goal.</p>
                </div>

                {/* DYNAMIC: Priority Action Alert */}
                {businessModel === 'Trading time for money (1:1 services)' && (
                    <div className="bg-white border-l-4 border-black text-black p-6 rounded-none mb-12 shadow-none max-w-4xl mx-auto">
                        <h3 className="font-bold text-xl flex items-center gap-3"><Lightbulb size={24}/> Priority Action: Productize Your Expertise</h3>
                        <p className="mt-2 text-lg">
                            Based on your 1:1 model, the highest-leverage first step is to package your knowledge into a scalable format. This blueprint focuses on creating a group program or digital product framework to break the time-for-money barrier.
                        </p>
                    </div>
                )}

                {/* KPI Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                     <div className="bg-white p-6 rounded-none border border-black flex items-center gap-4"><Clock className="w-10 h-10 text-[var(--forest-green)]"/><div><div className="text-3xl font-light">{kpis.timeSavings}</div><div className="text-black">Hours Saved / Week</div></div></div>
                     <div className="bg-white p-6 rounded-none border border-black flex items-center gap-4"><Users className="w-10 h-10 text-black"/><div><div className="text-3xl font-light">{kpis.clientSuccess}</div><div className="text-black">Client Success Rate</div></div></div>
                     <div className="bg-white p-6 rounded-none border border-black flex items-center gap-4"><Zap className="w-10 h-10 text-black"/><div><div className="text-3xl font-light">{kpis.agents}</div><div className="text-black">Autonomous Agents</div></div></div>
                     <div className="bg-white p-6 rounded-none border border-black flex items-center gap-4"><Target className="w-10 h-10 text-black"/><div><div className="text-3xl font-light">{kpis.timeline}</div><div className="text-black">Implementation Time</div></div></div>
                </div>
                
                {/* Core Diagnosis */}
                <div className="bg-white p-8 rounded-none border border-black mb-12 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-black">Core Diagnosis</h3>
                    <div className="space-y-4 text-lg">
                        <p><strong>Challenge:</strong> {coreDiagnosis.challenge}</p>
                        <p><strong>Impact:</strong> {coreDiagnosis.impact}</p>
                        <p><strong>Opportunity:</strong> <span className="text-[var(--forest-green)] font-medium">{coreDiagnosis.opportunity}</span></p>
                    </div>
                </div>

                {/* Roadmap & System Components */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Roadmap */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-none border border-black">
                       <h3 className="text-2xl font-light mb-6 text-black">Your Implementation Roadmap</h3>
                       <div className="space-y-4">
                           {timeline.map((item, index) => (
                               <div key={index} className="flex items-start">
                                   <div className="flex flex-col items-center mr-4">
                                       <div className="w-6 h-6 rounded-none bg-black text-white flex items-center justify-center font-medium">{index + 1}</div>
                                       {index < timeline.length - 1 && <div className="w-0.5 h-12 bg-black mt-1"></div>}
                                   </div>
                                   <div className="bg-white p-4 rounded-none flex-1 border border-black">
                                       <p className="font-light text-black">{item}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                    </div>
                    {/* System Components */}
                    <div className="bg-white p-8 rounded-none border border-black">
                        <h3 className="text-2xl font-light mb-6 text-black">Your System Components</h3>
                        <div className="relative flex justify-center items-center">
                            <svg viewBox="0 0 200 200" className="w-56 h-56 transform -rotate-90">
                                {systemComponents.map((component, index) => {
                                    const path = createDonutPath(component.value, cumulativeOffset);
                                    cumulativeOffset += (component.value / 100) * Math.PI * 2;
                                    return <path key={index} d={path} fill={component.color} />;
                                })}
                            </svg>
                            <div className="absolute text-center transform rotate-90">
                                <span className="text-4xl font-light text-black">{components.length}</span>
                                <p className="text-black">Core Modules</p>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-3">
                            {systemComponents.map((component, index) => (
                                <li key={index} className="flex items-center text-black">
                                    <span className="w-3 h-3 rounded-none mr-3" style={{ backgroundColor: component.color }}></span>
                                    {component.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16 bg-white p-10 rounded-none max-w-4xl mx-auto border border-black">
                    <h3 className="text-3xl font-light text-black">Ready to build your living system?</h3>
                    <p className="text-lg text-black mt-4">Based on your audit, the <strong className="text-[var(--forest-green)]">{recommendation.plan}</strong> is your recommended path forward.</p>
                    <p className="text-black mt-2">{recommendation.reason}</p>
                    <button onClick={() => onNavigate && onNavigate('pricing')} className="btn btn-primary text-lg px-8 py-4 mt-8 group">
                        Activate Your Blueprint <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
