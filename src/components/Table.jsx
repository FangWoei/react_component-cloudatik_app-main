import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import "../styles/table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Table = ({ backgroundColor, label, label2, color, ...props }) => {
  const [input, setInput] = useState("");
  const [labels, setLabels] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedIconColor, setSelectedIconColor] = useState("");
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedList);
  }, []);

  const addList = () => {
    const newList = [...list];

    newList.push({
      id: nanoid(),
      text: `${input}`,
      label: labels,
      isCompleted: false,
      taskId: id,
      icon: selectedIcon,
      iconColor: selectedIconColor,
    });

    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));

    setInput("");
    setLabels("");
    setSelectedIcon("");
    setSelectedIconColor("");
  };

  const deleteItem = (itemId) => {
    const newList = list.filter((item) => item.id !== itemId);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const iconOptions = [
    "home_vpd",
    "home_water",
    "cloud_temp",
    "cloud_water",
    "cloud_vpd",
    "icon-sun",
    "total_radiation",
    "water_ec",
    "water_ph",
    "water_temp",
    "pump_state",
  ];

  const iconColorOptions = [
    "#34382D",
    "#E3242B",
    "#FFA500",
    "#525453",
    "#A5D071",
    "#044128",
    "#28AE8A",
    "#12758B",
    "#259DD7",
  ];

  return (
    <>
      <div style={{ marginBottom: "50px", display: "flex" }}>
        <select
          value={selectedIcon}
          style={{ marginRight: "20px" }}
          onChange={(event) => setSelectedIcon(event.target.value)}>
          <option value="" disabled>
            Select Icon
          </option>
          {iconOptions.map((icon) => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>

        <select
          value={selectedIconColor}
          style={{ marginRight: "20px" }}
          onChange={(event) => setSelectedIconColor(event.target.value)}>
          <option value="" disabled>
            Select Color
          </option>
          {iconColorOptions.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {selectedIconColor && (
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              margin: "5px",
              backgroundColor: selectedIconColor,
              marginRight: "20px",
            }}></div>
        )}

        <input
          type="text"
          className="form-control"
          placeholder="title"
          name="title"
          style={{ marginRight: "20px" }}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="label"
          name="label"
          style={{ marginRight: "20px" }}
          value={labels}
          onChange={(event) => setLabels(event.target.value)}
        />

        <button
          onClick={(event) => {
            event.preventDefault();
            addList();
          }}>
          Add
        </button>
      </div>

      <div className="table" style={backgroundColor && { backgroundColor }}>
        <div>
          <div
            className="title"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              background: "transparent",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "transparent",
              }}>
              <svg
                fill={color}
                width="80px"
                height="80px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2 style={{ order: 1, margin: 0 }}>{label}</h2>
                <p style={{ order: 2, color: "grey", margin: 0 }}>{label2}</p>
              </div>
            </div>
          </div>
          <Row>
            {list.map((item, index) => (
              <React.Fragment key={item.id}>
                <Col style={{ background: "transparent" }}>
                  <div
                    className="data"
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <div>
                      {item.icon && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                          <svg fill={item.iconColor} width="30px" height="25px">
                            <use
                              xlinkHref={`src/stories/assets/all_icons.svg#${item.icon}`}
                            />
                          </svg>
                        </div>
                      )}
                      <h4 style={{ textAlign: "center" }}>{item.text}</h4>
                      <p style={{ textAlign: "center", color: "grey" }}>
                        {item.label}
                      </p>
                      <button onClick={() => deleteItem(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </Col>
                {index % 3 === 2 && (
                  <Row style={{ background: "transparent" }} />
                )}{" "}
              </React.Fragment>
            ))}
            {list.length % 3 !== 0 && (
              <React.Fragment>
                {[...Array(3 - (list.length % 3))].map((_, index) => (
                  <Col
                    style={{ background: "transparent" }}
                    key={`empty-${index}`}
                  />
                ))}
              </React.Fragment>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

Table.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  label2: PropTypes.string,
};

Table.defaultProps = {
  backgroundColor: null,
  color: "red",
  label: "Card 1",
  label2: "Card 1",
};
