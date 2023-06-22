import React from 'react';
import "./noteApp.css";
import { useTranslation } from 'react-i18next';

const Header = ({ handleToggleDarkMode }) => {
	const { t } = useTranslation();
	return (
		
		<div className='header'>
			<h1>{t('header.title')}</h1>

		</div>
	);
};

export default Header;
