import {Menu} from "@headlessui/react";
import styled from "styled-components";

const MenuItemsWrapper = styled.div`
  position: absolute;
  top: 80px;
  z-index: 9;
  background: rgba(51, 51, 51, 0.77);
  border: 1px solid rgba(0, 0, 0, 0.41);
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 200px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;

    input[type="checkbox"] {
      width: 15px;
      height: 15px;
      cursor: pointer;
      // change color checkbox to green
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #153300;
      border: 1px solid #00ff19;
      border-radius: 5px;
        outline: none;
        &:checked {
          background-color: #00ff19;
        }

    }
  }
`;

const ButtonToggle = styled.button`
  background-color: #153300;
  border: 1px solid #00ff19;
  border-radius: 5px;
  color: #000;
  box-shadow: -1px 1px 14px rgb(0 0 0 / 15%), 0px 19px 16px rgb(0 0 0 / 9%);
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #00ff19;
  margin-right: 7px;

  &:hover {
    background-color: #00ff19;
    color: #000;
  }
`;

const FilterComponent = ({filter, setFilter}) => {
    return (
        <Menu>
            {({open}) => (
                <>
                    <Menu.Button as={ButtonToggle}>Filter</Menu.Button>
                    {open && (
                        <Menu.Items as={MenuItemsWrapper}>
                            <Menu.Item as="div" disabled>
                                <span>DAI</span>
                                <input type="checkbox" checked={filter.dai}
                                       onChange={() => setFilter({...filter, dai: !filter.dai})}/>
                            </Menu.Item>
                            <Menu.Item as="div" disabled>
                                <span>USDT</span>
                                <input type="checkbox" checked={filter?.usdt}
                                       onChange={() => setFilter({...filter, usdt: !filter.usdt})}/>
                            </Menu.Item>
                            <Menu.Item as="div" disabled>
                                <span>USDC</span>
                                <input type="checkbox" checked={filter?.usdc}
                                       onChange={() => setFilter({...filter, usdc: !filter.usdc})}/>
                            </Menu.Item>

                        </Menu.Items>
                    )}
                </>
            )}
        </Menu>
    )
}

export default FilterComponent;