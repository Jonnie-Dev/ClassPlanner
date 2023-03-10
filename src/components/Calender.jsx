import React from "react";
import Event from "./Event";

const Calender = () => {
  return (
    <div className="Calender">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8:00</td>
            <Event name={"CHM 102"} venue={"1000SLT"} color={"blue"} />
            <Event name={"SER 001"} venue={"HSLT C"} color={""} />
            <Event name={"MTH 102"} venue={"ODLT II"} color={"green"} />
            <Event name={"SER 001"} venue={"HSLT C"} color={""} />
            <Event name={"CHM 102"} venue={"1000SLT"} color={"blue"} />
          </tr>
          <tr>
            <td className="time">9:00</td>
            <Event name={"PHY 102"} venue={"1000SLT"} color={"pink"} />
            <Event name={"MTH 102"} venue={"FBLT"} color={"green"} />
            <Event name={"CHM 102"} venue={"1000SLT"} color={"blue"} />
            <Event name={"CHM 102"} venue={"1000SLT"} color={"blue"} />
            <Event name={"PHY 102"} venue={"1000SLT"} color={"pink"} />
          </tr>
          <tr>
            <td className="time">10:00</td>
            <Event name={""} venue={""} color={""} />
            <Event name={"CHM 102"} venue={"1000SLT"} color={"blue"} />
            <Event name={""} venue={""} color={""} />
            <Event name={"EEE 152"} venue={"PY 130"} color={"light"} />
            <Event name={"MTH 104"} venue={"FBLT"} color={"green"} />
          </tr>
          <tr>
            <td className="time">11:00</td>
            <Event name={"MTH 104"} venue={"ODLT II"} color={"green"} />
            <Event name={""} venue={""} color={""} />
            <Event name={"PHY 102"} venue={"1000SLT"} color={"pink"} />
            <Event name={""} venue={""} color={""} />
            <Event name={""} venue={""} color={""} />
          </tr>
          <tr>
            <td className="time">12:00</td>
            <Event name={""} venue={""} color={""} />
            <Event name={"EEE 152"} venue={"PY 130"} color={"light"} />
            <Event name={""} venue={""} color={""} />
            <Event name={""} venue={""} color={""} />
            <Event name={""} venue={""} color={""} />
          </tr>
          <tr>
            <td className="time">13:00</td>
            <Event name={"**MTH 104"} venue={"1000SLT"} color={"green"} />
            <Event name={""} venue={""} color={""} />
            <Event name={"**MTH 102"} venue={"1000SLT"} color={"green"} />
            <Event name={"**MTH 104"} venue={"CELT"} color={"green"} />
            <Event name={""} venue={""} color={""} />
          </tr>
          <tr>
            <td className="time">14:00</td>
            <Event name={"CHM 104"} venue={""} color={"blue"} rowSpan={"3"} />
            <Event name={""} venue={""} color={""} />
            <Event name={"**MTH 104"} venue={"ODLT II"} color={"green"} />
            <Event name={"**MTH 102"} venue={"1000SLT"} color={"green"} />
            <Event name={"MTH 102"} venue={"FBLT"} color={"green"} />
          </tr>
          <tr>
            <td className="time">15:00</td>
            {/* <Event name={"CHM 104"} venue={""} color={""} /> */}
            <Event name={""} venue={""} color={""} />
            <Event name={""} venue={""} color={""} />
            <Event name={"**MTH 102"} venue={"1000SLT"} color={"green"} />
            <Event name={""} venue={""} color={""} />
          </tr>
          <tr>
            <td className="time">16:00</td>
            {/* <Event name={"CHM 104"} venue={""} color={""} /> */}
            <Event name={"MTH 102"} venue={"BOOC"} color={"green"} />
            <Event name={""} venue={""} color={""} />
            <Event name={"**MTH 104"} venue={"1000SLT"} color={"green"} />
            <Event name={""} venue={""} color={""} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
