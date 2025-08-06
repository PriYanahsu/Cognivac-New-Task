import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Toggle = () => {
    const [data, setData] = useState([
        {
            fullAll: false,
            viewOnly: false,
            children: [
                {
                    id: "1",
                    name: "DeshBoard1",
                    fullAll: false,
                    viewOnly: false,
                    children: [
                        { id: 11, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false },
                        { id: 12, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false },
                        { id: 13, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false }
                    ]
                },
                {
                    id: "2",
                    name: "DeshBoard2",
                    fullAll: false,
                    viewOnly: false,
                    children: [
                        { id: 21, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false },
                        { id: 22, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false },
                        { id: 23, Description: "Driver", full: false, viewOnly: false, create: false, update: false, delete: false }
                    ]
                }
            ]
        }
    ]);

    // useEffect(()=> {
    //     const response = axios.get("/database.js");
    //     setData(response.data);
    // }, [])

    const updateParentStates = (parent) => {
        const updatedChildren = parent.children.map(child => {
            const fullAll = child.children.every(gc => gc.full);
            const viewOnly = child.children.every(gc => gc.viewOnly);
            return {
                ...child,
                fullAll,
                viewOnly
            };
        });

        const fullAll = updatedChildren.every(c => c.fullAll);
        const viewOnly = updatedChildren.every(c => c.viewOnly);

        return {
            ...parent,
            children: updatedChildren,
            fullAll,
            viewOnly
        };
    };


    const handleGrandParentFullAll = () => {
        setData(prev =>
            prev.map(parent => {
                const newValue = !parent.fullAll;
                const updatedParent = {
                    ...parent,
                    fullAll: newValue,
                    viewOnly: false,
                    children: parent.children.map(child => ({
                        ...child,
                        fullAll: newValue,
                        viewOnly: false,
                        children: child.children.map(gc => ({
                            ...gc,
                            full: newValue,
                            create: newValue,
                            update: newValue,
                            delete: newValue,
                            viewOnly: false
                        }))
                    }))
                };
                return updateParentStates(updatedParent);
            })
        );
    };

    const handleGrandParentViewOnly = () => {
        setData(prev =>
            prev.map(parent => {
                const newValue = !parent.viewOnly;
                const updatedParent = {
                    ...parent,
                    fullAll: false,
                    viewOnly: newValue,
                    children: parent.children.map(child => ({
                        ...child,
                        fullAll: false,
                        viewOnly: newValue,
                        children: child.children.map(gc => ({
                            ...gc,
                            full: false,
                            create: false,
                            update: false,
                            delete: false,
                            viewOnly: newValue
                        }))
                    }))
                };
                return updateParentStates(updatedParent);
            })
        );
    };

    const handleParentFullAll = (id) => {
        setData(prev =>
            prev.map(parent => {
                const updatedParent = {
                    ...parent,
                    children: parent.children.map(child => {
                        if (child.id === id) {
                            const newValue = !child.fullAll;
                            return {
                                ...child,
                                fullAll: newValue,
                                viewOnly: false,
                                children: child.children.map(gc => ({
                                    ...gc,
                                    full: newValue,
                                    create: newValue,
                                    update: newValue,
                                    delete: newValue,
                                    viewOnly: false
                                }))
                            };
                        }
                        return child;
                    })
                };
                return updateParentStates(updatedParent);
            })
        );
    };

    const handleParentViewOnly = (id) => {
        setData(prev =>
            prev.map(parent => {
                const updatedParent = {
                    ...parent,
                    children: parent.children.map(child => {
                        if (child.id === id) {
                            const newValue = !child.viewOnly;
                            return {
                                ...child,
                                fullAll: false,
                                viewOnly: newValue,
                                children: child.children.map(gc => ({
                                    ...gc,
                                    full: false,
                                    create: false,
                                    update: false,
                                    delete: false,
                                    viewOnly: newValue
                                }))
                            };
                        }
                        return child;
                    })
                };
                return updateParentStates(updatedParent);
            })
        );
    };

    const handleChild = (parentId, childId, field) => {
        setData(prev =>
            prev.map(parent => {
                let updatedParent = { ...parent };

                updatedParent.children = updatedParent.children.map(child => {
                    if (child.id === parentId) {
                        return {
                            ...child,
                            children: child.children.map(gc => {
                                if (gc.id === childId) {
                                    let updated = { ...gc };

                                    if (field === "viewOnly") {
                                        const newVal = !gc.viewOnly;
                                        updated = {
                                            ...updated,
                                            viewOnly: newVal,
                                            full: false,
                                            create: false,
                                            update: false,
                                            delete: false
                                        };
                                        return updated;
                                    }

                                    if (field === "full") {
                                        const newVal = !gc.full;
                                        updated = {
                                            ...updated,
                                            full: newVal,
                                            create: newVal,
                                            update: newVal,
                                            delete: newVal,
                                            viewOnly: false
                                        };
                                        return updated;
                                    }

                                    updated[field] = !updated[field];
                                    updated.viewOnly = false;
                                    updated.full = updated.create && updated.update && updated.delete;

                                    return updated;
                                }
                                return gc;
                            })
                        };
                    }
                    return child;
                });

                return updateParentStates(updatedParent);
            })
        );
    };

    return (
        <div>
            <h2>Desh-Board</h2>
            <label>
                <input type="checkbox" checked={data.fullAll} onChange={handleGrandParentFullAll} /> Full All
            </label>
            <label>
                <input type="checkbox" checked={data.viewOnly} onChange={handleGrandParentViewOnly} /> View Only
            </label>

            {data[0].children.map((child, index) => (
                <div key={index}>
                    <h3>{child.name}</h3>
                    <label>
                        <input type="checkbox" checked={child.fullAll} onChange={() => handleParentFullAll(child.id)} /> Full All
                    </label>
                    <label>
                        <input type="checkbox" checked={child.viewOnly} onChange={() => handleParentViewOnly(child.id)} /> View Only
                    </label>

                    <table border="5" cellPadding="8" style={{ marginTop: "10px" }}>
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
                            {child.children.map((gc, idx) => (
                                <tr key={idx}>
                                    <td>{gc.Description}</td>
                                    <td><input type="checkbox" checked={gc.full} onChange={() => handleChild(child.id, gc.id, "full")} /></td>
                                    <td><input type="checkbox" checked={gc.viewOnly} onChange={() => handleChild(child.id, gc.id, "viewOnly")} /></td>
                                    <td><input type="checkbox" checked={gc.create} onChange={() => handleChild(child.id, gc.id, "create")} /></td>
                                    <td><input type="checkbox" checked={gc.update} onChange={() => handleChild(child.id, gc.id, "update")} /></td>
                                    <td><input type="checkbox" checked={gc.delete} onChange={() => handleChild(child.id, gc.id, "delete")} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Toggle;
