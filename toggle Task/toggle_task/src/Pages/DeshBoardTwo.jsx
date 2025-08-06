import React, { useState, useEffect } from 'react';

const DeshBoardTwo = ({ isParentCheckedFullAll, isParentCheckedViewAll, fullTwoChecked, viewAllTwoChecked }) => {
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

    useEffect(() => {
        setModules(prev =>
            prev.map(parent => ({
                ...parent,
                children: parent.children.map(child => ({
                    ...child,
                    full: isParentCheckedFullAll,
                    create: isParentCheckedFullAll,
                    update: isParentCheckedFullAll,
                    delete: isParentCheckedFullAll,
                    viewOnly: false,
                }))
            }))
        );
    }, [isParentCheckedFullAll]);

    useEffect(() => {
        setModules(prev =>
            prev.map(parent => ({
                ...parent,
                children: parent.children.map(child => ({
                    ...child,
                    viewOnly: isParentCheckedViewAll,
                    full: false,
                    create: false,
                    update: false,
                    delete: false,
                }))
            }))
        );
    }, [isParentCheckedViewAll]);

    const isFullAllChecked = modules.every(module =>
        module.children.every(child => child.full && child.create && child.update && child.delete && !child.viewOnly
        )
    );
    const isViewOnlyAllChecked = modules.every(module =>
        module.children.every(child => child.viewOnly && !child.full && !child.create && !child.update && !child.delete
        )
    );

    useEffect(() => {
        fullTwoChecked(isFullAllChecked)
    }, [isFullAllChecked])

    useEffect(() => {
        viewAllTwoChecked(isViewOnlyAllChecked)
    }, [isViewOnlyAllChecked])

    const handleParentToggle = (type, checked) => {
        setModules(prev =>
            prev.map(parent => ({
                ...parent,
                children: parent.children.map(child => {
                    if (type === 'full') {
                        return {
                            ...child,
                            full: checked,
                            viewOnly: false,
                            create: checked,
                            update: checked,
                            delete: checked
                        };
                    } else if (type === 'viewOnly') {
                        return {
                            ...child,
                            full: false,
                            viewOnly: checked,
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
            if (newValue) child.viewOnly = false;
            const allSet = child.create && child.update && child.delete;
            child.full = allSet;
        }

        updated[parentIndex].children[childIndex] = child;
        setModules(updated);
    };


    return (
        <div style={{ padding: 20 }}>
            <h2>Permissions Dashboard11</h2>

            <div style={{ marginBottom: 10 }}>
                <label>
                    <input type="checkbox"
                        checked={isFullAllChecked}
                        onChange={(e) => handleParentToggle('full', e.target.checked)} /> Full All
                </label>
                {'    '}
                <label>
                    <input type="checkbox"
                        checked={isViewOnlyAllChecked}
                        onChange={(e) => handleParentToggle('viewOnly', e.target.checked)} /> View Only All
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

export default DeshBoardTwo;
