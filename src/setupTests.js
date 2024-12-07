import '@testing-library/jest-dom';
import { server } from './mocks/server';  // Example of mock server setup for tests

// Start MSW (Mock Service Worker) before tests
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests,
afterEach(() => server.resetHandlers());

// Close the server after all tests
afterAll(() => server.close());
