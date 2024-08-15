import React, { useState } from 'react';

function DragAndDrop() {
    const [leftItems, setLeftItems] = useState([
        { id: 1, name: 'List Item 1' },
        { id: 2, name: 'List Item 2' },
        { id: 3, name: 'List Item 3' },
        { id: 4, name: 'List Item 4' },
    ]);

    const [rightItems, setRightItems] = useState([]);

    const onDragStart = (e, index, fromLeft) => {
        e.dataTransfer.setData('itemIndex', index);
        e.dataTransfer.setData('fromLeft', fromLeft);
    };

    const onDrop = (e, targetLeft) => {
        const itemIndex = e.dataTransfer.getData('itemIndex');
        const fromLeft = e.dataTransfer.getData('fromLeft') === 'true';

        if (fromLeft && !targetLeft) {
            setRightItems([...rightItems, leftItems[itemIndex]]);
            setLeftItems(leftItems.filter((_, i) => i !== parseInt(itemIndex)));
        } else if (!fromLeft && targetLeft) {
            setLeftItems([...leftItems, rightItems[itemIndex]]);
            setRightItems(rightItems.filter((_, i) => i !== parseInt(itemIndex)));
        }
    };

    return (
        <div className="container">
            <div id="left" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, true)}>
                {leftItems.map((item, index) => (<div key={item.id} className="list" draggableonDragStart={(e) => onDragStart(e, index, true)}> <img src="./drag_drop_icon.png" alt="" />{item.name}</div>))}
            </div>
            <div id="right" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, false)}>
                {rightItems.map((item, index) => (<div key={item.id} className="list" draggable onDragStart={(e) => onDragStart(e, index, false)}> <img src="./drag_drop_icon.png" alt="" />{item.name}</div>))}
            </div>
        </div>
    );
}

export default DragAndDrop;
