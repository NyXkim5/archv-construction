import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, MapPin, Calendar, DollarSign, Users } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      name: 'Downtown Office Complex',
      client: 'Metro Development Corp',
      location: 'Los Angeles, CA',
      value: 12500000,
      startDate: 'Jan 15, 2024',
      endDate: 'Dec 31, 2025',
      progress: 68,
      subcontractors: 12,
      activeWaivers: 45,
      status: 'active',
    },
    {
      id: 2,
      name: 'Riverside Apartments',
      client: 'Sunset Living LLC',
      location: 'Riverside, CA',
      value: 8200000,
      startDate: 'Mar 1, 2024',
      endDate: 'Aug 31, 2025',
      progress: 42,
      subcontractors: 8,
      activeWaivers: 32,
      status: 'active',
    },
    {
      id: 3,
      name: 'Harbor View Hotel',
      client: 'Pacific Hospitality Group',
      location: 'San Diego, CA',
      value: 24000000,
      startDate: 'Jun 1, 2023',
      endDate: 'Mar 31, 2025',
      progress: 85,
      subcontractors: 18,
      activeWaivers: 28,
      status: 'active',
    },
    {
      id: 4,
      name: 'Tech Campus Phase 2',
      client: 'Innovation Partners',
      location: 'Irvine, CA',
      value: 45000000,
      startDate: 'Feb 1, 2025',
      endDate: 'Dec 31, 2026',
      progress: 0,
      subcontractors: 0,
      activeWaivers: 0,
      status: 'planning',
    },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Manage all construction projects</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Project
        </button>
      </div>

      <div className="projects-toolbar">
        <div className="search-box" style={{ width: '350px' }}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''} 
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''} 
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <div>
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-client">{project.client}</p>
              </div>
              <span className={`status-badge status-${project.status}`}>
                {project.status}
              </span>
            </div>

            <div className="project-card-meta">
              <div className="meta-item">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
              <div className="meta-item">
                <DollarSign size={14} />
                <span>{formatAmount(project.value)}</span>
              </div>
            </div>

            <div className="project-card-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>

            <div className="project-card-stats">
              <div className="project-stat">
                <Users size={16} />
                <span>{project.subcontractors} Subs</span>
              </div>
              <div className="project-stat">
                <span>{project.activeWaivers} Waivers</span>
              </div>
            </div>

            <div className="project-card-footer">
              <div className="project-dates">
                <Calendar size={14} />
                <span>{project.startDate} - {project.endDate}</span>
              </div>
              <button className="action-menu">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
