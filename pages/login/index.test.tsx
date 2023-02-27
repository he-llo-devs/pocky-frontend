import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, renderHook } from '@testing-library/react';
import { I18nextProvider, useTranslation} from 'react-i18next';
import { act } from 'react-dom/test-utils';

//Types
import { RenderResult } from '@testing-library/react';
import { I18n } from 'next-i18next';

import Login from '.';

describe("Login page", (): void => {
	let HomeComponent: RenderResult;
	let i18n: I18n;

	beforeEach(() => {
		const { result } = renderHook(() => useTranslation());
		i18n = result.current.i18n;

		HomeComponent = render(
			<I18nextProvider i18n={i18n}>
				<Login/>
			</I18nextProvider>
		);
	});

	afterEach(() => {
		cleanup();
	});

	it("renders page", (): void => {
		const h1 = HomeComponent.getByRole('heading');
		expect(h1).toBeInTheDocument();
	});
});