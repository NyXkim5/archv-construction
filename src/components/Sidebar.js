import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  FileText,
  CreditCard,
  Shield,
  FolderOpen,
  Users,
  FileSignature,
  FilePlus,
  UserCheck,
  FileCheck,
  Clock,
  UserCircle,
  Home,
  BarChart3,
  Settings,
  Star,
  ChevronDown,
  ChevronRight,
  Percent,
  Mail,
  Building2,
  Zap
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState({});

  const toggleSection = (section) => {
    setCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const isActive = (path) => location.pathname === path;
  const isSectionActive = (paths) => paths.some(path => location.pathname.startsWith(path));

  const navSections = [
    {
      id: 'overview',
      title: 'OVERVIEW',
      items: [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/inbox', icon: Inbox, label: 'Inbox', badge: 5 },
      ]
    },
    {
      id: 'payments',
      title: 'PAYMENTS',
      items: [
        { path: '/pay-applications', icon: CreditCard, label: 'Pay Applications' },
        { path: '/lien-waivers', icon: FileText, label: 'Lien Waivers' },
        { path: '/retainage', icon: Percent, label: 'Retainage' },
      ]
    },
    {
      id: 'compliance',
      title: 'COMPLIANCE',
      items: [
        { path: '/insurance', icon: Shield, label: 'Insurance (COIs)' },
        { path: '/prequalification', icon: UserCheck, label: 'Prequalification' },
        { path: '/state-forms', icon: FileCheck, label: 'State Forms' },
        { path: '/audit-trail', icon: Clock, label: 'Audit Trail' },
      ]
    },
    {
      id: 'projects',
      title: 'PROJECTS',
      items: [
        { path: '/projects', icon: FolderOpen, label: 'All Projects' },
        { path: '/subcontractors', icon: Users, label: 'Subcontractors' },
        { path: '/contracts', icon: FileSignature, label: 'Contracts' },
        { path: '/change-orders', icon: FilePlus, label: 'Change Orders' },
      ]
    },
    {
      id: 'portals',
      title: 'PORTALS',
      items: [
        { path: '/sub-portal', icon: UserCircle, label: 'Sub Portal' },
        { path: '/owner-portal', icon: Home, label: 'Owner Portal' },
      ]
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Building2 size={24} />
          <span>ARCHV</span>
        </div>
        <span className="logo-sub">CONSTRUCTION</span>
      </div>

      <div className="archv-ink-box">
        <div className="archv-ink-header">
          <Star size={16} fill="currentColor" />
          <span className="archv-ink-title">Archv Ink</span>
        </div>
        <span className="archv-ink-subtitle">Drop files or ask anything</span>
      </div>

      <nav className="sidebar-nav">
        {navSections.map((section) => (
          <div key={section.id} className="nav-section">
            <div className="nav-section-title">{section.title}</div>
            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}

        <div className="nav-section">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <BarChart3 size={18} />
            <span>Reports</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">SYSTEM</div>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-footer">
        <span className="version">v1.0.0</span>
        <span className="brand">archv.ai</span>
      </div>
    </aside>
  );
};

export default Sidebar;
