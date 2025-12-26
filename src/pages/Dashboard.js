import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  DollarSign,
  Building2,
  Users,
  ArrowRight
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Total Waivers', value: '156', change: '+12%', trend: 'up' },
    { label: 'Pending', value: '23', change: '-5%', trend: 'down' },
    { label: 'Requested', value: '18', change: '+8%', trend: 'up' },
    { label: 'Received', value: '12', change: '+15%', trend: 'up' },
    { label: 'Approved', value: '98', change: '+23%', trend: 'up' },
  ];

  const recentActivity = [
    { id: 1, type: 'waiver', action: 'ABC Roofing submitted waiver', time: '2 min ago', status: 'received' },
    { id: 2, type: 'payment', action: 'Pay App #12 approved', time: '15 min ago', status: 'approved' },
    { id: 3, type: 'insurance', action: 'Martinez Electric COI expiring', time: '1 hour ago', status: 'warning' },
    { id: 4, type: 'waiver', action: 'Steel Structures waiver overdue', time: '3 hours ago', status: 'overdue' },
    { id: 5, type: 'project', action: 'Harbor View Hotel budget updated', time: '5 hours ago', status: 'info' },
  ];

  const overdueItems = [
    { sub: 'Steel Structures Ltd.', project: 'Downtown Office Complex', days: 40, amount: '$156,000.00' },
    { sub: 'Superior Drywall Inc.', project: 'Riverside Apartments', days: 37, amount: '$28,500.00' },
    { sub: 'Martinez Electric Co.', project: 'Downtown Office Complex', days: 37, amount: '$45,000.00' },
  ];

  const projectSummary = [
    { name: 'Downtown Office Complex', progress: 68, waivers: 45, pending: 8 },
    { name: 'Riverside Apartments', progress: 42, waivers: 32, pending: 5 },
    { name: 'Harbor View Hotel', progress: 85, waivers: 28, pending: 2 },
  ];

  return (
    <div className="page-container dashboard">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Overview of your construction compliance</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-change ${stat.trend}`}>
                {stat.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.change}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card activity-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <button className="link-btn">View All <ArrowRight size={14} /></button>
          </div>
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div key={item.id} className="activity-item">
                <div className={`activity-icon ${item.status}`}>
                  {item.status === 'received' && <FileText size={16} />}
                  {item.status === 'approved' && <CheckCircle2 size={16} />}
                  {item.status === 'warning' && <AlertTriangle size={16} />}
                  {item.status === 'overdue' && <Clock size={16} />}
                  {item.status === 'info' && <Building2 size={16} />}
                </div>
                <div className="activity-content">
                  <p className="activity-action">{item.action}</p>
                  <span className="activity-time">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card overdue-card">
          <div className="card-header">
            <h3 className="card-title">
              <AlertTriangle size={18} className="warning-icon" />
              Overdue Waivers
            </h3>
            <span className="overdue-count">3 items</span>
          </div>
          <div className="overdue-list">
            {overdueItems.map((item, index) => (
              <div key={index} className="overdue-item">
                <div className="overdue-info">
                  <p className="overdue-sub">{item.sub}</p>
                  <span className="overdue-project">{item.project}</span>
                </div>
                <div className="overdue-details">
                  <span className="overdue-days">{item.days}d overdue</span>
                  <span className="overdue-amount">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card projects-card">
          <div className="card-header">
            <h3 className="card-title">Project Summary</h3>
            <button className="link-btn">All Projects <ArrowRight size={14} /></button>
          </div>
          <div className="projects-list">
            {projectSummary.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <p className="project-name">{project.name}</p>
                  <span className="project-progress-text">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="project-stats">
                  <span>{project.waivers} waivers</span>
                  <span>{project.pending} pending</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card quick-actions-card">
          <h3 className="card-title">Quick Actions</h3>
          <div className="quick-actions">
            <button className="quick-action">
              <FileText size={20} />
              <span>New Waiver</span>
            </button>
            <button className="quick-action">
              <DollarSign size={20} />
              <span>New Pay App</span>
            </button>
            <button className="quick-action">
              <Users size={20} />
              <span>Add Subcontractor</span>
            </button>
            <button className="quick-action">
              <Building2 size={20} />
              <span>New Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
