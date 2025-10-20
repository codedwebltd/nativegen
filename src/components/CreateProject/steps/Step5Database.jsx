import { useState } from 'react';

// Step 5: Database & Entities Component
function Step5Database({ data, updateData }) {
  const [showAddEntity, setShowAddEntity] = useState(false);
  const [newEntity, setNewEntity] = useState({
    name: '',
    fields: []
  });
  const [newField, setNewField] = useState({
    name: '',
    type: 'string'
  });

  const fieldTypes = [
    { value: 'string', label: 'String (Text)', icon: '📝' },
    { value: 'integer', label: 'Integer (Number)', icon: '🔢' },
    { value: 'boolean', label: 'Boolean (True/False)', icon: '✓' },
    { value: 'date', label: 'Date', icon: '📅' },
    { value: 'datetime', label: 'DateTime', icon: '🕐' },
    { value: 'float', label: 'Float (Decimal)', icon: '💯' },
    { value: 'text', label: 'Text (Long)', icon: '📄' },
    { value: 'json', label: 'JSON', icon: '{ }' }
  ];

  const addFieldToEntity = () => {
    if (newField.name.trim()) {
      setNewEntity(prev => ({
        ...prev,
        fields: [...prev.fields, { ...newField }]
      }));
      setNewField({ name: '', type: 'string' });
    }
  };

  const removeFieldFromEntity = (index) => {
    setNewEntity(prev => ({
      ...prev,
      fields: prev.fields.filter((_, i) => i !== index)
    }));
  };

  const saveEntity = () => {
    if (newEntity.name.trim() && newEntity.fields.length > 0) {
      updateData('database.entities', [...data.entities, newEntity]);
      setNewEntity({ name: '', fields: [] });
      setShowAddEntity(false);
    }
  };

  const deleteEntity = (index) => {
    updateData('database.entities', data.entities.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Database Type Selection */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Database Type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => updateData('database.type', 'room')}
            className={`px-4 py-3 rounded-lg border-2 transition ${
              data.type === 'room'
                ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
            }`}
          >
            <div className="font-semibold">Room (Android)</div>
            <div className="text-xs mt-1">SQLite wrapper</div>
          </button>
          <button
            onClick={() => updateData('database.type', 'coredata')}
            className={`px-4 py-3 rounded-lg border-2 transition ${
              data.type === 'coredata'
                ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
            }`}
          >
            <div className="font-semibold">Core Data (iOS)</div>
            <div className="text-xs mt-1">Apple's framework</div>
          </button>
          <button
            onClick={() => updateData('database.type', 'sqlite')}
            className={`px-4 py-3 rounded-lg border-2 transition ${
              data.type === 'sqlite'
                ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
            }`}
          >
            <div className="font-semibold">SQLite</div>
            <div className="text-xs mt-1">Direct SQL</div>
          </button>
        </div>
      </div>

      {/* Entities List */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Database Entities</h2>
          <button
            onClick={() => setShowAddEntity(true)}
            className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-medium transition"
          >
            + Add Entity
          </button>
        </div>

        {data.entities && data.entities.length > 0 ? (
          <div className="space-y-3">
            {data.entities.map((entity, idx) => (
              <div key={idx} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <span className="text-[#58a6ff]">📊</span>
                    {entity.name}
                  </h3>
                  <button
                    onClick={() => deleteEntity(idx)}
                    className="text-[#ef4444] hover:text-[#f87171] transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-2">
                  {entity.fields.map((field, fieldIdx) => (
                    <div key={fieldIdx} className="flex items-center justify-between text-sm">
                      <span className="text-[#c9d1d9]">{field.name}</span>
                      <span className="text-[#8b949e] bg-[#161b22] px-2 py-1 rounded">
                        {field.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            </svg>
            <p className="text-[#8b949e]">No entities added yet. Click "Add Entity" to start building your database.</p>
          </div>
        )}
      </div>

      {/* Add Entity Modal */}
      {showAddEntity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Add New Entity</h3>
              <button
                onClick={() => {
                  setShowAddEntity(false);
                  setNewEntity({ name: '', fields: [] });
                  setNewField({ name: '', type: 'string' });
                }}
                className="text-[#8b949e] hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Entity Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Entity Name <span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="text"
                value={newEntity.name}
                onChange={(e) => setNewEntity(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., User, Product, Order"
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
              />
            </div>

            {/* Add Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Add Fields
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newField.name}
                  onChange={(e) => setNewField(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Field name"
                  className="flex-1 px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                />
                <select
                  value={newField.type}
                  onChange={(e) => setNewField(prev => ({ ...prev, type: e.target.value }))}
                  className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                >
                  {fieldTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={addFieldToEntity}
                  className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium transition"
                >
                  Add
                </button>
              </div>

              {/* Fields List */}
              {newEntity.fields.length > 0 && (
                <div className="space-y-2 bg-[#0d1117] border border-[#30363d] rounded-lg p-3">
                  {newEntity.fields.map((field, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-white">{field.name}</span>
                        <span className="text-[#8b949e] bg-[#161b22] px-2 py-1 rounded text-xs">
                          {field.type}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFieldFromEntity(idx)}
                        className="text-[#ef4444] hover:text-[#f87171] transition"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Save Button */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddEntity(false);
                  setNewEntity({ name: '', fields: [] });
                  setNewField({ name: '', type: 'string' });
                }}
                className="px-4 py-2 border border-[#30363d] rounded-lg text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={saveEntity}
                disabled={!newEntity.name.trim() || newEntity.fields.length === 0}
                className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Entity
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step5Database;