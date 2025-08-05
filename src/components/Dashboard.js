'use client';

import React, { useState } from 'react';
import { Check, ChevronRight, Clock, Users, Target, Zap, BarChart, Lightbulb, ArrowRight } from 'lucide-react';

const Dashboard = ({ data, onNavigate }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  
  // Enhanced color palette for donut chart
  const chartColors = [
    '#8B5CF6', // Purple
    '#3B82F6', // Blue  
    '#10B981', // Green
    '#F59E0B', // Orange
  ];

  // Roadmap phases with detailed information
  const roadmapPhases = [
    {
      name: 'Deep Dive & Scoping',
      duration: '1-2 weeks',
      percentage: 25,
      description: 'Complete discovery of your methodology and business model',
      tasks: [
        'Initial strategy consultation',
        'Process mapping & documentation',
        'Success pattern identification',
        'System architecture design'
      ]
    },
    {
      name: 'Dashboard & Automation Build',
      duration: '2-3 weeks',
      percentage: 50,
      description: 'Development of your personalized execution system',
      tasks: [
        'Custom dashboard creation',
        'Automation workflows setup',
        'Integration configuration',
        'Initial testing & refinement'
      ]
    },
    {
      name: 'Delivery & Onboarding',
      duration: '1 week',
      percentage: 25,
      description: 'System deployment and team enablement',
      tasks: [
        'System deployment',
        'Team training sessions',
        'Documentation handoff',
        'Success metrics setup'
      ]
    }
  ];

  // System components data
  const systemComponents = [
    { name: 'Automated Onboarding', value: 30, color: chartColors[0] },
    { name: 'Progress Tracking', value: 25, color: chartColors[1] },
    { name: 'Client Communication', value: 25, color: chartColors[2] },
    { name: 'Resource Hub', value: 20, color: chartColors[3] }
  ];

  // Calculate donut chart paths
  const createDonutPath = (value, offset) => {
    const radius = 80;
    const innerRadius = 50;
    const angle = (value / 100) * Math.PI * 2;
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    
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

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header with Navigation */}
      <header className="p-6 w-full bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => onNavigate && onNavigate('landing')} 
            className="font-mono text-sm font-semibold hover:text-purple-600 transition-colors"
          >
            SYMI
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('pricing')} 
            className="btn hover:scale-105 transition-transform"
          >
            View Pricing
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Blueprint Header Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">Your System Blueprint</h1>
              <p className="text-gray-600">Personalized roadmap to transform your business</p>
            </div>
          </div>
        </div>

        {/* Core Diagnosis Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Diagnosis & Strategic Objective</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <span className="font-semibold text-purple-600">The Challenge:</span> Your current manual processes are creating a bottleneck that limits your ability to scale effectively. Time spent on repetitive tasks is preventing you from focusing on high-value strategic work.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-purple-600">The Impact:</span> This is directly affecting your profitability and client satisfaction. Manual workflows lead to inconsistent delivery and missed opportunities for growth.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-purple-600">The Opportunity:</span> By automating your core processes, you can reclaim 10-15 hours per week, improve client outcomes by 30%, and unlock the potential to scale your business without proportionally scaling your time investment.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5-10h</div>
            <div className="text-sm text-gray-600">Time Saved Weekly</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">+30%</div>
            <div className="text-sm text-gray-600">Client Success Rate</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-sm text-gray-600">Key Automations</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <BarChart className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4 wks</div>
            <div className="text-sm text-gray-600">Implementation Time</div>
          </div>
        </div>

        {/* Implementation Roadmap - Interactive */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projected Implementation Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Roadmap Visualization */}
            <div className="space-y-4">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setSelectedPhase(selectedPhase?.name === phase.name ? null : phase)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedPhase?.name === phase.name 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{phase.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{phase.duration}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                        selectedPhase?.name === phase.name ? 'rotate-90' : ''
                      }`} />
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${phase.percentage}%` }}
                        />
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Phase Details */}
            <div className={`transition-all duration-300 ${selectedPhase ? 'opacity-100' : 'opacity-0'}`}>
              {selectedPhase && (
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{selectedPhase.name}</h3>
                  <p className="text-gray-700 mb-4">{selectedPhase.description}</p>
                  <h4 className="font-semibold text-sm text-gray-900 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {selectedPhase.tasks.map((task, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Components with Enhanced Donut Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended System Components</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Donut Chart */}
            <div className="flex justify-center">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {(() => {
                  let offset = 0;
                  return systemComponents.map((component, index) => {
                    const path = createDonutPath(component.value, (offset / 100) * Math.PI * 2);
                    offset += component.value;
                    return (
                      <path
                        key={index}
                        d={path}
                        fill={component.color}
                        className="transition-opacity hover:opacity-80 cursor-pointer"
                      />
                    );
                  });
                })()}
              </svg>
            </div>

            {/* Component List */}
            <div className="space-y-4">
              {systemComponents.map((component, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: component.color }}
                    />
                    <span className="font-medium text-gray-900">{component.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{component.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6 opacity-90">Your personalized system is ready to be activated. Start your transformation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate && onNavigate('pricing')}
              className="btn bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold flex items-center justify-center"
            >
              Activate Your System
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a 
              href="mailto:contact@symi.io" 
              className="btn bg-purple-700 text-white hover:bg-purple-800 px-8 py-4 text-lg font-semibold"
            >
              Schedule Strategy Call
            </a>
          </div>
          <p className="text-sm mt-4 opacity-75">30-day execution guarantee • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
