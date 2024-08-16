import React, { Component } from 'react';


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
    },
    dropZone: {
        width: '45%',
        minHeight: '300px',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        padding: '10px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'move',
        transition: 'background-color 0.3s',
    },
    listItemImg: {
        width: '20px',
        height: '20px',
        marginRight: '10px',
    },
    listItemHover: {
        backgroundColor: '#e1e1e1',
    },
};

class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftItems: [
                { id: 1, name: 'List Item 1' },
                { id: 2, name: 'List Item 2' },
                { id: 3, name: 'List Item 3' },
                { id: 4, name: 'List Item 4' },
            ],
            rightItems: [],
        };
    }

    onDragStart = (e, index, fromLeft) => {
        e.dataTransfer.setData('itemIndex', index);
        e.dataTransfer.setData('fromLeft', fromLeft);
    };

    onDrop = (e, targetLeft) => {
        const itemIndex = e.dataTransfer.getData('itemIndex');
        const fromLeft = e.dataTransfer.getData('fromLeft') === 'true';

        if (fromLeft && !targetLeft) {
            this.setState(prevState => ({
                rightItems: [...prevState.rightItems, prevState.leftItems[itemIndex]],
                leftItems: prevState.leftItems.filter((_, i) => i !== parseInt(itemIndex)),
            }));
        } else if (!fromLeft && targetLeft) {
            this.setState(prevState => ({
                leftItems: [...prevState.leftItems, prevState.rightItems[itemIndex]],
                rightItems: prevState.rightItems.filter((_, i) => i !== parseInt(itemIndex)),
            }));
        }
    };

    render() {
        const { leftItems, rightItems } = this.state;

        return (
            <div style={styles.container}>
                <div
                    id="left"
                    style={styles.dropZone}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.onDrop(e, true)}
                >
                    {leftItems.map((item, index) => (
                        <div
                            key={item.id}
                            style={styles.listItem}
                            draggable
                            onDragStart={(e) => this.onDragStart(e, index, true)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <img src="./drag_drop_icon.png" alt="" style={styles.listItemImg} />
                            {item.name}
                        </div>
                    ))}
                </div>
                <div
                    id="right"
                    style={styles.dropZone}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.onDrop(e, false)}
                >
                    {rightItems.map((item, index) => (
                        <div
                            key={item.id}
                            style={styles.listItem}
                            draggable
                            onDragStart={(e) => this.onDragStart(e, index, false)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <img src="./drag_drop_icon.png" alt="" style={styles.listItemImg} />
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DragAndDrop;
