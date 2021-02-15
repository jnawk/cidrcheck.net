import React from "react"
import ReactDOM from "react-dom"
const autoBind = require("auto-bind")

const ipaddress = require('ip-address')


class CIDRCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ipAddress: '' }

        autoBind(this)
    }

    componentDidMount() {
    }

    render(){
        const { ipAddress } = this.state
        let details = null
        try {
          let sa
          try {
            sa = new ipaddress.Address4(ipAddress)
          } catch {
            sa = new ipaddress.Address6(ipAddress)
          }

          // TODO a TABLE?  yuk!
          details = (
            <>
              <br />
              <table>
              <tbody>
                <tr>
                  <th>Address</th>
                  <td>{sa.addressMinusSuffix}{sa.subnet}</td>
                </tr>
                <tr>
                  <th>Start of Subnet</th>
                  <td>{sa.startAddress().address}</td>
                </tr>
                <tr>
                  <th>End of Subnet</th>
                  <td>{sa.endAddress().address}</td>
                </tr>
                </tbody>
              </table>
            </>
          )
        } catch {
          // not a valid IPv4 or IPv6 address
        }
        return (
            <>
              <label htmlFor="ipAddress">IP Address</label>
              <input name="ipAddress"
                value={ipAddress}
                onChange={event => this.setState({ipAddress: event.target.value})}
                placeholder="127.0.0.1"/>
              {details}
            </>
        )
    }
}

export default CIDRCheck
