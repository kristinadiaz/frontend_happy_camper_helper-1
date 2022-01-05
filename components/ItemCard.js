import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ItemCard({ item, handleAddItem }) {
    return (
      <Container>
            <div className="itemCard" style={{width: "15rem", height: "27rem"}}>
                <div className="item-image">
                    <img alt="display image!" src={item.image_url} width = "125rem" height="125rem" style={{objectFit: "scale-down"}}/>
                </div>
                <div className="content">
                    <div className="item-name">
                        <h2 style={{fontSize: "28px"}}>Item:</h2>
                        <p style={{fontSize: "18px"}}>{item.name}</p>
                    </div>
                    <div className="item-description">
                        <h4 style={{fontSize: "20px"}}>Description:</h4>
                        <p style={{fontSize: "14px"}}>{item.description}</p>
                    </div>
                </div>
                <div className="addItem">
                    <button type="button" class="btn btn-success" onClick={() => handleAddItem(item)}>ADD</button>
                </div>
            </div>
      </Container>
    )
}

