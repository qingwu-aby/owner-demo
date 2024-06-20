import React, { FC } from 'react';
import { CropperDescription } from './CroppersWizard';
import './CroppersWizardInfo.scss';

interface Props {
	data: CropperDescription;
}

export const CroppersWizardInfo: FC<Props> = (props) => {
	const { data } = props;

	return (
		<div className={'croppers-wizard-info'}>
			<div className="croppers-wizard-info__name">{data.info.name}</div>

			<div className="croppers-wizard-info__property">
				<div className="croppers-wizard-info__property-title">描述</div>
				<div className="croppers-wizard-info__property-value">{data.info.description}</div>
			</div>
		</div>
	);
};
