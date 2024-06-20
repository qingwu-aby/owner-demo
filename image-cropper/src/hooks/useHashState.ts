/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-20 20:16:24
 * @LastEditTime: 2024-06-20 21:23:37
 */
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export function useHashState(defaultValue?: string, allowedValues?: string[]): [string | null, (value: string) => void] {
	const location = useLocation();
	const history = useHistory();
	const hash = location?.hash?.replace('#', '');

	const value = allowedValues ? (allowedValues.indexOf(hash) >= 0 ? hash : defaultValue) : hash || defaultValue;

	const [internalValue, setInternalValue] = useState<unknown | any>(value)

	const setValue = (value: string) => {
		history.replace({
			pathname: location.pathname,
			hash: value,
		});
	};


	useEffect(() => {
		if (internalValue !== value) {
			setInternalValue(value);
		}
	}, [value])

	return [internalValue, setValue];
}
