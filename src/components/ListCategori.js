import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { API_URL } from "../utils/constanst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="margin" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} className="margins"/>;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="margin" />;
};

export default class ListCategori extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>List Category</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={categoriYangDipilih === category.nama && "category-aktif"}
                style={{ cursor : 'pointer' }}
              >
                <h5>
                  <Icon nama={category.nama} />
                  {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
