import React from 'react';
import { Download, FileText, Calendar, BarChart3, PieChart, TrendingUp, Clock } from 'lucide-react';

const Reports = () => {
  const reportCategories = [
    {
      title: 'Compliance Reports',
      reports: [
        { name: 'Waiver Status Summary', description: 'Overview of all lien waivers by status', icon: <FileText size={20} /> },
        { name: 'COI Expiration Report', description: 'Insurance certificates expiring in next 30/60/90 days', icon: <Calendar size={20} /> },
        { name: 'Compliance Scorecard', description: 'Subcontractor compliance ratings by project', icon: <BarChart3 size={20} /> },
      ],
    },
    {
      title: 'Financial Reports',
      reports: [
        { name: 'Payment Summary', description: 'Pay applications and payments by project', icon: <TrendingUp size={20} /> },
        { name: 'Retainage Report', description: 'Retainage held and release schedule', icon: <PieChart size={20} /> },
        { name: 'Contract Value Report', description: 'Original vs current contract values with change orders', icon: <BarChart3 size={20} /> },
      ],
    },
    {
      title: 'Project Reports',
      reports: [
        { name: 'Project Status Report', description: 'Comprehensive project overview with all metrics', icon: <FileText size={20} /> },
        { name: 'Subcontractor Performance', description: 'Response times, compliance rates, and billing history', icon: <TrendingUp size={20} /> },
        { name: 'Aging Report', description: 'Outstanding waivers and documents by age', icon: <Clock size={20} /> },
      ],
    },
  ];

  const recentReports = [
    { name: 'Waiver Status Summary', project: 'Downtown Office Complex', date: 'Dec 20, 2024', format: 'PDF' },
    { name: 'Payment Summary', project: 'All Projects', date: 'Dec 18, 2024', format: 'Excel' },
    { name: 'COI Expiration Report', project: 'All Projects', date: 'Dec 15, 2024', format: 'PDF' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">Generate and download compliance and financial reports</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div>
          {reportCategories.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="card" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '8px', 
                        background: '#f3f4f6', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#666',
                      }}>
                        {report.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: '4px' }}>{report.name}</div>
                        <div style={{ fontSize: '13px', color: '#666' }}>{report.description}</div>
                      </div>
                    </div>
                    <button className="btn btn-secondary">
                      <Download size={16} />
                      Generate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="card">
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Recent Reports</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentReports.map((report, index) => (
                <div key={index} style={{ 
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontWeight: 500, marginBottom: '4px' }}>{report.name}</div>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{report.project}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#999' }}>{report.date}</span>
                    <span style={{ 
                      fontSize: '11px', 
                      padding: '2px 8px', 
                      background: '#e5e5e5', 
                      borderRadius: '4px',
                    }}>
                      {report.format}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Scheduled Reports</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
              Set up automated report generation and delivery.
            </p>
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              Configure Schedules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
