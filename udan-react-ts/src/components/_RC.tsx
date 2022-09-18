/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render recorded sequences
 * Associated Route/Usage: *
 */

import React, { useEffect } from "react";
import "../App.scss";
import { BsFillPencilFill } from "react-icons/bs";
import { setToStore, postRecordSequenceData } from "../util";
import { CONFIG } from "../config";

export interface MProps {
  sequenceName?: string;
  isShown?: boolean;
  hide?: () => void;
  data?: any;
  refetchSearch?: Function;
  recordHandler?: Function;
}

/**
 * To render recorded sequence elements
 * @returns HTML Elements
 */

export const RecordedSeq = (props: MProps) => {
  const [name, setName] = React.useState<string>("");
  const [cloneData, setCloneData] = React.useState<any>(
    JSON.parse(JSON.stringify(props.data))
  );

  React.useEffect(() => {
    const _cData = JSON.parse(JSON.stringify(props.data));
    _cData?.forEach((element: any) => {
      element.editable = false;
    });
    setCloneData([..._cData]);
  }, []);

  const setEdit = (index: number) => {
    cloneData[index].editable = !cloneData[index]?.editable;
  };

  const renderData = () => {
    if (!props.isShown) return;
    else
      return props.data?.map((item: any, index: number) => {
        return (
          <li className="uda-recorded-label-editable completed">
            <i>
              <span id="uda-display-clicked-text">{item?.clickednodename}</span>
              <span>
                <button
                  className="uda-tutorial-btn"
                  style={{ padding: "0px" }}
                  type="button"
                  id="uda-edit-clickedname"
                  onClick={() => setEdit(index)}
                >
                  <BsFillPencilFill />
                </button>
              </span>
              {cloneData[index].editable && (
                <input
                  type="text"
                  id="uda-edited-name"
                  name="uda-edited-name"
                  className="uda-form-input"
                  placeholder="Enter Name"
                  defaultValue="Issues"
                  style={{ width: "85%! important" }}
                />
              )}
              {/* <span></span> */}
            </i>
            <button
              className="uda-tutorial-btn"
              style={{
                display: "none",
                padding: "5px !important",
                height: "40px",
              }}
              type="button"
              id="uda-edit-clickedname-submit"
            >
              save
            </button>
            {/* &nbsp; &nbsp; <input type="checkbox" id="isPersonal" />
              <label style={{ fontSize: "14px" }}>Personal Information</label>
              <span style={{ position: "relative", top: "0px" }}>
                <img
                  src="https://digital-assistant.github.io/Digital_Assistant_Client/chrome-plugin/images/icons/info.png"
                  title="select this box if this field / text contains personal information like name / username. We need to ignore personal information while processing."
                />
              </span>
              <br />
              <br /> */}
          </li>
        );
      });
  };

  const addLabel = () => {
    console.log("add label");
  };

  const cancelRecording = () => {
    if (props.recordHandler) props.recordHandler("cancel");
    setToStore([], CONFIG.RECORDING_SEQUENCE, false);
  };

  const submitRecording = async () => {
    const instance = await postRecordSequenceData({
      name: JSON.stringify([name]),
    });
    if (instance && props?.refetchSearch) {
      props.refetchSearch("on");
    }
    setToStore([], CONFIG.RECORDING_SEQUENCE, false);
  };

  const onChange = async (e: any) => {
    setName(e.target.value);
  };

  return props?.isShown ? (
    <div className="uda-card-details">
      <h5>Recorded Sequence</h5>
      <hr style={{ border: "1px solid #969696", width: "100%" }} />
      <ul className="uda-recording" id="uda-recorded-results">
        {renderData()}
      </ul>
      <hr style={{ border: "1px solid #969696", width: "100%" }} />
      <div style={{ textAlign: "left" }}>
        <input
          type="text"
          id="uda-recorded-name"
          name="uda-save-recorded[]"
          className="uda-form-input"
          placeholder="Enter Label"
          onChange={onChange}
        />
        <div id="uda-sequence-names" />
        <div style={{ marginBottom: "10px" }}>
          <button className="add-btn uda_exclude" onClick={() => addLabel()}>
            + Add Label
          </button>
        </div>

        <div style={{ marginTop: "40px", maxWidth: "100%" }}>
          <button className="uda-record-btn" onClick={() => cancelRecording()}>
            <span className="uda_exclude">Cancel and Exit</span>
          </button>
          <button
            className="uda-tutorial-btn uda_exclude"
            onClick={() => submitRecording()}
            style={{ float: "right", padding: "5px 20px" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
