import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, Dropdown } from 'react-bootstrap';
import { IMAGES, SVGICON } from '../Dashboard/Content';
import request from '../../request';
import circle from './../../assets/images/circle.svg';
import { useEffect } from 'react';
import { routes } from '../../constants/api';
import { StoreContext } from '../../App';

const Food = () => {
	const [audiobooks, setAudiobooks] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const { setAudiobook, store, clearAudiobook } = useContext(StoreContext);

	const getAudioBooks = async () => {
		const response = await request.get(routes.USER_AUDIOBOOKS);
		const books = response.data.data;
		const totalItems = response.data.count;
		setAudiobooks(books);
		setTotalItems(totalItems);
	};
	useEffect(() => {
		getAudioBooks();
	}, []);

	const playPauseAudioBook = (item) => {
		if (
			store?.currentAudiobook &&
			store?.currentAudiobook?.id === item._id
		) {
			clearAudiobook();
			return;
		}
		setAudiobook(item._id, 'http://localhost:8000/' + item.file);
	};

	return (
		<div className='card'>
			<Tab.Container defaultActiveKey={'All'}>
				<div className='card-header border-0 pb-0 flex-wrap'>
					<h4 className='mb-0'>Food Menu</h4>
					<Nav as='ul' className='nav nav-tabs food-tabs'>
						<Nav.Item as='li'>
							<Nav.Link eventKey={'All'} id='home-tab'>
								All Means
							</Nav.Link>
						</Nav.Item>
						{/* <Nav.Item
							as='li'
							className='nav-item'
							role='presentation'>
							<Nav.Link eventKey={'Break'}>Breakefast</Nav.Link>
						</Nav.Item>
						<Nav.Item
							as='li'
							className='nav-item'
							role='presentation'>
							<Nav.Link eventKey={'Lunch'}>Lunch</Nav.Link>
						</Nav.Item>
						<Nav.Item
							as='li'
							className='nav-item'
							role='presentation'>
							<Nav.Link eventKey={'Snack'}>Snack</Nav.Link>
						</Nav.Item> */}
					</Nav>
				</div>
				<div className='card-body'>
					<Tab.Content id='myTabContent'>
						<Tab.Pane eventKey={'All'}>
							<div className='table-responsive'>
								<table className='table table-details'>
									<tbody>
										{audiobooks.map((item, ind) => (
											<tr key={ind}>
												<td style={{ width: '100px' }}>
													<div className='food-menu'>
														<img
															className='me-3 rounded avatar avatar-xl'
															src={
																'http://localhost:8000' +
																item.coverImage
															}
															alt='Cover Image'
														/>
														<div className='food-info'>
															<span className=' badge badge-sm badge-primary mb-2'>
																{item.subtitle}
															</span>
															<h5>
																<Link to={'#'}>
																	{item.title}
																</Link>
															</h5>
														</div>
													</div>
												</td>
												<td>
													<ul className='food-review'>
														<li>
															<i className='fa fa-star'></i>
														</li>
														<li>
															<h5 className='font-w700'>
																{item.rating.toFixed(
																	1
																)}
															</h5>
														</li>
													</ul>
												</td>
												<td style={{ width: '100px' }}>
													<div className='food-menu'>
														<div className='food-info'>
															<span className=' badge badge-sm badge-primary mb-2'>
																Authors
															</span>
															<h5>
																<Link to={'#'}>
																	{item.authors
																		?.map(
																			(
																				author
																			) =>
																				author.name
																		)
																		?.join(
																			','
																		)}
																</Link>
															</h5>
														</div>
													</div>
												</td>
												<td style={{ width: '100px' }}>
													<div className='food-menu'>
														<div className='food-info'>
															<span className=' badge badge-sm badge-primary mb-2'>
																Duration
															</span>
															<h5>
																<Link to={'#'}>
																	{
																		item?.duration
																	}
																</Link>
															</h5>
														</div>
													</div>
												</td>
												<td style={{ width: '100px' }}>
													<div className='food-menu'>
														<div className='food-info'>
															<button
																onClick={() =>
																	playPauseAudioBook(
																		item
																	)
																}
																className='btn btn-success'>
																{store?.currentAudiobook &&
																store
																	?.currentAudiobook
																	?.id ===
																	item._id
																	? 'Stop'
																	: 'Play'}
															</button>
														</div>
													</div>
												</td>
												{/* <td className='text-end'>
													<Dropdown className='custom-dropdown'>
														<Dropdown.Toggle
															as='div'
															className='i-false btn sharp  btn-light'>
															{SVGICON.dots}
														</Dropdown.Toggle>
														<Dropdown.Menu
															className='dropdown-menu-end'
															align='end'>
															<Dropdown.Item>
																Option 1
															</Dropdown.Item>
															<Dropdown.Item>
																Option 2
															</Dropdown.Item>
															<Dropdown.Item>
																Option 3
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</td> */}
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
	);
};

export default Food;
