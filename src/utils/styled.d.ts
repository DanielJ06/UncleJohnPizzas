import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		Colors: {
			red: string;
			orange: string;
			purple: string;
			lightPurple: string;
			stroke: string;
			lightGrey: string;
			white: string;
			green: string;
			lightGreen: string;
		};

		ScreenSize: {
			width: number;
			height: number;
		};
	}
}
