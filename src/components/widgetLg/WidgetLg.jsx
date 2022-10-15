import "./widgetLg.css";
export default function WidgetLg() {
  const Button = ({ type })=>{
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.assettype.com/fortuneindia%2F2022-04%2F89c6c728-0e6d-497d-9bb1-2c5757fa7a88%2FAdani_1.jpg?rect=0,0,2047,1151&w=1250&q=60" alt="" 
              className="widgetLgImg" />
              <span className="widgetLgName">Gowtham Adaani</span>
            </td>
            <td className="widgetLgDate">10th Oct 2022</td>
            <td className="widgetLgAmount">$2500</td>
            <td className="widgetStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.assettype.com/fortuneindia%2F2022-04%2F89c6c728-0e6d-497d-9bb1-2c5757fa7a88%2FAdani_1.jpg?rect=0,0,2047,1151&w=1250&q=60" alt=""
               className="widgetLgImg" />
              <span className="widgetLgName">Gowtham Adaani</span>
            </td>
            <td className="widgetLgDate">11th Oct 2022</td>
            <td className="widgetLgAmount">$2567</td>
            <td className="widgetStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.assettype.com/fortuneindia%2F2022-04%2F89c6c728-0e6d-497d-9bb1-2c5757fa7a88%2FAdani_1.jpg?rect=0,0,2047,1151&w=1250&q=60" alt="" 
              className="widgetLgImg" />
              <span className="widgetLgName">Gowtham Adaani</span>
            </td>
            <td className="widgetLgDate">10th Oct 2022</td>
            <td className="widgetLgAmount">$3321</td>
            <td className="widgetStatus">
              <Button type="Pending"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.assettype.com/fortuneindia%2F2022-04%2F89c6c728-0e6d-497d-9bb1-2c5757fa7a88%2FAdani_1.jpg?rect=0,0,2047,1151&w=1250&q=60" alt="" 
              className="widgetLgImg" />
              <span className="widgetLgName">Gowtham Adaani</span>
            </td>
            <td className="widgetLgDate">10th Oct 2022</td>
            <td className="widgetLgAmount">$2500</td>
            <td className="widgetStatus">
              <Button type="Approved"/>
            </td>
          </tr>
        </table>
    </div>
  )
}
