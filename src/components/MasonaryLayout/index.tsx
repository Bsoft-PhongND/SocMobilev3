import { HStack, VStack } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React from 'react';

interface PropsTypes {
	column?:any;
	_hStack?:IHStackProps;
	_vStack?:any;
	children?:any;
}
export const MasonaryLayout = ({
	column,
	_hStack,
	_vStack,
	children,
	...props
}:PropsTypes) => {
	const vStackChildren:Array<any> = [];
	const childrenLength = children.length;
	const columnLength = column.length;
	React.Children.map(children, (child, cIndex) => {
		const pos = cIndex % columnLength;
		if (!vStackChildren[pos]) vStackChildren[pos] = [];
		// if (childrenLength - cIndex <= columnLength) {
		// 	vStackChildren[pos].push(React.cloneElement(child, { flex: 1 }));
		// } else {
		vStackChildren[pos].push(child);
		// }
	});

	const vstackTemplate = () => {
		return column.map((flexVal:any, index:number) => {
			vStackChildren[index][vStackChildren[index].length - 1] =
				React.cloneElement(
					vStackChildren[index][vStackChildren[index].length - 1],
					{ flex: 1 },
				);
			return (
				<VStack {..._vStack} flex={flexVal} key={index}>
					{vStackChildren[index]}
				</VStack>
			);
		});
	};

	return <HStack {..._hStack}>{vstackTemplate()}</HStack>;
};