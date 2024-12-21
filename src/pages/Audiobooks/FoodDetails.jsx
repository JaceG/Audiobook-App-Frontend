import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Dropdown, Tab } from 'react-bootstrap';
import { IMAGES, SVGICON } from '../Dashboard/Content';
import circle from './../../../assets/images/circle.svg';

import quotes from './../../../assets/images/quotes.svg';

const inputBlog = [
    { inputid: '1234', lable: 'Calories: 217.', inputid2: '23456', lable2: '2 tablespoons butter, softened, divided' },
    { inputid: '1235', lable: 'Water: 61%', inputid2: '23457', lable2: '1 teaspoon minced fresh parsley' },
    { inputid: '1236', lable: 'Protein: 26.1 grams.', inputid2: '23458', lable2: '1/2 teaspoon minced garlic' },
    { inputid: '1237', lable: 'Carbs: 0 grams.', inputid2: '23459', lable2: '1/4 teaspoon reduced-sodium soy sauce' },
    { inputid: '1238', lable: 'Sugar: 0 grams.', inputid2: '23460', lable2: '1 beef flat iron steak or boneless top sirloin steak (3/4 pound)' },
    { inputid: '1239', lable: 'Fiber: 0 grams.', inputid2: '23461', lable2: '1/8 teaspoon salt' },
    { inputid: '1240', lable: 'Vitamin: 10 grams.', inputid2: '23462', lable2: '1/8 teaspoon pepper' },
];

const cardBlog = [
    { image: IMAGES.avatarpng1, title: 'Samantha W.' },
    { image: IMAGES.avatarpng2, title: 'Karen Hope.' },
    { image: IMAGES.avatarpng3, title: 'Tony Soap' },
];

const tabledata = [
    { image: IMAGES.food3, title: 'Beef Steak with Fried Potato', subtitle: 'Snack', rating: '5.0', sales: '1,400', intrest: '17%' },
    { image: IMAGES.food5, title: 'Pancake with Honey', subtitle: 'Snack', rating: '4.8', sales: '1,456', intrest: '15%' },
];

const FoodDetails = () => {
    return (
        <div className="row">
            <div className="col-xl-9">
                <div className="card">
                    <div className="card-body">
                        <ul className="d-sm-flex d-block align-items-start justify-content-between mb-5">
                            <li className="food-media">
                                <img src={IMAGES.food6} className="rounded" alt="" />
                            </li>
                            <li className="ms-sm-3 ms-0">
                                <h4 className="heading">Beef Steak with Fried Potato</h4>
                                <span className="badge badge-primary badge-sm mb-3">Lunch</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </li>
                            <li>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle as="div" className="i-false btn sharp  btn-light">
                                        {SVGICON.dots}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end" align="end">
                                        <Dropdown.Item>Option 1</Dropdown.Item>
                                        <Dropdown.Item>Option 2</Dropdown.Item>
                                        <Dropdown.Item>Option 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-2 col-6 mb-md-0 mb-3">
                                <ul>
                                    <li>Rating</li>
                                    <li><i className="fa fa-star text-warning fs-20 me-2"></i><a className="heading m-0 text-primary">4.9</a></li>
                                </ul>

                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-6 mb-md-0 mb-3">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <svg className="me-3" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="var(--primary)" />
                                            <path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="var(--primary)" />
                                            <path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="var(--primary)" />
                                            <path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="var(--primary)" />
                                        </svg>
                                    </li>
                                    <li>
                                        <h4>1.456</h4>
                                        <span>Total Order</span>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588751 36.9411 0.0588751H9.94113C8.28427 0.0588751 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589V3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z" fill="var(--primary)" />
                                        </svg>
                                    </li>
                                    <li className="ms-3">
                                        <h4>26%</h4>
                                        <span>Interest</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <ul>
                                    <li>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM6 30C6 43.2548 16.7452 54 30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30Z" fill="#C1BBEB" />
                                            <path d="M30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.1607 45.5871 -2.21335e-07 37.9565 0 30C2.21335e-07 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.1607 22.0435 -9.48802e-08 30 0V6C23.6348 6 17.5303 8.52856 13.0294 13.0294C8.52856 17.5303 6 23.6348 6 30C6 36.3652 8.52856 42.4697 13.0294 46.9706C17.5303 51.4714 23.6348 54 30 54V60Z" fill="var(--primary)" />
                                            <path d="M22.602 25.488H18.066V27.882C18.262 27.6393 18.542 27.4433 18.906 27.294C19.27 27.1353 19.6573 27.056 20.068 27.056C20.8147 27.056 21.426 27.2193 21.902 27.546C22.378 27.8727 22.7233 28.2927 22.938 28.806C23.1527 29.31 23.26 29.8513 23.26 30.43C23.26 31.5033 22.952 32.3667 22.336 33.02C21.7293 33.6733 20.8613 34 19.732 34C18.668 34 17.8187 33.734 17.184 33.202C16.5493 32.67 16.19 31.9747 16.106 31.116H18.01C18.094 31.4893 18.2807 31.788 18.57 32.012C18.8687 32.236 19.2467 32.348 19.704 32.348C20.2547 32.348 20.67 32.1753 20.95 31.83C21.23 31.4847 21.37 31.0273 21.37 30.458C21.37 29.8793 21.2253 29.4407 20.936 29.142C20.656 28.834 20.2407 28.68 19.69 28.68C19.298 28.68 18.9713 28.778 18.71 28.974C18.4487 29.17 18.262 29.4313 18.15 29.758H16.274V23.766H22.602V25.488ZM24.7518 28.764C24.7518 27.1493 25.0411 25.8847 25.6198 24.97C26.2078 24.0553 27.1784 23.598 28.5318 23.598C29.8851 23.598 30.8511 24.0553 31.4298 24.97C32.0178 25.8847 32.3118 27.1493 32.3118 28.764C32.3118 30.388 32.0178 31.662 31.4298 32.586C30.8511 33.51 29.8851 33.972 28.5318 33.972C27.1784 33.972 26.2078 33.51 25.6198 32.586C25.0411 31.662 24.7518 30.388 24.7518 28.764ZM30.3798 28.764C30.3798 28.0733 30.3331 27.4947 30.2398 27.028C30.1558 26.552 29.9784 26.1647 29.7078 25.866C29.4464 25.5673 29.0544 25.418 28.5318 25.418C28.0091 25.418 27.6124 25.5673 27.3418 25.866C27.0804 26.1647 26.9031 26.552 26.8098 27.028C26.7258 27.4947 26.6838 28.0733 26.6838 28.764C26.6838 29.4733 26.7258 30.0707 26.8098 30.556C26.8938 31.032 27.0711 31.4193 27.3418 31.718C27.6124 32.0073 28.0091 32.152 28.5318 32.152C29.0544 32.152 29.4511 32.0073 29.7218 31.718C29.9924 31.4193 30.1698 31.032 30.2538 30.556C30.3378 30.0707 30.3798 29.4733 30.3798 28.764ZM33.5785 26.3C33.5785 25.5907 33.7839 25.0353 34.1945 24.634C34.6145 24.2327 35.1512 24.032 35.8045 24.032C36.4579 24.032 36.9899 24.2327 37.4005 24.634C37.8205 25.0353 38.0305 25.5907 38.0305 26.3C38.0305 27.0187 37.8205 27.5787 37.4005 27.98C36.9899 28.3813 36.4579 28.582 35.8045 28.582C35.1512 28.582 34.6145 28.3813 34.1945 27.98C33.7839 27.5787 33.5785 27.0187 33.5785 26.3ZM42.5665 24.2L37.0645 34H35.1605L40.6485 24.2H42.5665ZM35.7905 25.208C35.2772 25.208 35.0205 25.572 35.0205 26.3C35.0205 27.0373 35.2772 27.406 35.7905 27.406C36.0425 27.406 36.2385 27.3173 36.3785 27.14C36.5185 26.9533 36.5885 26.6733 36.5885 26.3C36.5885 25.572 36.3225 25.208 35.7905 25.208ZM39.7245 31.886C39.7245 31.1673 39.9299 30.612 40.3405 30.22C40.7605 29.8187 41.2972 29.618 41.9505 29.618C42.6039 29.618 43.1312 29.8187 43.5325 30.22C43.9432 30.612 44.1485 31.1673 44.1485 31.886C44.1485 32.6047 43.9432 33.1647 43.5325 33.566C43.1312 33.9673 42.6039 34.168 41.9505 34.168C41.2879 34.168 40.7512 33.9673 40.3405 33.566C39.9299 33.1647 39.7245 32.6047 39.7245 31.886ZM41.9365 30.794C41.4045 30.794 41.1385 31.158 41.1385 31.886C41.1385 32.6233 41.4045 32.992 41.9365 32.992C42.4592 32.992 42.7205 32.6233 42.7205 31.886C42.7205 31.158 42.4592 30.794 41.9365 30.794Z" fill="#303972" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-3"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xl-6 col-md-6">
                                <h5>Ingredients</h5>
                                <ul className="food-recipe">
                                    {inputBlog.map((item, ind) => (
                                        <div className="form-check" key={ind}>
                                            <input className="form-check-input" type="checkbox" value="" id={item.inputid2} />
                                            <label className="form-check-label font-w400" htmlFor={item.inputid2}>{item.lable2}</label>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <h5>Nutrition:</h5>
                                <ul className="food-recipe">
                                    {inputBlog.map((item, ind) => (
                                        <div className="form-check" key={ind}>
                                            <input className="form-check-input" type="checkbox" value="" id={item.inputid} />
                                            <label className="form-check-label font-w400" htmlFor={item.inputid}>
                                                {item.lable}
                                            </label>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3">
                <h4 className="heading">Student Comment</h4>
                {cardBlog.map((item, ind) => (
                    <div className="card h-auto" key={ind}>
                        <div className="card-body">
                            <div className="stud-comment">
                                <img src={quotes} alt="" />
                                <div>
                                    <span className="d-block mt-2 mb-3">
                                        Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.
                                    </span>
                                </div>
                                <ul className="d-flex align-items-center">
                                    <li><img src={item.image} className="avatar" alt="" /></li>
                                    <li className="ms-3">
                                        <h5 className="mb-0">{item.title}</h5>
                                        <p className="mb-0">5 days ago</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-xl-12">
                <div className="card">
                    <Tab.Container defaultActiveKey={'All'}>
                        <div className="card-header border-0 pb-0 flex-wrap">
                            <h4 className="mb-0">Food Menu</h4>
                            <Nav as="ul" className="nav nav-tabs food-tabs">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey={'All'} id="home-tab">All Means</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item" role="presentation">
                                    <Nav.Link eventKey={'Break'}>Breakefast</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item" role="presentation">
                                    <Nav.Link eventKey={'Lunch'} >Lunch</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item" role="presentation">
                                    <Nav.Link eventKey={'Snack'} >Snack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="card-body">
                            <Tab.Content>
                                <Tab.Pane eventKey={'All'}>
                                    <div className="table-responsive">
                                        <table className="table table-details">
                                            <tbody>
                                                {tabledata.map((item, ind) => (
                                                    <tr key={ind}>
                                                        <td style={{ width: '100px' }}>
                                                            <div className="food-menu">
                                                                <img className="me-3 rounded avatar avatar-xl" src={item.image} alt="DexignZone" />
                                                                <div className="food-info">
                                                                    <span className=" badge badge-sm badge-primary mb-2">{item.subtitle}</span>
                                                                    <h5><Link to={"#"}>{item.title}</Link></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <ul className="food-review">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><h5 className="font-w700">{item.rating}</h5></li>
                                                            </ul>

                                                        </td>
                                                        <td>
                                                            <ul className="d-flex">
                                                                <li>
                                                                    <svg className="me-3" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="var(--primary)" />
                                                                        <path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="var(--primary)" />
                                                                        <path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="var(--primary)" />
                                                                        <path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="var(--primary)" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.sales}</h3>
                                                                    <span>Total Sales</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <ul className="d-flex align-items-center">
                                                                <li><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588751 36.9411 0.0588751H9.94113C8.28427 0.0588751 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589V3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z" fill="var(--primary)" />
                                                                </svg>
                                                                </li>
                                                                <li className="ms-3">
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.intrest}</h3>
                                                                    <span>Interest</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <img src={circle} alt="" />
                                                        </td>
                                                        <td className="text-end">
                                                            <Dropdown className="custom-dropdown">
                                                                <Dropdown.Toggle as="div" className="i-false btn sharp  btn-light">
                                                                    {SVGICON.dots}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu-end" align="end">
                                                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Break'}>
                                    <div className="table-responsive">
                                        <table className="table table-details">
                                            <tbody>
                                                {tabledata.map((item, ind) => (
                                                    <tr key={ind}>
                                                        <td style={{ width: '100px' }}>
                                                            <div className="food-menu">
                                                                <img className="me-3 rounded avatar avatar-xl" src={item.image} alt="DexignZone" />
                                                                <div className="food-info">
                                                                    <span className=" badge badge-sm badge-primary mb-2">{item.subtitle}</span>
                                                                    <h5><Link to={"#"}>{item.title}</Link></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <ul className="food-review">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><h5 className="font-w700">{item.rating}</h5></li>
                                                            </ul>

                                                        </td>
                                                        <td>
                                                            <ul className="d-flex">
                                                                <li>
                                                                    <svg className="me-3" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="var(--primary)" />
                                                                        <path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="var(--primary)" />
                                                                        <path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="var(--primary)" />
                                                                        <path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="var(--primary)" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.sales}</h3>
                                                                    <span>Total Sales</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <ul className="d-flex align-items-center">
                                                                <li><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588751 36.9411 0.0588751H9.94113C8.28427 0.0588751 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589V3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z" fill="var(--primary)" />
                                                                </svg>
                                                                </li>
                                                                <li className="ms-3">
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.intrest}</h3>
                                                                    <span>Interest</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <img src={circle} alt="" />
                                                        </td>
                                                        <td className="text-end">
                                                            <Dropdown className="custom-dropdown">
                                                                <Dropdown.Toggle as="div" className="i-false btn sharp  btn-light">
                                                                    {SVGICON.dots}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu-end" align="end">
                                                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Lunch'}>
                                    <div className="table-responsive">
                                        <table className="table table-details">
                                            <tbody>
                                                {tabledata.map((item, ind) => (
                                                    <tr key={ind}>
                                                        <td style={{ width: '100px' }}>
                                                            <div className="food-menu">
                                                                <img className="me-3 rounded avatar avatar-xl" src={item.image} alt="DexignZone" />
                                                                <div className="food-info">
                                                                    <span className=" badge badge-sm badge-primary mb-2">{item.subtitle}</span>
                                                                    <h5><Link to={"#"}>{item.title}</Link></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <ul className="food-review">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><h5 className="font-w700">{item.rating}</h5></li>
                                                            </ul>

                                                        </td>
                                                        <td>
                                                            <ul className="d-flex">
                                                                <li>
                                                                    <svg className="me-3" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="var(--primary)" />
                                                                        <path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="var(--primary)" />
                                                                        <path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="var(--primary)" />
                                                                        <path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="var(--primary)" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.sales}</h3>
                                                                    <span>Total Sales</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <ul className="d-flex align-items-center">
                                                                <li><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588751 36.9411 0.0588751H9.94113C8.28427 0.0588751 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589V3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z" fill="var(--primary)" />
                                                                </svg>
                                                                </li>
                                                                <li className="ms-3">
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.intrest}</h3>
                                                                    <span>Interest</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <img src={circle} alt="" />
                                                        </td>
                                                        <td className="text-end">
                                                            <Dropdown className="custom-dropdown">
                                                                <Dropdown.Toggle as="div" className="i-false btn sharp  btn-light">
                                                                    {SVGICON.dots}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu-end" align="end">
                                                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Snack'}>
                                    <div className="table-responsive">
                                        <table className="table table-details">
                                            <tbody>
                                                {tabledata.map((item, ind) => (
                                                    <tr key={ind}>
                                                        <td style={{ width: '100px' }}>
                                                            <div className="food-menu">
                                                                <img className="me-3 rounded avatar avatar-xl" src={item.image} alt="DexignZone" />
                                                                <div className="food-info">
                                                                    <span className=" badge badge-sm badge-primary mb-2">{item.subtitle}</span>
                                                                    <h5><Link to={"#"}>{item.title}</Link></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <ul className="food-review">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><h5 className="font-w700">{item.rating}</h5></li>
                                                            </ul>

                                                        </td>
                                                        <td>
                                                            <ul className="d-flex">
                                                                <li>
                                                                    <svg className="me-3" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="var(--primary)" />
                                                                        <path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="var(--primary)" />
                                                                        <path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="var(--primary)" />
                                                                        <path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="var(--primary)" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.sales}</h3>
                                                                    <span>Total Sales</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <ul className="d-flex align-items-center">
                                                                <li><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588751 36.9411 0.0588751H9.94113C8.28427 0.0588751 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589V3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z" fill="var(--primary)" />
                                                                </svg>
                                                                </li>
                                                                <li className="ms-3">
                                                                    <h3 className="mb-0 font-w500 fs-22">{item.intrest}</h3>
                                                                    <span>Interest</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <img src={circle} alt="" />
                                                        </td>
                                                        <td className="text-end">
                                                            <Dropdown className="custom-dropdown">
                                                                <Dropdown.Toggle as="div" className="i-false btn sharp  btn-light">
                                                                    {SVGICON.dots}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu-end" align="end">
                                                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;