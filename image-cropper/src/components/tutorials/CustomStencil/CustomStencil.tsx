/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-20 19:58:34
 * @LastEditTime: 2024-06-20 20:20:55
 */
import React, { useState } from 'react';
import { Cropper } from 'react-advanced-cropper';
import { CircleStencil } from './components/CircleStencil';
// import '../../examples/ChangingStencilExample.scss';

export const CustomStencil = () => {
	const [image] = useState('/react-advanced-cropper/img/images/pexels-photo-1451124.jpeg');

	return <Cropper className={'custom-stencil-example'} stencilComponent={CircleStencil} src={image} />;
};
