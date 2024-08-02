
import React, { useState, useCallback } from 'react';
import { DraggableRow } from './DraggableRow';

export const Table = ({ columns, data }) => {
    const [rows, setRows] = useState(data);
  
    const moveRow = useCallback((dragIndex, hoverIndex) => {
      const dragRow = rows[dragIndex];
      const newRows = [...rows];
      newRows.splice(dragIndex, 1);
      newRows.splice(hoverIndex, 0, dragRow);
      setRows(newRows);
    }, [rows]);
  
    return (
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.field}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <DraggableRow key={index} index={index} moveRow={moveRow}>
              {columns.map((col) => (
                <td key={col.field}>{row[col.field]}</td>
              ))}
            </DraggableRow>
          ))}
        </tbody>
      </table>
    );
  };