import React from "react"
import ReactDOM from "react-dom"
const autoBind = require("auto-bind")
const ipaddress = require('ip-address')

import { Container, Row, Col } from "react-bootstrap"


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
        let binaryAddressDetails = null
        try {
          let ipAddressDetails
          try {
            // IPv4 more likely?
            ipAddressDetails = new ipaddress.Address4(ipAddress)

            // this shit is too bulky in IPv6
            binaryAddressDetails = (
              <Row>
                <Col xs={4} md={3} lg={2}>Address (binary)</Col>
                <Col xs={1}>
                  <font color="red">
                    {ipAddressDetails.mask()}
                  </font>
                  <font color="blue">
                    {ipAddressDetails.getBitsBase2(ipAddressDetails.subnetMask)}
                  </font>
                </Col>
              </Row>
            )
          } catch {
            ipAddressDetails = new ipaddress.Address6(ipAddress)
          }

          details = (
            <>
              <Row>
                <Col xs={4} md={3} lg={2}>Address</Col>
                <Col xs={1}>
                  {ipAddressDetails.addressMinusSuffix}{ipAddressDetails.subnet}
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={3} lg={2}>Start of Subnet</Col>
                <Col xs={1}>{ipAddressDetails.startAddress().address}</Col>
              </Row>
              <Row>
                <Col xs={4} md={3} lg={2}>End of Subnet</Col>
                <Col xs={1}>{ipAddressDetails.endAddress().address}</Col>
              </Row>
              {binaryAddressDetails}
            </>
          )
        } catch {
          // not a valid IPv4 or IPv6 address
        }
        return (
          <Container>
            <Row>
              <Col xs={4} md={3} lg={2}>
                <label htmlFor="ipAddress">IP Address</label>
              </Col>
              <Col xs={1}>
                <input name="ipAddress"
                  value={ipAddress}
                  onChange={event => this.setState({ipAddress: event.target.value})}
                  placeholder="127.0.0.1/8"
                  autoFocus/>
              </Col>
            </Row>
            {details}
          </Container>
        )
    }
}

export default CIDRCheck
