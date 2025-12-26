import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, Plus, Download } from 'lucide-react';
import './LienWaivers.css';

const LienWaivers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = [
    { label: 'TOTAL', value: 156 },
    { label: 'PENDING', value: 23 },
    { label: 'REQUESTED', value: 18 },
    { label: 'RECEIVED', value: 12 },
    { label: 'APPROVED', value: 98 },
  ];

  const waivers = [
    {
      id: 1,
      subcontractor: 'Martinez Electric Co.',
      payment: 'Payment #3',
      project: 'Downtown Office Complex',
      type: 'Conditional Progress',
      amount: 45000,
      dueDate: 'Dec 20, 2024',
      overdue: 37,
      status: 'pending',
    },
    {
      id: 2,
      subcontractor: 'Johnson Plumbing LLC',
      payment: 'Payment #2',
      project: 'Downtown Office Complex',
      type: 'Unconditional Progress',
      amount: 32000,
      dueDate: 'Dec 5, 2024',
      overdue: null,
      status: 'approved',
    },
    {
      id: 3,
      subcontractor: 'Superior Drywall Inc.',
      payment: 'Payment #4',
      project: 'Riverside Apartments',
      type: 'Conditional Progress',
      amount: 28500,
      dueDate: 'Dec 18, 2024',
      overdue: 37,
      status: 'requested',
    },
    {
      id: 4,
      subcontractor: 'ABC Roofing',
      payment: 'Payment #Final',
      project: 'Riverside Apartments',
      type: 'Conditional Final',
      amount: 125000,
      dueDate: 'Dec 22, 2024',
      overdue: 36,
      status: 'received',
    },
    {
      id: 5,
      subcontractor: 'Precision HVAC',
      payment: 'Payment #Final',
      project: 'Harbor View Hotel',
      type: 'Unconditional Final',
      amount: 89000,
      dueDate: 'Dec 1, 2024',
      overdue: null,
      status: 'approved',
    },
    {
      id: 6,
      subcontractor: 'Steel Structures Ltd.',
      payment: 'Payment #5',
      project: 'Downtown Office Complex',
      type: 'Conditional Progress',
      amount: 156000,
      dueDate: 'Nov 20, 2024',
      overdue: 40,
      status: 'expired',
    },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  const filteredWaivers = waivers.filter(waiver => {
    const matchesSearch = waiver.subcontractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          waiver.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || waiver.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      <div className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="table-filters">
            <div className="search-box">
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search waivers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              {statusFilter === 'all' ? 'All Status' : statusFilter}
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="table-actions">
            <button className="btn btn-secondary">
              <Download size={16} />
              Export CSV
            </button>
            <button className="btn btn-primary">
              <Plus size={16} />
              New Waiver
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subcontractor</th>
              <th>Project</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredWaivers.map((waiver) => (
              <tr key={waiver.id}>
                <td>
                  <div className="cell-primary">{waiver.subcontractor}</div>
                  <div className="cell-secondary">{waiver.payment}</div>
                </td>
                <td>{waiver.project}</td>
                <td>{waiver.type}</td>
                <td className="cell-amount">{formatAmount(waiver.amount)}</td>
                <td>
                  <div className="cell-date">{waiver.dueDate}</div>
                  {waiver.overdue && (
                    <div className="cell-overdue">{waiver.overdue}d overdue</div>
                  )}
                </td>
                <td>
                  <span className={getStatusClass(waiver.status)}>
                    {waiver.status}
                  </span>
                </td>
                <td>
                  <div className="action-cell">
                    {waiver.status === 'pending' && (
                      <button className="action-btn">Send</button>
                    )}
                    {waiver.status === 'received' && (
                      <button className="action-btn">Approve</button>
                    )}
                    <button className="action-menu">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="showing-text">Showing {filteredWaivers.length} of {waivers.length} waivers</span>
          <div className="pagination">
            <button>Previous</button>
            <span>Page 1</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienWaivers;
