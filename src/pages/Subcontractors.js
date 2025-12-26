import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, Building2, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Subcontractors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const subcontractors = [
    {
      id: 1,
      name: 'Martinez Electric Co.',
      trade: 'Electrical',
      contact: 'Carlos Martinez',
      email: 'carlos@martinezelectric.com',
      phone: '(555) 123-4567',
      activeProjects: 2,
      compliance: 'compliant',
      totalBilled: 385000,
    },
    {
      id: 2,
      name: 'Johnson Plumbing LLC',
      trade: 'Plumbing',
      contact: 'Mike Johnson',
      email: 'mike@johnsonplumbing.com',
      phone: '(555) 234-5678',
      activeProjects: 1,
      compliance: 'compliant',
      totalBilled: 280000,
    },
    {
      id: 3,
      name: 'Superior Drywall Inc.',
      trade: 'Drywall',
      contact: 'Sarah Chen',
      email: 'sarah@superiordrywall.com',
      phone: '(555) 345-6789',
      activeProjects: 2,
      compliance: 'issue',
      totalBilled: 142000,
    },
    {
      id: 4,
      name: 'ABC Roofing',
      trade: 'Roofing',
      contact: 'Tom Williams',
      email: 'tom@abcroofing.com',
      phone: '(555) 456-7890',
      activeProjects: 1,
      compliance: 'compliant',
      totalBilled: 250000,
    },
    {
      id: 5,
      name: 'Precision HVAC',
      trade: 'HVAC',
      contact: 'Lisa Park',
      email: 'lisa@precisionhvac.com',
      phone: '(555) 567-8901',
      activeProjects: 1,
      compliance: 'compliant',
      totalBilled: 320000,
    },
    {
      id: 6,
      name: 'Steel Structures Ltd.',
      trade: 'Structural Steel',
      contact: 'James Wilson',
      email: 'james@steelstructures.com',
      phone: '(555) 678-9012',
      activeProjects: 1,
      compliance: 'issue',
      totalBilled: 480000,
    },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Subcontractors</h1>
          <p className="page-subtitle">Manage your subcontractor directory</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          Add Subcontractor
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="search-box" style={{ width: '350px' }}>
            <Search size={18} color="#999" />
            <input
              type="text"
              placeholder="Search subcontractors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Trade</th>
              <th>Contact</th>
              <th>Active Projects</th>
              <th>Total Billed</th>
              <th>Compliance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subcontractors.map((sub) => (
              <tr key={sub.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={20} color="#666" />
                    </div>
                    <div>
                      <div className="cell-primary">{sub.name}</div>
                      <div className="cell-secondary">{sub.email}</div>
                    </div>
                  </div>
                </td>
                <td>{sub.trade}</td>
                <td>
                  <div>{sub.contact}</div>
                  <div className="cell-secondary">{sub.phone}</div>
                </td>
                <td>{sub.activeProjects}</td>
                <td className="cell-amount">{formatAmount(sub.totalBilled)}</td>
                <td>
                  {sub.compliance === 'compliant' ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669' }}>
                      <CheckCircle size={16} />
                      Compliant
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#dc2626' }}>
                      <AlertCircle size={16} />
                      Issues
                    </span>
                  )}
                </td>
                <td>
                  <button className="action-menu">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="showing-text">Showing {subcontractors.length} subcontractors</span>
        </div>
      </div>
    </div>
  );
};

export default Subcontractors;
