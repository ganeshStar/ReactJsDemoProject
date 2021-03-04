import React, { useEffect, useState, useCallback } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Col,
  Row,
  Table,
} from "react-bootstrap";
import Loader from "./Loader";
import { Messages } from "./MessageModal";
import { PoppupModal } from "./PoppupModal";
import { Address } from "../screens/Address";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [userItems, setUserItems] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [showMessage, setMessage] = useState({ message: "", show: false });
  const [showPopup, setShowPopup] = useState({ data: "", show: false });
  const [searchFlag, setSearchFlag] = useState(true);

  useEffect(() => {
    if (searchFlag) loadData();
    setSearchFlag(false);
  }, [searchText, searchFlag]);

  const handlerResetState = () => {
    setShowPopup((prevState) => ({
      ...prevState,
      show: false,
      title: "",
      data: "",
    }));
  };

  const loadData = () => {
    setIsLoading(false);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        if (searchText && setSearchText !== "") {
          if (json !== undefined && json.length > 0) {
            var searchedItems = json.filter(
              (ee) =>
                (ee.name !== undefined &&
                  ee.name.toLowerCase().includes(searchText.toLowerCase())) ||
                (ee.phone !== undefined &&
                  ee.phone.toLowerCase().includes(searchText.toLowerCase())) ||
                (ee.username !== undefined &&
                  ee.username
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) ||
                (ee.website !== undefined &&
                  ee.website
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) ||
                (ee.email !== undefined &&
                  ee.email.toLowerCase().includes(searchText.toLowerCase()))
            );
            setUserItems(searchedItems);
            setIsLoading(true);
          }
        } else {
          setUserItems(json);
          setIsLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
        setMessage((prevState) => ({
          ...prevState,
          message: "An error occurred while processing your request.",
          show: true,
        }));
      });
  };

  const address = (addr) => {
    return <Address props={addr}></Address>;
  };

  function showAddress(addr) {
    setShowPopup((prevState) => ({
      ...prevState,
      show: true,
      title: "Address",
      data: address(addr),
    }));
  }

  const renderTableItem = () => {
    let rows = [];
    if (userItems !== undefined && userItems.length > 0) {
      userItems.map((item, index) => {
        rows.push(
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.username}</td>
            <td>
              <a href={"http://" + item.website} target="blank">
                {item.website}
              </a>
            </td>
            <td>{item.email}</td>
            <td>
              <Button
                id={"key" + item.id}
                variant="info"
                size="sm"
                onClick={() => showAddress(item.address)}
              >
                Addr
              </Button>
            </td>
          </tr>
        );
      });
    }
    return rows;
  };

  const searchChange = (e) => {
    handlerResetState();
    setSearchText(e.target.value);
  };

  const searchHandler = () => {
    setSearchFlag(true);
    handlerResetState();
    loadData();
  };

  const clearSearchHandler = () => {
    setSearchFlag(true);
    setSearchText("");
    handlerResetState();
  };

  return (
    <>
      <br></br>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              onChange={searchChange}
              value={searchText}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={searchHandler}>
                Search
              </Button>
              <Button variant="secondary" onClick={clearSearchHandler}>
                Clear
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Messages params={showMessage}></Messages>
          <PoppupModal params={showPopup}></PoppupModal>
          <Loader show={!isloading}></Loader>
          {isloading && (
            <Table
              striped
              bordered
              hover
              variant="dark"
              style={{ marginTop: 15 }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>User Name</th>
                  <th>Website</th>
                  <th>Email</th>
                  <th>Addr</th>
                </tr>
              </thead>
              <tbody>{renderTableItem()}</tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Dashboard;
