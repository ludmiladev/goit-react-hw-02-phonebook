import React, { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContactsDiv = styled.div`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;

  width: 342px;
  background: #fff;
  border: 2px solid #212121;
  border-radius: 10px;
`;

const Label = styled.label`
  display: block;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;
const LabelSpan = styled.span`
  display: block;
  margin-left: 15px;
`;
const Input = styled.input`
  display: block;
  margin: 0 auto;
  padding-left: 10px;
  width: 280px;
  height: 40px;
  background: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const Ul = styled.ul`
  padding: 0;
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  padding: 5px 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;

  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;

class Contacts extends Component {
  handlerInputChange = (e) => {
    this.props.onAddFilter(e.target.value);
  };
  render() {
    return (
      <ContactsDiv>
        <Label>
          <LabelSpan>Find contacts by name</LabelSpan>
          <Input
            type="text"
            name="search"
            value={this.props.onGetFilter()}
            onChange={this.handlerInputChange}
          />
        </Label>
        <Ul>
          {this.props.contacts().map((contact, index) => (
            <Li key={contact.id}>
              <ContactItem
                {...contact}
                index={index}
                onDeleteContact={this.props.onDeleteContact}
              />
            </Li>
          ))}
        </Ul>
      </ContactsDiv>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  onAddFilter: PropTypes.func.isRequired,
  onGetFilter: PropTypes.func.isRequired,
  contacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
