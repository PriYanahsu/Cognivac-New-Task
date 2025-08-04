import React, { useState } from 'react';

const DeshBoard = () => {
    const [modules, setModules] = useState([
        {
            name: 'Permissions',
            children: [
                { description: 'Tags', full: false, viewOnly: false, create: false, update: false, delete: false },
                { description: 'Drivers', full: false, viewOnly: false, create: false, update: false, delete: false },
                { description: 'Vehicles', full: false, viewOnly: false, create: false, update: false, delete: false },
            ]
        }
    ]);

    const handleParentToggle = (type) => {
        setModules(prev =>
            prev.map(parent => ({
                ...parent,
                children: parent.children.map(child => {
                    if (type === 'full') {
                        return {
                            ...child,
                            full: true,
                            viewOnly: false,
                            create: true,
                            update: true,
                            delete: true
                        };
                    } else if (type === 'viewOnly') {
                        return {
                            ...child,
                            full: false,
                            viewOnly: true,
                            create: false,
                            update: false,
                            delete: false
                        };
                    }
                    return child;
                })
            }))
        );
    };

    const handleChildChange = (parentIndex, childIndex, key) => {
        const updated = [...modules];
        const child = { ...updated[parentIndex].children[childIndex] };
        const newValue = !child[key];

        if (key === 'full') {
            child.full = newValue;
            child.viewOnly = false;
            child.create = newValue;
            child.update = newValue;
            child.delete = newValue;
        } else if (key === 'viewOnly') {
            child.viewOnly = newValue;
            child.full = false;
            child.create = false;
            child.update = false;
            child.delete = false;
        } else {
            child[key] = newValue;
            if (child[key]) child.viewOnly = false;
            const allSet = child.create && child.update && child.delete;
            child.full = allSet;
        }

        updated[parentIndex].children[childIndex] = child;
        setModules(updated);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Permissions Dashboard</h2>

            <div style={{ marginBottom: 10 }}>
                <label>
                    <input type="checkbox" onChange={() => handleParentToggle('full')} /> Full All
                </label>
                {'    '}
                <label>
                    <input type="checkbox" onChange={() => handleParentToggle('viewOnly')} /> View Only All
                </label>
            </div>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Full</th>
                        <th>View Only</th>
                        <th>Create</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {modules.map((module, parentIndex) =>
                        module.children.map((child, childIndex) => (
                            <tr key={`${parentIndex}-${childIndex}`}>
                                <td>{child.description}</td>
                                {['full', 'viewOnly', 'create', 'update', 'delete'].map(key => (
                                    <td key={key}>
                                        <input
                                            type="checkbox"
                                            checked={child[key]}
                                            onChange={() => handleChildChange(parentIndex, childIndex, key)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DeshBoard;
