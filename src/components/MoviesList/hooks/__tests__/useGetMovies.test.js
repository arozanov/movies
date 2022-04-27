// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Home from '@/pages/home'; // Update this accordingly
// import * as hooks from '../useGetMovies'; // Update this accordingly
//
// describe('Test <Home />', () => {
//     it('should call useProducts after 600ms after typing', async () => {
//         const mockHook = jest.fn();
//         jest.spyOn(hooks, 'useGetMovies').mockImplementation(mockHook);
//         render(<Home />);
//         const input = screen.getByPlaceholderText('Find Movies');
//         userEvent.type(input, 'A');
//         expect(mockHook).not.toHaveBeenCalledWith('A'); // It won't be called immediately
//         await waitFor(() => expect(mockHook).toHaveBeenCalledWith('A'), { timeout: 650 }); // But will get called within 350ms
//         jest.clearAllMocks();
//     });
// });