import React from "react";

import classes from "./styles.module.css";
import { modifyLabel } from "../../helpers/utils";

function Table({ headerRows, rows, onDelete }) {
  return (
    <table>
      <tr>
        {headerRows.map((item) => (
          <th>{item.label}</th>
        ))}
      </tr>
      {rows.map((item, i) => (
        <tr key={i}>
          {headerRows.map((r) => (
            <>
              {r.id === "action" ? (
                <td onClick={() => onDelete(item.id)}>
                  <img style={{ height: 20, with: 20 }} src="./trash-bin.png" />
                </td>
              ) : (
                <>
                  {r.id === "address" ? (
                    <td>
                      <img
                        style={{ height: 18, with: 18, marginRight: 20 }}
                        src="./home.png"
                      />
                      {item[r.id]}
                    </td>
                  ) : (
                    <td
                      style={{
                        color: parseInt(item[r.id]) > 0 ? "black" : "red",
                      }}
                    >
                      {r.type === "number" ? `${item[r.id]} BOA` : item[r.id]}
                    </td>
                  )}
                </>
              )}
            </>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default Table;
