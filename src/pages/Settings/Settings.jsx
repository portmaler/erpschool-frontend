import React from "react";
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Settings = () => {
  return (
    <div className="page-wrapper">
      <div className="content container mx-auto">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Settings</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/setting/page">Settings</a>
                </li>
                <li className="breadcrumb-item active">General Settings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="settings-menu-links">
          <ul className="flex nav nav-tabs menu-tabs">
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                General Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/localization-details">
                Localization
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payment-settings">
                Payment Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/email-settings">
                Email Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/social-settings">
                Social Media Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/social-links">
                Social Links
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/seo-settings">
                SEO Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/others-settings">
                Others
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Website Basic Details</h5>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group">
                      <label className="font-semibold">
                        Website Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Website Name"
                      />
                    </div>
                    <div className="form-group">
                      <p className="settings-label font-semibold">
                        Logo <span className="text-red-500">*</span>
                      </p>
                      <div className="settings-btn">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file"
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">
                          <i className="feather-upload"></i>
                        </label>
                      </div>
                      <h6 className="settings-size">
                        Recommended image size is{" "}
                        <span className="font-semibold">150px x 150px</span>
                      </h6>
                      <div className="upload-images">
                        <img src="/assets/img/logo.png" alt="Logo" />
                        <a
                          href="javascript:void(0);"
                          className="btn-icon logo-hide-btn"
                        >
                          <i className="fa fa-times-circle"></i>
                        </a>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="settings-label font-semibold">
                        Favicon <span className="text-red-500">*</span>
                      </p>
                      <div className="settings-btn">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file"
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">
                          <i className="feather-upload"></i>
                        </label>
                      </div>
                      <h6 className="settings-size">
                        Recommended image size is{" "}
                        <span className="font-semibold">
                          16px x 16px or 32px x 32px
                        </span>
                      </h6>
                      <h6 className="settings-size mt-1">
                        Accepted formats: only png and ico
                      </h6>
                      <div className="upload-images upload-size">
                        <img src="/assets/img/favicon.png" alt="Favicon" />
                        <a
                          href="javascript:void(0);"
                          className="btn-icon logo-hide-btn"
                        >
                          <i className="fa fa-times-circle"></i>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="form-group">
                          <div className="status-toggle flex justify-between items-center">
                            <p className="mb-0">RTL</p>
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                            />
                            <label
                              htmlFor="status_1"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button
                          type="submit"
                          className="btn btn-orange mr-2"
                        >
                          Update
                        </button>
                        <button type="submit" className="btn btn-grey">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Address Details</h5>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group">
                      <label className="font-semibold">
                        Address Line 1{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address Line 1"
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-semibold">
                        Address Line 2{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address Line 2"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="font-semibold">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="font-semibold">
                            State/Province{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select className="select form-control">
                            <option>Select</option>
                            <option>California</option>
                            <option>Tasmania</option>
                            <option>Auckland</option>
                            <option>Marlborough</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="font-semibold">
                            Zip/Postal Code{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="font-semibold">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select className="select form-control">
                            <option>Select</option>
                            <option>India</option>
                            <option>London</option>
                            <option>France</option>
                            <option>USA</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button
                          type="submit"
                          className="btn btn-orange mr-2"
                        >
                          Update
                        </button>
                        <button type="submit" className="btn btn-grey">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
