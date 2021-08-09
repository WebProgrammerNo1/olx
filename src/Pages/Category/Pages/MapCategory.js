import React from "react";
import { Link, useParams } from "react-router-dom";
import datas from "../../../data";
import imgData from "../../../noImgData";

const MapCategory = () => {
	const { category } = useParams();
	const data = datas[category];
	const data2 = imgData[category];

	return (
		<div>
			<h1 className='mb-4'>Category {category}</h1>

			<div className='products'>
				{data?.map(v => (
					<Link
						to={`${category}`}
						className='mb-3 rounded overflow-hidden shadow d-flex justify-content-between'>
						<div className='d-flex'>
							<img
								src={v.img}
								style={{
									height: "200px",
									width: "200px",
									objectFit: "cover"
								}}
								alt=''
							/>

							<div className='h-100 d-flex flex-column justify-content-between p-3'>
								<h4>{v.title}</h4>
								<span>{v.location}</span>
							</div>
						</div>
						<h4 className='m-3'>{v.price}</h4>
					</Link>
				))}
				{data2?.map(v => (
					<Link
						to={`${category}`}
						className='mb-3 rounded overflow-hidden shadow d-flex justify-content-between'>
						<div className='d-flex'>
							<div className='h-100 d-flex flex-column justify-content-between p-3'>
								<h4 className='mb-5'>{v.title}</h4>
								<span className='mt-4'>{v.location}</span>
							</div>
						</div>
						<h4 className='m-3'>{v.price}</h4>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MapCategory;
