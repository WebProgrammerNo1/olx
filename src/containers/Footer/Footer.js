import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className='container py-5'>
				<div className='row d-flex py-4'>
					<div className='col-md-4'>
						<Link to='/mobileapps' className='d-block mb-2'>
							Мобильные приложения
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Помощь
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Платные услуги
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Бизнес на OLX
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Реклама на сайте
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Условия использования
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Политика конфиденциальности
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Партнёры
						</Link>
					</div>

					<div className='col-md-4'>
						<Link to='/mobileapps' className='d-block mb-2'>
							Как продавать и покупать?
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Правила безопасности
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Карта сайта
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Карта регионов
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Карьера в OLX
						</Link>
						<Link to='/mobileapps' className='d-block mb-2'>
							Обратная связь
						</Link>
					</div>
					<div className='col-md-4 d-flex'>
						<a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer"><img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" className="mx-1"/></a>
						<a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4"><img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" className="mx-1" /></a>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
