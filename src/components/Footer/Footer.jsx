import './Footer.css'
import { Row, Col } from "antd"
import { FacebookFilled, YoutubeFilled, InstagramFilled } from '@ant-design/icons'
import { Link } from 'react-router'

function Footer() {
    return (
        <div className="footer py-4 bg-light">
            <div className="container d-flex justify-content-center">
                <Row justify="center" align="top" gutter={[98, 16]}>
                    {/* Column 1: Links */}
                    <Col xs={24} sm={12} md={7} className="d-flex flex-column align-items-center mb-3 mb-md-0">
                        <Link to="/support">Request Support</Link><br />
                        <Link to="#">Community</Link><br />
                        <Link to="#">Conditions</Link>
                    </Col>
                    {/* Column 2: Contact Info */}
                    <Col xs={24} sm={12} md={10} className="d-flex flex-column align-items-center mb-3 mb-md-0">
                        <div>Email: info@business.com</div><br />
                        <div>Phone: +84 123 456 789</div>
                    </Col>
                    {/* Column 3: Address & Social Icons */}
                    <Col xs={24} sm={12} md={7} className="d-flex flex-column align-items-center">
                        <div>123 Main St, Hanoi, Vietnam</div>
                        <div className="mt-2">
                            <a href="#" className="me-3"><FacebookFilled style={{ fontSize: 24, color: "#4267B2" }} /></a>
                            <a href="#" className="me-3"><YoutubeFilled style={{ fontSize: 24, color: "#FF0000" }} /></a>
                            <a href="#"><InstagramFilled style={{ fontSize: 24, color: "#C13584" }} /></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Footer