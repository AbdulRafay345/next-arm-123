import React from 'react';
import { Col, Image, Row, Typography, Button } from 'antd';
import banner_1 from '../../../assets/images/banner-3.jpg';
import banner_2 from '../../../assets/images/banner-4.jpg';
import hospitality_img from '../../../assets/images/hospitality.jpeg';
import banking_img from '../../../assets/images/banking-financial.jpg';
import tele_img from '../../../assets/images/telecommunications.jpg';
import health_img from '../../../assets/images/health-care.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../components/Footer';

import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{ overflow: "hidden" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ position: 'relative' }}>
                        <img className="d-block w-100" src={banner_1} alt="First slide" />
                        <div className="carousel-caption d-md-block d-sm-flex align-sm-center" style={{ position: 'absolute', color: 'white', top: '10%' }}>
                            <Text className="d-none d-md-block" style={{ color: 'white', fontSize: '20px', fontWeight: '500' }}>WELCOME TO</Text>
                            <Title level={2} className="d-none d-md-block" style={{ color: 'white', fontSize: '35px', fontWeight: '700', marginBottom: '50px' }}>Next Arm</Title>
                            <Button className='banner-button'>
                                <Link to='/contact' className='text-decoration-none'> Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ position: 'relative' }}>
                        <img className="d-block w-100" src={banner_2} alt="Second slide" />
                        <div className="carousel-caption d-md-block" style={{ position: 'absolute', color: 'white', top: '10%' }}>
                            <Text className="d-none d-md-block" style={{ color: 'white', fontSize: '20px', fontWeight: '500' }}>WELCOME TO</Text>
                            <Title level={2} className="d-none d-md-block" style={{ color: 'white', fontSize: '35px', fontWeight: '700', marginBottom: '50px' }}>Next Arm</Title>
                            <Button className='banner-button'>
                                <Link to='/services' className='text-decoration-none'> Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
            </div>

            {/* Services Section */}
            <section style={{ margin: '60px' }}>
                <Title level={1} className='text-center mb-5 mt-5' style={{ color: "rgba(0,0,0,.6" }}>
                    Services
                </Title>

                <Row gutter={[16, 16]} justify="center">
                    <Col xs={22} sm={16} md={12} lg={6}>
                        <div className="card p-2" style={{ backgroundColor: 'whitesmoke', textAlign: 'justify' }}>
                            <Link className="card-body-indus text-decoration-none" to='/services'>
                                <Title level={4} className="card-title mb-4">Cloud Services</Title>
                                <Text style={{ fontSize: '17px' }} className="card-text">   Our cloud services are designed to offer businesses enhanced flexibility and scalability .....</Text>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={22} sm={16} md={12} lg={6}>
                        <div className="card p-2" style={{ backgroundColor: 'whitesmoke', textAlign: 'justify' }}>
                            <Link className="card-body-indus text-decoration-none" to='/services/cyberSecurity'>
                                <Title level={4} className="card-title mb-4">Cyber Security</Title>
                                <Text style={{ fontSize: '17px' }} className="card-text">In today's digital age, protecting your business from cyber threats is critical. We provide comprehensive ....</Text>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={22} sm={16} md={12} lg={6}>
                        <div className="card p-2" style={{ backgroundColor: 'whitesmoke', textAlign: 'justify' }}>
                            <Link className="card-body-indus text-decoration-none" to='/services/cloudMigration'>
                                <Title level={4} className="card-title mb-4">Cloud Migration</Title>
                                <Text style={{ fontSize: '17px' }} className="card-text">Our Cloud Migration and Management services are designed to help businesses seamlessly...</Text>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={22} sm={16} md={12} lg={6}>
                        <div className="card p-2" style={{ backgroundColor: 'whitesmoke', textAlign: 'justify' }}>
                            <Link className="card-body-indus text-decoration-none" to='/services/softwareDevelopment'>
                                <Title level={4} className="card-title mb-4">Software Development</Title>
                                <Text style={{ fontSize: '17px' }} className="card-text">We specialize in providing custom software development solutions tailored to meet....</Text>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Industries Section */}
            <section className='industries w-100 mb-sm-3 mb-5'>
                <Title level={1} className='text-center mb-5 mt-5' style={{ color: "rgba(0,0,0,.6" }}>INDUSTRIES</Title>
                <Row gutter={[16, 16]} className='inner-section mb-sm-3 mb-5 d-sm-flex d-flex justify-content-center' style={{ gap: '38px' }}>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={hospitality_img} className="card-img-top" alt="hospitilality" style={{ height: "144px", width: "256px" }} />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Hospitality</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>The hospitality industry is one of the most...</Text>
                                <Link className='text-decoration-none' to='/industries'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={tele_img} className="card-img-top" alt="Telecommunications" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Telecommunications</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Proven call center solutions for your telecom...</Text>
                                <Link className='text-decoration-none' to='/industries/telecom'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={banking_img} className="card-img-top" alt="Banking & Financial" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Banking & Financial</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Revolutionizing the financial services sector...</Text>
                                <Link className='text-decoration-none' to='/industries/banking'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={health_img} className="card-img-top" alt="Health Care" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Health Care</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Transforming health care for the digital age...</Text>
                                <Link className='text-decoration-none' to='/industries/health'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </section>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
