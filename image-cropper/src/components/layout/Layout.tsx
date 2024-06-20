/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-20 19:58:34
 * @LastEditTime: 2024-06-20 21:01:10
 */
import './Layout.scss';
// import LayoutProviders from '@theme/LayoutProviders';
// import type { Props } from '@theme/Layout';
// import useKeyboardNavigation from '../hooks/useKeyboardNavigation';

function Layout(props: { children }) {

	// useKeyboardNavigation();

	return (
		<div className='main-page-layout'>
			{props.children}
		</div>
	);
}

export default Layout;
