import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'

import { connect } from "react-redux";

import {changeLayout, changeLayoutWidth, changeSidebarTheme, changeSidebarType, changeTopbarTheme, showRightSidebarAction} from '../../store/layout.reducer'

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

//Import images
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

const RightSidebar = props => {
  const {state} = useSelector(state => state)
  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault();
                  props.showRightSidebarAction(false);
                }}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value="vertical"
                  checked={props.layoutType === "vertical"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value);
                    }
                  }}
                />
                <label htmlFor="radioVertical">Vertical</label>
                {"   "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value="horizontal"
                  checked={props.layoutType === "horizontal"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value);
                    }
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  checked={props.layoutWidth === "fluid"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value);
                    }
                  }}
                />{" "}
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  checked={props.layoutWidth === "boxed"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value);
                    }
                  }}
                />{" "}
                <label htmlFor="radioBoxed">Boxed</label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value="light"
                  checked={props.topbarTheme === "light"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value);
                    }
                  }}
                />
                <label htmlFor="radioThemeLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  checked={props.topbarTheme === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value);
                    }
                  }}
                />

                <label htmlFor="radioThemeDark">Dark</label>
                {"   "}
              </div>

              {props.layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type{" "}
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value="default"
                      checked={props.leftSideBarType === "default"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value);
                        }
                      }}
                    />
                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value="compact"
                      checked={props.leftSideBarType === "compact"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value);
                        }
                      }}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value="icon"
                      checked={props.leftSideBarType === "icon"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value);
                        }
                      }}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color
                    </span>
                    <input
                      type="radio"
                      id="leftsidebarThemelight"
                      name="leftsidebarTheme"
                      value="light"
                      checked={props.leftSideBarTheme === "dark"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme('dark');
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemelight">Light</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemedark"
                      name="leftsidebarTheme"
                      value="dark"
                      checked={props.leftSideBarTheme === "dark"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme("dark");
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemedark">Dark</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemecolored"
                      name="leftsidebarTheme"
                      value="colored"
                      checked={props.leftSideBarTheme === "colored"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme("dark");
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemecolored">Colored</label>
                  </div>
                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}

            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  );
};



export default RightSidebar
